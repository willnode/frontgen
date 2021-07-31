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
            default: vv.type == "options" && vv.default && !Array.isArray(vv.default) ? [vv.default] : vv.default,
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
            .reduce((a, x) => (a[x.name] = x, a), {})
    };;
}

/**
 * @param {import("./types").AppElement} body
 * @param {Object<string, import("./types").AppElement>} dict
 */
function traverseIndexes(body, dict) {
    dict[body.id] = body;
    for (const child of body.children) {
        traverseIndexes(child, dict);
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
                    traverseIndexes(c, d);
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