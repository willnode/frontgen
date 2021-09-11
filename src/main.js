'use strict';
let srcView = false;
let txtTool = false;
const observer = new MutationObserver(mutationCallback);
let selUpward = 0;
/** @type {Element} */
let selectedElement;
/** @type {{
    name: string;
    props: {
        title: string;
        body: string;
        image: string;
        buttonText: string;
    };
    card: ({ title }: {
        title: any;
    }) => string;
}[]} */
let listComponents;
/** @type {{
    name: string;
    content: string;
}[]} */
let listTemplates;
let highlightedElement;
/** @type {HTMLElement} */
let highlightBeacon;
const workarea = () => workdoc().body;
/** @type {() => Document} */
const workdoc = () => document.getElementById('workarea').contentWindow.document;
/** @type {() => Window} */
const workwin = () => document.getElementById('workarea').contentWindow;

function toggleSrcView() {
    srcView = !srcView;
    if (srcView) {
        $('#workarea').hide();
        setHighlightElement(null);
        let html = generateCleanExportedHtml();
        codeMirror.setValue(html);
        setTimeout(() => codeMirror.refresh(), 0)
        $(".CodeMirror").show();
    } else {
        workdoc().documentElement.innerHTML = (codeMirror.getValue());
        setHighlightElement(selectedElementUpward());
        $('#workarea').show();
        $('.CodeMirror').hide();
    }
    $('#btn-srcview').toggleClass('active', srcView);
}

function toggleTxtTool() {
    txtTool = !txtTool;
    if (txtTool) {
        $('#tooltxt').show();
    } else {
        $('#tooltxt').hide();
    }
    $('#btn-txttool').toggleClass('active', txtTool);
}

/** @type {Window} */
let watchedWindow;
let watchedWindowDirty = false;
let watchedLastCleanHtmlExport;

function formatDoc(sCmd, sValue) {
    switch (sCmd) {
        case 'view': {
            // const blob = new Blob([generateCleanExportedHtml()], {type: 'text/html'});
            // const url = URL.createObjectURL(blob);
            if (watchedWindow && !watchedWindow.closed) {
                watchedWindow.focus();
                return;
            }
            var w = window.open("./view.html", '_blank');
            watchedWindow = w;
            $('#btn-view').toggleClass('active', true);
            w.addEventListener('DOMContentLoaded', () => {
                w.document.documentElement.innerHTML = watchedLastCleanHtmlExport;
            })
            var timer = setInterval(function () {
                if (w.closed) {
                    clearInterval(timer);
                    $('#btn-view').toggleClass('active', false);
                    watchedWindow = null;
                } else if (watchedWindowDirty) {
                    w.document.documentElement.innerHTML = watchedLastCleanHtmlExport;
                    watchedWindowDirty = false;
                }
            }, 100);
        }
        break;
    case 'undo': {
        if (!stack.canUndo()) return;
        blocked = true;
        stack.undo();
    }
    break;
    case 'redo': {
        if (!stack.canRedo()) return;
        blocked = true;
        stack.redo();
    }
    break;
    case 'delete': {
        if (!selectedElement) return;
        var s = selectedElementUpward();
        if (!s || s.tagName === 'HTML' || s.tagName === 'BODY') {
            var sel = workdoc().getSelection();
            if (sel.rangeCount) {
                sel.getRangeAt(0).deleteContents();
                sel.removeAllRanges();
            }
            var r = new Range();
            r.selectNodeContents(workarea());
            sel.addRange(r);
        } else {
            selectElement(s.nextElementSibling || s.previousElementSibling || s.parentElement);
            s.remove();
        }
    }
    break;
    case 'selectall': {
        var r = workdoc().getSelection().getRangeAt(0);
        var n = selectedElementUpward();
        r.selectNodeContents(n);
        break;
    }
    case 'copy':
    case 'cut': {
        var cut = sCmd === 'cut';
        var r = workdoc().getSelection().getRangeAt(0);
        if (r.collapsed) {
            n = selectedElementUpward();
            if (n && n.tagName === 'BODY')
                r.selectNodeContents(n);
            else
                r.selectNode(n);
        }
        let t = r[cut ? 'extractContents' : 'cloneContents']();
        window.navigator.clipboard.writeText($('<div>').append(t).html());
        break;
    }
    case 'paste': {
        var r = workdoc().getSelection().getRangeAt(0);
        window.navigator.clipboard.readText().then(
            x => {
                r.deleteContents();
                var nodes = $('<div>').html(x)[0];
                [...nodes.childNodes].forEach(y => {
                    r.insertNode(y);
                    r.collapse(false);
                });
            }
        )
    }
    break;
    case 'clone': {
        var el = selectedElementUpward();
        var cl = el.cloneNode(true);
        if (el.nextElementSibling)
            el.parentElement.insertBefore(cl, el.nextElementSibling);
        else
            el.parentElement.appendChild(cl);
    }
    break;
    case 'formatblock': {
        var s = selectedElementUpward();
        if (s && s.tagName === 'BODY') {
            var sel = workdoc().getSelection().getRangeAt(0);
            if (sel && !sel.collapsed) {
                var n = workdoc().createElement(sValue);
                sel.surroundContents(n);
                selectElement(n);
            }
            return;
        }
        /** @type {HTMLElement} */
        var n = workdoc().createElement(sValue);
        [...s.attributes].forEach(attr => {
            n.setAttribute(attr.nodeName, attr.nodeValue)
        });
        n.innerHTML = s.innerHTML;
        $(s).replaceWith(n);
        selectElement(n);
    }
    break;
    default:
        workdoc().execCommand(sCmd, false, sValue);
        break;
    }
    workarea().focus();
    updateInspector();
}
const props = {};
const selectedElementUpward = () => {
    let selected = selectedElement;
    if (selected.tagName === 'HTML')
        return workarea();
    if (selected && selUpward > 0) {
        let upw = selUpward;
        while (upw > 0) {
            if (selected.parentElement && selected.tagName !== 'BODY') {
                selected = selected.parentElement;
                upw--;
            } else
                break;
        }
    }
    return selected;
}

