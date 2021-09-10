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

function isInline(str) {
    var m = /^\s*<(\w+)/.exec(str);
    return m && inlineElements.find((x) => x === m[1]);
}

function renderComponents(components) {
    return components.map((x, i) => $('<div class="accordion-item">')
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
}

function getNickName( /** @type {HTMLElement} */ el) {
    var s = el.tagName.toLowerCase();
    var c = el.className ? '.' + el.className.replace(/ /g, '.') : '';
    var i = el.id ? '#' + el.id : '';
    return s + c + i;
}

// utility to adapters


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function normInt(v, def = 3) {
    if (v)
        v = parseInt(v);
    if (!v)
        v = def;
    v = Math.max(v, 1);
    return v;
}

var randomID = (prefix) => {
    if (workdoc) {
        let num = 1;
        while (workdoc().getElementById(prefix + "-" + num)) {
            num++;
        }
        return prefix + "-" + num;
    } else {
        return prefix + "-" + makeid(5);
    }
};

var escapeHTML = function (unsafe) {
    return unsafe.replace(/[&<"']/g, function (m) {
        switch (m) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '"':
                return '&quot;';
            default:
                return '&#039;';
        }
    });
};

var toOptions = (list) => `<select class="form-select form-select-sm">${list.map(x => `<option>${x}</option>`).join('')}</select>`;
var toCheckBox = '<input type="checkbox" class="form-check-input form-control-sm">';
var toNumber = '<input type="number" class="form-control form-control-sm">';
var toText = '<input type="text" class="form-control form-control-sm">';

const inputTypes = [
    'input', 'number', 'checkbox', 'radio',
    'email', 'password', 'range', 'date', 'time', 'datetime-local', 'color', 'file'
];

const attributes = {
    '*': ['class', 'id', {
        name: 'style',
        type: '<textarea class="form-control form-control-sm">'
    }],
    img: ['src', 'width', 'height'],
    video: ['src'],
    a: ['href', 'target'],
    input: [{
        name: 'type',
        type: toOptions(inputTypes)
    }, 'name', 'value', 'placeholder', 'min', 'max', {
        name: 'disabled',
        type: toCheckBox
    }],
    textarea: ['name', 'placeholder',  {
        name: 'disabled',
        type: toCheckBox
    },  {
        name: 'readonly',
        type: toCheckBox
    }],
    form: ['method', 'action'],
    button: ['type'],
    font: ['size', 'color', 'face'],
    link: ['href'],
};

const inlineElements = ['a', 'abbr', 'acronym', 'audio', 'b', 'bdi', 'bdo', 'big', 'br', 'button', 'canvas',
    'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img', 'input', 'ins',
    'kbd', 'label', 'map', 'mark', 'meter', 'noscript', 'object', 'output', 'picture', 'progress', 'q',
    'ruby', 's', 'samp', 'script', 'select', 'slot', 'small', 'span', 'strong', 'sub', 'sup', 'svg',
    'template', 'textarea', 'time', 'u', 'tt', 'var', 'video', 'wbr'
];