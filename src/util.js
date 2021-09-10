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
        type: '<textarea class="form-control form-control-sm">'
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

function getCoords( /** @type {HTMLElement} */ elem) {
    var box = elem.getBoundingClientRect();
    return {
        width: box.width,
        height: box.height,
        top: box.top + workdoc().documentElement.scrollTop,
        left: box.left,
    };
}

function generateHtml( /** @type {string} */ emmet) {
    var tag = emmet.match(/^[-a-zA-Z]+/);
    if (!tag.length) tag = 'div'
    else tag = tag[0];
    var classes = (emmet.match(/\.[-a-zA-Z0-9_]+/g) || []).map(x => x.substr(1)).join(' ');
    var id = (emmet.match(/#[-a-zA-Z0-9_]+/) || []).map(x => x.substr(1)).join(' ');
    return $(`<${tag}${classes ? ` class="${classes}"` : ''}${id ? ` id="${id}"` : ''}>`).text('Content')[0].outerHTML;
}

function generateCleanExportedHtml() {
    var html = workdoc().documentElement.innerHTML;
    html = html.replace(/<div.+?WebGenInternalBeaconDontEdit.+?<\/div>/g, '');
    return html_beautify(html);
}

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
                $('<input type="hidden" name="insertmode">'),
                $('<span>').append($('<span class="fw-bold">').text('Insert')).append(
                    $('<span class="btn-group mt-1">').append(
                        $('<button type="submit" class="btn btn-outline-secondary btn-sm" onclick="this.form.insertmode.value=`before`" title="Below Element"><i class="fas fa-level-down-alt"></i></button>'),
                        $('<button type="submit" class="btn btn-outline-secondary btn-sm" onclick="this.form.insertmode.value=`below`" title="Inside Element"><i class="fas fa-sort-amount-down-alt"></i></button>'),
                        $('<button type="submit" class="btn btn-outline-secondary btn-sm" onclick="this.form.insertmode.value=`flush`" title="Replace Element Content"><i class="fas fa-clone"></i></button>'),
                        $('<button type="submit" class="btn btn-outline-secondary btn-sm" onclick="this.form.insertmode.value=`replace`" title="Replace Whole Element"><i class="fas fa-eraser"></i></button>'),
                    )
                )
            ).data('key', i).on('submit', insertComponentByForm))
        ))
)

var stack = new Undo.Stack();



stack.changed = () => {
    $('#undo').prop('disabled', !stack.canUndo());
    $('#redo').prop('disabled', !stack.canRedo());
    setHighlightElement(highlightedElement);
    if (!stack.canRedo())
        sessionStorage['webgen-workspace'] = generateCleanExportedHtml();
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
        if (sel && sel.rangeCount) {
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
function getNickName ( /** @type {HTMLElement} */ el) {
    var s = el.tagName.toLowerCase();
    var c = el.className ? '.' + el.className.replace(/ /g, '.') : '';
    var i = el.id ? '#' + el.id : '';
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
            this.target.insertBefore(element, i.before);
        }
    },
    redo: function () {
        for (let i = this.removed.length; i-- > 0;) {
            const element = this.removed[i];
            this.target.removeChild(element);
        }
        for (let i = 0; i < this.added.length; i++) {
            const element = this.added[i];
            this.target.insertBefore(element, i.before);
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
        if (mutation.target === highlightBeacon)
            continue;
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