function setHighlightElement( /** @type {HTMLElement} */ el) {
    if (!el || el.tagName === 'HTML' || el.tagName === 'BODY')
        el = null;
    highlightedElement = el;
    if (!el) {
        if (highlightBeacon) {
            highlightBeacon.remove();
            highlightBeacon = null;
        }
    } else {
        if (!highlightBeacon) {
            highlightBeacon = workdoc().createElement('div');
            workarea().appendChild(highlightBeacon);
            highlightBeacon.style.position = 'absolute';
            highlightBeacon.style.pointerEvents = 'none';
            highlightBeacon.style.userSelect = 'none';
            highlightBeacon.style.zIndex = '9999999';
            highlightBeacon.style.border = '10px solid #0088ff';
            highlightBeacon.style.mixBlendMode = 'difference';
            highlightBeacon.style.boxSizing = 'content-box';
            highlightBeacon.setAttribute('data-webgen', 'WebGenInternal');
        }
        var c = getCoords(highlightedElement, workdoc());
        c.top += 1;
        c.left += 1;
        c.width -= 2;
        c.height -= 2;
        var btop = Math.max(0, Math.min(c.top, 10));
        var bleft = Math.max(0, Math.min(c.left, 10));
        var bright = Math.max(0, Math.min(workdoc().body.scrollWidth - (c.left + c.width), 10));
        var bbottom = Math.max(0, Math.min(workdoc().body.scrollHeight - (c.top + c.height), 10));
        highlightBeacon.style.top = (c.top - btop) + 'px';
        highlightBeacon.style.left = (c.left - bleft) + 'px';
        highlightBeacon.style.width = (c.width) + 'px';
        highlightBeacon.style.height = (c.height) + 'px';
        highlightBeacon.style.borderLeftWidth = bleft + 'px';
        highlightBeacon.style.borderTopWidth = btop + 'px';
        highlightBeacon.style.borderRightWidth = bright + 'px';
        highlightBeacon.style.borderBottomWidth = bbottom + 'px';
    }
}

function updateChildrenList() {
    var p = $('#childrenList');
    var s = selectedElementUpward();
    var a = selectedElement;
    var els = [];
    while (a) {
        els.push(a);
        if (a.tagName === 'BODY') break;
        a = a.parentNode;
    }
    p.children().remove();
    p.append(
        $('<li><button disabled class="dropdown-item">Selected parents</button></li>'),
        ...els.map((x, i) => $('<li>').append(
            $('<button class="dropdown-item">').addClass(s === x ? 'active' : '').text(getNickName(x)).on('click', function () {
                selUpward = i;
                updateInspector();
            }))),
        $('<li><hr class="dropdown-divider"></li>'),
        $('<li><button disabled class="dropdown-item">Selected children</button></li>'),
        $('<li><hr class="dropdown-divider"></li>'),
        ...[...s.children].map(x => $('<li>').append(
            $('<button class="dropdown-item">').text(getNickName(x)).on('click', function () {
                selectElement(x, true);
            }))))
}

function selectElement(element, actuallySelect = false) {
    selectedElement = element;
    selUpward = 0;
    updateInspector();
}

