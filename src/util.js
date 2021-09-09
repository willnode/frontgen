function formatHTML(html) {
    var indent = '\n';
    var tab = '\t';
    var i = 0;
    var pre = [];

    html = html
        .replace(new RegExp('<pre>((.|\\t|\\n|\\r)+)?</pre>'), function (x) {
            pre.push({
                indent: '',
                tag: x
            });
            return '<--TEMPPRE' + i++ + '/-->'
        })
        .replace(new RegExp('<[^<>]+>[^<]?', 'g'), function (x) {
            var ret;
            var tag = /<\/?([^\s/>]+)/.exec(x)[1];
            var p = new RegExp('<--TEMPPRE(\\d+)/-->').exec(x);

            if (p)
                pre[p[1]].indent = indent;

            if (['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link',
                    'menuitem', 'meta', 'param', 'source', 'track', 'wbr'
                ].indexOf(tag) >= 0) // self closing tag
                ret = indent + x;
            else {
                if (x.indexOf('</') < 0) { //open tag
                    if (x.charAt(x.length - 1) !== '>')
                        ret = indent + x.substr(0, x.length - 1) + indent + tab + x.substr(x.length - 1, x
                            .length);
                    else
                        ret = indent + x;
                    !p && (indent += tab);
                } else { //close tag
                    indent = indent.substr(0, indent.length - 1);
                    if (x.charAt(x.length - 1) !== '>')
                        ret = indent + x.substr(0, x.length - 1) + indent + x.substr(x.length - 1, x
                            .length);
                    else
                        ret = indent + x;
                }
            }
            return ret;
        });

    for (i = pre.length; i--;) {
        html = html.replace('<--TEMPPRE' + i + '/-->', pre[i].tag.replace('<pre>', '<pre>\n').replace('</pre>',
            pre[i].indent + '</pre>'));
    }

    return html.charAt(0) === '\n' ? html.substr(1, html.length - 1) : html;
}

function unformatHTML(html) {
    var i = 0;
    var pre = [];

    html = html.replace(new RegExp('<pre>((.|\\t|\\n|\\r)+)?</pre>'), function (x) {
        pre.push(x);
        return '<--TEMPPRE' + i++ + '/-->'
    }).replace(/\n/g, '').replace(/\t/g, '');

    for (i = pre.length; i--;) {
        html = html.replace('<--TEMPPRE' + i + '/-->', pre[i]);
    }

    html = html.replace(new RegExp('<pre>\\n'), '<pre>').replace(new RegExp('\\n\\t*</pre>'), '</pre>');
    return html;
}

(function ($) {
    $.fn.serializeObject = function () {
        "use strict";

        var result = {};
        var extend = function (i, element) {
            var node = result[element.name];

            if ('undefined' !== typeof node && node !== null) {
                if ($.isArray(node)) {
                    node.push(element.value);
                } else {
                    result[element.name] = [node, element.value];
                }
            } else {
                result[element.name] = element.value;
            }
        };

        $.each(this.serializeArray(), extend);
        return result;
    };
})(jQuery);

