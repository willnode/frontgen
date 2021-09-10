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
const workarea = () => $('#workarea').contents().find('body');
/** @type {() => Document} */
const workdoc = () => $('#workarea')[0].contentWindow.document;

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
            var s = selectedElementUpward();
            if (s && s.tagName !== 'BODY') {
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
            var s = selectedElementUpward();
            if (s && s.tagName === 'BODY') {
                var sel = workdoc().getSelection().getRangeAt(0);
                if (sel && !sel.collapsed) {
                    var n = workdoc().createElement(sValue);
                    sel.surroundContents(n);
                    selUpward = 0;
                    selectedElement = n;
                    updateInspector();
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
            selUpward = 0;
            selectedElement = n;
            updateInspector();
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
            workarea().append(highlightBeacon);
            highlightBeacon.style.position = 'absolute';
            highlightBeacon.style.pointerEvents = 'none';
            highlightBeacon.style.userSelect = 'none';
            highlightBeacon.style.zIndex = '9999999';
            highlightBeacon.style.border = '5px solid orange';
            highlightBeacon.style.boxSizing = 'content-box';
            highlightBeacon.id = 'WebGenInternalBeaconDontEdit';
        }
        var c = getCoords(highlightedElement);
        highlightBeacon.style.top = (c.top - 5) + 'px';
        highlightBeacon.style.left = (c.left - 5) + 'px';
        highlightBeacon.style.width = c.width + 'px';
        highlightBeacon.style.height = c.height + 'px';
    }
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
            let ty = tt && tt.type || '<input>';
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
        insertComponent(img, true, false);
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
            insertComponent(img, true, false);
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
    let inline = false;
    if (keys.insertinsidecontent) {
        e.target.insertinsidecontent.value = "";
        inline = true;
    }
    insertComponent(html, inline, false);
}

function insertComponent(html, inline = true, select = true) {
    if (!html) return;
    var sel, range, oldr;
    if ((sel = workdoc().getSelection()).rangeCount) {
        range = new Range();
        oldr = sel.getRangeAt(0);
        var el = selectedElementUpward();
        if (!el || el.tagName === 'HTML' || el.tagName === 'BODY') {
            el = workarea()[0];
            range.selectNodeContents(el);
        } else if (inline) {
            if (!oldr.collapsed) {
                oldr.deleteContents();
            }
            range.selectNodeContents(el);
        } else {
            range.selectNode(el);
        }
        range.collapse(false);
        if (typeof html === 'string') {
            var div = document.createElement('div');
            div.innerHTML = html.trim();
            const node = div.firstChild;
            range.insertNode(node);
            if (select) {
                oldr.selectNodeContents(node);
                workarea()[0].focus();
            }
        } else {
            console.log(html);
            range.insertNode(html);
            if (select) {
                oldr = new Range();
                oldr.selectNodeContents(html);
                workarea()[0].focus();
            }
        }
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
}

function setClear() {
    if (selectedElement) {
        let selected = selectedElementUpward();
        var sel = workdoc().getSelection();
        var r = new Range();
        r.selectNode(selected);
        sel.removeAllRanges();
        sel.addRange(r);
        formatDoc('delete');
        selectedElement = null;
    }
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
            workarea().prop('data-gramm', false);
            observer.observe(workarea()[0], mutationConfig);
            doc.addEventListener('click', (e) => {
                selectedElement = e.target;
                selUpward = 0;
                updateInspector();
            })
            $('#workarea')[0].contentWindow.addEventListener('resize', function (event) {
                setHighlightElement(highlightedElement);
            }, true);
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
                if (selElem !== selectedElement) {
                    selectedElement = selElem;
                    selUpward = 0;
                    updateInspector();
                }
            });
        }, 500);
    }).catch(x => {
        console.log(x);
        alert('Sorry, we failed to load adapter. Check console log.');
    });
})