function updateInspector() {
    $(inspector)[selectedElement ? 'show' : 'hide']();
    if (selectedElement) {
        let selected = selectedElementUpward();
        setHighlightElement(selected);
        let tag = selected.tagName.toLowerCase();
        let elements = attributes['*'].concat(attributes[tag] || []);
        let elementsToAdd = [];
        let elementsToDel = Object.keys(props);
        $('#elem').text(getNickName(selected));

        elements.forEach(el => {
            let name = el;
            if (typeof el === 'object')
                name = el.name;
            if (name in props) {
                elementsToDel.splice(elementsToDel.findIndex((e) => e === name), 1);
            } else {
                elementsToAdd.push(name);
            }
        });
        elementsToDel.forEach(el => {
            $(props[el]).remove();
            delete props[el];
        });
        elementsToAdd.forEach(el => {
            let tt = elements.find(x => x.name === el);
            let ty = tt && tt.type || '<input class="form-control form-control-sm">';
            props[el] = $('<label>')
                .append($('<span>').text(el))
                .append($(ty).data('key', el).on('input', applyInspector));
            $('#props').append(props[el]);
        });
        Object.entries(props).forEach(([k, el]) => {
            var f = $('input,textarea,select', el);
            if (f[0].type === 'checkbox') {
                f.prop('checked', selected.hasAttribute(k))
            } else {
                f.val(selected.getAttribute(k));
            }
        });
    }
}

function applyInspector(e) {
    if (selectedElement) {
        if (e.target.type === 'checkbox') {
            if (e.target.checked)
                selectedElementUpward().setAttribute($(e.target).data('key'), "");
            else
                selectedElementUpward().removeAttribute($(e.target).data('key'));
        } else
            selectedElementUpward().setAttribute($(e.target).data('key'), $(e.target).val());
    }
}

function insertImageByUrlForm(e) {
    if (this.value) {
        var img = workdoc().createElement('img');
        img.alt = "";
        img.src = this.value;
        img.style.width = '100%';
        insertComponent(img, "below", false);
        bootstrap.Modal.getInstance($('#imageModal')[0]).hide();
        this.form.reset();
    }
}

function insertImageByFileForm(e) {
    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", (e) => {
            var img = workdoc().createElement('img');
            img.alt = "";
            if (e.target.result.length > 1024 * 1024) {
                if (!confirm('This file is very large probably will slow down your editing experience. Please consider uploading to a cloud image service, or shall we proceed?'))
                    return;
            }
            img.src = e.target.result;
            img.style.width = '100%';
            insertComponent(img, "below", false);
            bootstrap.Modal.getInstance($('#imageModal')[0]).hide();
            this.form.reset();
        });

        FR.readAsDataURL(this.files[0]);
    }
}

function bootIFrame(html) {
    stack.reset();
    setHighlightElement(null);
    $('#workarea')[0].srcdoc = html;
    setTimeout(() => {
        observer.observe(workarea(), mutationConfig);
        let doc = workdoc();
        doc.designMode = 'on';
        doc.addEventListener('click', (e) => {
            selectElement(e.target);
            if (!e.ctrlKey)
                e.preventDefault();
        })
        $('#workarea')[0].contentWindow.addEventListener('resize', function (event) {
            setHighlightElement(highlightedElement);
        }, true);
        selectedElement = workarea();
        updateInspector();
        stack.changed();
        doc.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.key === 'z') {
                formatDoc('undo');
                event.preventDefault();
            }
            if (event.ctrlKey && event.key === 'y') {
                formatDoc('redo');
                event.preventDefault();
            }
            if (event.ctrlKey && event.key === 'Delete') {
                formatDoc('delete');
                event.preventDefault();
            }
        });
        doc.addEventListener('selectionchange', () => {
            var sel = workdoc().getSelection();
            let selElem;
            if (sel.rangeCount == 0)
                selElem = null;
            else {
                selElem = sel.getRangeAt(0).commonAncestorContainer;
                if (selElem.nodeType != 1) {
                    selElem = selElem.parentNode;
                }
            }
            if (selElem === highlightBeacon) {
                return;
            }
            if (selElem !== selectedElement)
                selectElement(selElem);
        });
    }, 500);
}

function setNewByTemplate(i) {
    bootIFrame(listTemplates[i].content);
    bootstrap.Modal.getInstance($('#createModal')[0]).hide();
}

function setNewByForm(e) {
    e.preventDefault();
    var data = $(e.target).serializeObject();
    if (data.base) {
        var doc = document.createElement('html');
        doc.innerHTML = data.html;
        var base = $('base', doc);
        if (!base.length) {
            base = $('<base>');
            $('head', doc).prepend(base);
        }
        base.attr('href', data.base);
        base.attr('target', '_blank');
        base.data('webgen', 'WebGenInternal');
        data.html = doc.innerHTML;
    }
    bootIFrame(data.html);
    bootstrap.Modal.getInstance($('#createModal')[0]).hide();
}

