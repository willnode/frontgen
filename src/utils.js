export const shrinkFormat = (value, expandedFormat) => {
    return value.map(value => {
        switch (expandedFormat.length) {
            case 1:
                return expandedFormat[0];
            case 2:
                return expandedFormat[0] + value + expandedFormat[1];
            default:
                return "";
        }
    });
}
export const expandFormat = (value, expandedFormats) => {
    if (value == null)
        return [null, null];
    let i = 0;
    for (const x of expandedFormats) {
        if (x.length === 1 && value === x[0]) {
            return ["", i];
        } else if (value.startsWith(x[0]) && value.endsWith(x[1])) {
            return [value.substring(x[0].length, value.length - x[1].length), i];
        }
        i++;
    }
    return [value, 0];
}
/**
 * @return {import("./types").AppComponent}
 */
const extractComponent = (k, v) => {
    var r = {
        ...v,
        name: k,
    }
    if (r.variants) {
        r.variants = extractVariants(r.variants);
    }
    return r;
}
/**
 * @return {Object<string, import("./types").AppVariant>}
 */
const extractVariants = (v) => {
    Object.entries(v).forEach(([vk, vv]) => {
        v[vk] = {
            ...vv,
            default: vv.type === "options" && vv.default && !Array.isArray(vv.default) ? [vv.default] : vv.default,
            name: vk,
            ...(vv.formats ? {
                formatExpands: vv.formats
                    .map(f => f.split("*", 2)),
            } : {
                formats: ["*"],
                formatExpands: [
                    ["", ""]
                ]
            }),
            multiple: vv.formats && vv.formats.length > 1,
        };
    });
    return v;
}
/**
 * @returns {import("./types").AppAdapter}
 */
export const expandAdapter = (config) => {
    return {
        head: config.head,
        body: config.body,
        flavors: extractVariants(config.flavors),
        components: Object.entries(config.components)
            .map(([k, v]) => extractComponent(k, v))
            .reduce((a, x) => {
                a[x.name] = x;
                return a
            }, {})
    };;
}

/**
 * @param {import("./types").AppElement} body
 * @param {(b: import("./types").AppElement, p: string) => void} action
 */
export function traverseIndexes(body, action, parent = null) {
    action(body, parent);
    for (const child of body.children) {
        traverseIndexes(child, action, body.id);
    }
}

function camelCase(str) {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
/**
 * @param {string} str
 * @returns {Object<string, any>}
 */
export function expandStyleString(str) {
    try {
        return str.split(";")
            .reduce((o, l) => {
                var s = l.split(":", 2);
                if (s.length === 2)
                    o[camelCase(s[0])] = s[1].trim();
                return o;
            }, {});
    } catch (error) {
        return {};
    }
}
/**
 * @param {import("./types").AppWorkspace} workspace
 */
export function initiateOpen(workspace, setIter) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'application/json');
    input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        let files = Array.from(input.files);
        if (files.length === 1) {
            const reader = new FileReader()
            reader.onload = event => {
                try {
                    var c = JSON.parse("" + event.target.result);
                    /**
                     * @type {Object<string, import("./types").AppElement>}
                     */
                    var d = {};
                    traverseIndexes(c, (b) => {
                        d[b.id] = b;
                    });
                    workspace.body = c;
                    workspace.indexes = d;
                    setIter();
                } catch (error) {
                    alert("Failed to read");
                }
                // desired file content
            }
            reader.onerror = error => alert("Failed to open")
            reader.readAsText(files[0])
        }
    };
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        input.dispatchEvent(event);
    } else {
        input.click();
    }
}

export function initiateDownload(filename, type, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:' + type + ';charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}

// https://github.com/facebook/react/blob/main/packages/react-dom/src/shared/omittedCloseTags.js
const omittedCloseTags = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
  };

export function isTagOmitted(tag) {
    return omittedCloseTags[tag] || false;
}