const attributes = {
    '*': ['class', 'id', {
        name: 'style',
        type: '<textarea>'
    }],
    img: ['src', 'width', 'height'],
    video: ['src'],
    a: ['href', 'target'],
    input: ['value', 'placeholder'],
    form: ['method', 'action'],
    button: ['type'],
    font: ['size', 'color', 'face'],
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

const inlineElements = ['a', 'abbr', 'acronym', 'audio', 'b', 'bdi', 'bdo', 'big', 'br', 'button', 'canvas',
    'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img', 'input', 'ins',
    'kbd', 'label', 'map', 'mark', 'meter', 'noscript', 'object', 'output', 'picture', 'progress', 'q',
    'ruby', 's', 'samp', 'script', 'select', 'slot', 'small', 'span', 'strong', 'sub', 'sup', 'svg',
    'template', 'textarea', 'time', 'u', 'tt', 'var', 'video', 'wbr'
];

const isInline = (str) => {
    var m = /^\s*<(\w+)/.exec(str);
    return m && inlineElements.find((x) => x === m[1]);
}

const renderComponents = (components) => components.map((x, i) => $('<div class="accordion-item">')
    .append($('<h2 class="accordion-header">')
        .append($(
            `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comp-${i}">`
        ).text(x.name)), $(
            `<div id="comp-${i}" class="accordion-collapse collapse" data-bs-parent="#comps">`
        ).append($('<div class="accordion-body">')
            .append($('<form>').append(...Object.entries(x.props).map(([k,
                        v
                    ]) => $('<label>')
                    .append($('<span>').text(k))
                    .append($(v).attr('name', k))),
                $('<button>').text('Insert After'),
                $('<input type="hidden" name="insertinsidecontent">'),
                $('<input type="submit" onclick="this.form.insertinsidecontent.value=1" value="Insert Inside">'),
            ).data('key', i).on('submit', insertComponent))
        ))
)

var stack = new Undo.Stack();

stack.changed = () => {
    $('#undo').prop('disabled', !stack.canUndo());
    $('#redo').prop('disabled', !stack.canRedo());
}
var CombineCommand = Undo.Command.extend({
    constructor: function (...commands) {
        this.commands = commands;
    },
    execute: function () {},
    undo: function () {
        for (let i = this.commands.length; i-- > 0;) {
            this.commands[i].undo();
        }
    },
    redo: function () {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].redo();
        }
    }
});
var SelectionCommand = Undo.Command.extend({
    constructor: function ( /** @type {Document} */ document) {
        this.target = document;
        const sel = document.getSelection();
        if (sel) {
            this.range = sel.getRangeAt(0).cloneRange();
            this.start = this.range.startOffset;
            this.end = this.range.endOffset;
        }
    },
    execute: function () {},
    undo: function () {
        if (this.range) {
            const sel = this.target.getSelection();
            // this.range.startOffset = this.start;
            // this.range.endOffset = this.end;
            sel.removeAllRanges();
            sel.addRange(this.range);
        }
    },
    redo: function () {}
});
var getNickName = (/** @type {HTMLElement} */el) => {
    var s = el.tagName.toLowerCase();
    var c = el.className ? '.' + el.className.replace(/ /g, '.') : '';
    var i = '';//el.id ? '#' + el.id : '';
    return s + c + i;
}
var AttributeCommand = Undo.Command.extend({
    constructor: function ( /** @type {MutationRecord} */ mutation) {
        this.target = mutation.target;
        this.name = mutation.attributeName;
        this.old = mutation.oldValue;
        this.new = mutation.target.getAttribute(mutation.attributeName);
    },
    execute: function () {},
    undo: function () {
        this.target.setAttribute(this.name, this.old);
    },
    redo: function () {
        this.target.setAttribute(this.name, this.new);
    }
});

var DataCommand = Undo.Command.extend({
    constructor: function ( /** @type {MutationRecord} */ mutation) {
        this.target = mutation.target;
        this.old = mutation.oldValue;
        this.new = mutation.target.data;
    },
    execute: function () {},
    undo: function () {
        this.target.data = this.old;
    },
    redo: function () {
        this.target.data = this.new;
    }
});
var NodeListCommand = Undo.Command.extend({
    constructor: function ( /** @type {MutationRecord} */ mutation) {
        this.target = mutation.target;
        this.added = mutation.addedNodes;
        this.removed = mutation.removedNodes;
        this.before = mutation.nextSibling;
    },
    execute: function () {},
    undo: function () {
        for (let i = this.added.length; i-- > 0;) {
            const element = this.added[i];
            this.target.removeChild(element);
        }
        for (let i = 0; i < this.removed.length; i++) {
            const element = this.removed[i];
            this.target.insertBefore(i.before, element);
        }
    },
    redo: function () {
        for (let i = this.removed.length; i-- > 0;) {
            const element = this.removed[i];
            this.target.removeChild(element);
        }
        for (let i = 0; i < this.added.length; i++) {
            const element = this.added[i];
            this.target.insertBefore(i.before, element);
        }
    }
});

// Options for the observer (which mutations to observe)
const mutationConfig = {
    childList: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true
};

// Callback function to execute when mutations are observed
var blocked = false;
const mutationCallback = function (mutationsList, observer) {
    if (blocked) {
        blocked = false;
        return;
    }
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationsList) {
        let command;
        switch (mutation.type) {
            case 'childList':
                command = new NodeListCommand(mutation);
                break;
            case 'characterData':
                command = new DataCommand(mutation);
                break;
            case 'attributes':
                command = new AttributeCommand(mutation);
                break;
        }
        command = new CombineCommand(new SelectionCommand(workdoc()), command)
        stack.execute(command);
    }
};