function insertComponentByForm(e) {
    e.preventDefault();
    let keys = $(e.target).serializeObject();
    let html = listComponents[parseInt($(e.target).data('key'))].render(keys);
    let mode = e.target.insertmode.value;
    e.target.insertmode.value = "";
    // if (e.shiftKey) {
    //     if (mode === "after")
    //         mode = "before";
    //     if (mode === "below")
    //         mode = "above";
    // }
    insertComponent(html, mode, false);
}

function promptInsertElement(mode) {
    var el = prompt('Enter the new element (e.g. p.class-1.class-2#id)', 'div');
    if (el)
        insertComponent(generateHtml(el), mode);
}

function insertComponent(html, /** @type {"before"|"after"|"below"|"above"|"flush"|"replace"} */ mode = 'after', select = true) {
    if (!html) return;
    var sel, range;
    if (!(sel = workdoc().getSelection()).rangeCount)
        return;
    range = new Range();
    var el = selectedElementUpward();
    if (!el || el.tagName === 'HTML' || el.tagName === 'BODY') {
        el = workarea();
        range.selectNodeContents(el);
        if (mode === "before")
            mode = "below";
        if (mode === "after")
            mode = "above";
        if (mode === "replace")
            mode = "flush";
    }
    switch (mode) {
        case "before":
        case "after":
        case "replace":
            range.selectNode(el);
            mode !== "replace" ? range.collapse(mode === "before") : range.deleteContents();
            break;
        case "below":
        case "above":
        case "flush":
            range.selectNodeContents(el);
            mode !== "flush" ? range.collapse(mode === "above") : range.deleteContents();
            break;
    }
    let node;
    if (typeof html === 'string') {
        var div = document.createElement('div');
        div.innerHTML = html.trim();
        node = div.firstChild;
    } else {
        node = html;
    }
    range.insertNode(node);
    var oldr = new Range();

    if (select) {
        oldr.selectNodeContents(node);
    } else if (mode === "replace") {
        oldr.selectNode(node);
        setTimeout(() => selectElement(node), 10);
    } else {
        setHighlightElement(highlightedElement);
        oldr.selectNodeContents(el);
        oldr.collapse(false);
    }
    workarea().focus();
    sel.removeAllRanges();
    sel.addRange(oldr);

}

function setSelUpward(offset) {
    selUpward += offset;
    selUpward = Math.max(0, selUpward);
    updateInspector();
}

function setMoveUpward(offset) {
    var sel = selectedElementUpward();
    if (!sel || sel.tagName === 'BODY')
        return;
    if (offset > 0) {
        const next = sel.nextElementSibling;
        if (!next) {
            setSelUpward(1);
            return;
        } else {
            sel.parentElement.insertBefore(next, sel);
        }
    } else {
        const prev = sel.previousElementSibling;
        if (!prev) {
            setSelUpward(1);
            return;
        } else {
            sel.parentElement.insertBefore(sel, prev);
        }
    }
    setHighlightElement(highlightedElement);
}
let codeMirror;
// main loop
$(function () {
    // prepare UI
    $('#worksrc').hide();
    $('#in-elem,#in-class,#in-style').on('input', applyInspector);
    updateInspector();
    codeMirror = CodeMirror.fromTextArea($('#worksrc')[0], {
        lineNumbers: true,
        mode: "htmlmixed",
        extraKeys: {
            "Ctrl-Space": "autocomplete"
        },
    });

    // load adapter
    var url = new URLSearchParams(this.location.search.substr(1));
    let adapter = 'bootstrap';
    if (url.get('adapter'))
        adapter = url.get('adapter');
    import('../adapters/' + adapter + '.js').then((module) => {
        listComponents = module.components;
        listTemplates = module.templates;
        $('#comps').append(...renderComponents(listComponents))
        $('#templates').append(...renderTemplatesBtn(listTemplates))
        $('.CodeMirror').hide();
        let srcdoc = module.templates[0].content;
        if (sessionStorage['webgen-workspace'])
            srcdoc = sessionStorage['webgen-workspace'];
        else
            (new bootstrap.Modal($('#createModal')[0])).show();
        bootIFrame(srcdoc);
    }).catch(x => {
        console.log(x);
        alert('Sorry, we failed to load adapter. Check console log.');
    });
})
window.addEventListener('beforeunload', function () {
    if (watchedWindow && !watchedWindow.closed) {
        watchedWindow.close();
    }
})