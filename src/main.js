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
const workarea = () => $('#workarea').contents().find('body');
/** @type {() => Document} */
const workdoc = () => $('#workarea')[0].contentWindow.document;

function toggleSrcView() {
    srcView = !srcView;
    if (srcView) {
        $('#workarea').hide();
        $('#worksrc').val(formatHTML(unformatHTML(workarea().html())));
        $('#worksrc').show();
    } else {
        workarea().html($('#worksrc').val() || '<div></div>');
        $('#workarea').show();
        $('#worksrc').hide();
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

function updateInspector() {
    $(inspector)[selectedElement ? 'show' : 'hide']();
    if (selectedElement) {
        let selected = selectedElementUpward();
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
            $('input', el).val(selected.getAttribute(k));
        });
    }
}

function applyInspector(e) {
    if (selectedElement) {
        selectedElementUpward().setAttribute($(e.target).data('key'), $(e.target).val());
    }
}

function insertComponent(e) {
    e.preventDefault();
    let keys = $(e.target).serializeObject();
    let html = listComponents[parseInt($(e.target).data('key'))].render(keys);
    var sel, range, oldr;
    if ((sel = workdoc().getSelection()).rangeCount) {
        range = new Range();
        oldr = sel.getRangeAt(0);
        var el = selectedElementUpward();
        console.log(keys);
        if (!el || el.tagName === 'HTML' || el.tagName === 'BODY') {
            el = workarea()[0];
            range.selectNodeContents(el);
        } else if (keys.insertinsidecontent) {
            e.target.insertinsidecontent.value = "";
            range.selectNodeContents(el);
        } else {
            range.selectNode(el);
        }
        range.collapse(false);
        var div = document.createElement('div');
        div.innerHTML = html.trim();
        const node = div.firstChild;
        range.insertNode(node);
        sel.removeAllRanges();
        sel.addRange(oldr);
        // range = sel.getRangeAt(0).cloneRange();
        // var r = selectedElement;
        // if (!isInline(html)) {
        //     formatDoc('insertParagraph');
        //     if (r.parentElement) {
        //         var last = r.parentElement.childNodes[r.parentElement.childElementCount - 1];
        //         console.log(last.tagName);
        //         // if (last && last.tagName === 'BR') {
        //         //     last.remove();
        //         //     last = r.parentElement.childNodes[r.parentElement.childElementCount - 1];
        //         // }
        //         if (last === r) {
        //             // so we can insert at the end
        //             sel.removeAllRanges();
        //             sel.addRange(range);
        //             formatDoc('insertParagraph');
        //         }
        //     }
        // }
        // formatDoc('insertHTML', html);
        // sel.removeAllRanges();
        // sel.addRange(range);
        // div.innerHTML = html.trim();
        // range.insertNode(div.firstChild);
        // range.setStartAfter(div.firstChild);
        // range.collapse(true);
        // sel.addRange(range);
    }
}

function setSelUpward(offset) {
    selUpward += offset;
    selUpward = Math.max(0, selUpward);
    updateInspector();
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

// main loop
$(function () {
    // prepare UI
    $('#worksrc').hide();
    $('#in-elem,#in-class,#in-style').on('input', applyInspector);
    updateInspector();
    // load adapter
    import('../adapters/bootstrap.js').then((module) => {
        listComponents = module.components;
        $('#workarea')[0].srcdoc = module.template;
        $('#comps').append(...renderComponents(listComponents))
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
            doc.addEventListener('keydown', function (event) {
                if (event.ctrlKey && event.key === 'z') {
                    formatDoc('undo');
                    event.preventDefault();
                }
                if (event.ctrlKey && event.key === 'y') {
                    formatDoc('redo');
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
                if (selElem !== selectedElement) {
                    selectedElement = selElem;
                    selUpward = 0;
                    updateInspector();
                }
            });
        }, 500);
    });
})