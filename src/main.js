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
let highlightedElement;
/** @type {HTMLElement} */
let highlightBeacon;
const workarea = () => workdoc().body;
/** @type {() => Document} */
const workdoc = () => document.getElementById('workarea').contentWindow.document;

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

function toggleSupMode() {
    supMode = !supMode;
    console.log(workdoc().getSelection().getRangeAt.getRangeAt(0).getBoundingClientRect());
}

function formatDoc(sCmd, sValue) {
    switch (sCmd) {
        case 'undo':
            if (!stack.canUndo()) return;
            blocked = true;
            stack.undo();
            break;
        case 'redo':
            if (!stack.canRedo()) return;
            blocked = true;
            stack.redo();
            break;
        case 'delete':
            if (!selectedElement) return;
            let s = selectedElementUpward();
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
                selectElement(s.parentElement);
                s.remove();
            }
            break;
        case 'copy':
        case 'cut':
            var cut = sCmd === 'cut';
            var r = workdoc().getSelection().getRangeAt(0);
            let t = r[cut ? 'extractContents' : 'cloneContents']();
            window.navigator.clipboard.writeText($('<div>').append(t).html());
            break;
        case 'paste':
            var r = workdoc().getSelection().getRangeAt(0);
            window.navigator.clipboard.readText().then(
                x => {
                    r.deleteContents();
                    r.insertNode($('<div>').html(x)[0]);
                }
            )
            break;
        case 'formatblock':
            s = selectedElementUpward();
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
            n.attributes = s.attributes;
            [...s.attributes].forEach(attr => {
                n.setAttribute(attr.nodeName, attr.nodeValue)
            });
            n.innerHTML = s.innerHTML;
            $(s).replaceWith(n);
            selectElement(n);
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
            highlightBeacon.id = 'WebGenInternalBeaconDontEdit';
        }
        var c = getCoords(highlightedElement);
        highlightBeacon.style.top = (c.top - 10) + 'px';
        highlightBeacon.style.left = (c.left - 10) + 'px';
        highlightBeacon.style.width = c.width + 'px';
        highlightBeacon.style.height = c.height + 'px';
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
            $('input,textarea,select', el).val(selected.getAttribute(k));
        });
    }
}

function applyInspector(e) {
    if (selectedElement) {
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

function insertComponentByForm(e) {
    e.preventDefault();
    let keys = $(e.target).serializeObject();
    let html = listComponents[parseInt($(e.target).data('key'))].render(keys);
    let mode = e.target.insertmode.value;
    e.target.insertmode.value = "";
    if (e.shiftKey) {
        if (mode === "after")
            mode = "before";
        if (mode === "below")
            mode = "above";
    }
    insertComponent(html, mode, false);
}

function promptInsertElement(mode) {
    var el = prompt('Enter the new element (e.g. p.class-1.class-2#id)', 'div');
    if (el)
        insertComponent(generateHtml(el), mode);
}

function insertComponent(html, /** @type {"before"|"after"|"below"|"above"|"flush"|"replace"} */ mode = 'after', select = true) {
    if (!html) return;
    var sel, range, oldr;
    if ((sel = workdoc().getSelection()).rangeCount) {
        range = new Range();
        oldr = sel.getRangeAt(0);
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
        if (select) {
            oldr = new Range();
            oldr.selectNodeContents(node);
        } else if (mode === "replace") {
            oldr = new Range();
            oldr.selectNode(node);
            setTimeout(() => selectElement(node), 10);
        }
        workarea().focus();
        sel.removeAllRanges();
        sel.addRange(oldr);
    }
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
        let srcdoc = module.template;
        if (sessionStorage['webgen-workspace'])
            srcdoc = sessionStorage['webgen-workspace'];
        $('#workarea')[0].srcdoc = srcdoc;
        $('#comps').append(...renderComponents(listComponents))
        $('.CodeMirror').hide();
        setTimeout(() => {
            let doc = workdoc();
            doc.designMode = 'on';
            observer.observe(workarea(), mutationConfig);
            doc.addEventListener('click', (e) => selectElement(e.target))
            $('#workarea')[0].contentWindow.addEventListener('resize', function (event) {
                setHighlightElement(highlightedElement);
            }, true);
            selectedElement = workarea();
            updateInspector();
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
                    console.log('fefefe');
                    return;
                }
                if (selElem !== selectedElement)
                    selectElement(selElem);
            });
        }, 500);
    }).catch(x => {
        console.log(x);
        alert('Sorry, we failed to load adapter. Check console log.');
    });
})