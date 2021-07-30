const parseChildrenDesign = (comp) => {
    if (typeof comp.children === "string" && comp.children.indexOf("...") !== -1) {
        let c = comp.children;
        const multiple = c.startsWith('[') && c.endsWith(']');
        if (multiple) {
            c = c.substr(1, c.length - 2);
        }
        return {
            multiple,
            component: comp.children.substr(3),
        };
    } else if (comp.children != null && typeof comp.children === 'object') {
        return parseChildrenDesign(comp.children);
    } else {
        return null;
    }
}
export const shrinkFormat = (value, expandedFormat) => {
    return expandedFormat[0] + value + expandedFormat[1];
}
export const expandFormat = (value, formats, expandedFormats) => {
    expandedFormats.forEach((x, i) => {
        if (value.startsWith(x[0]) && value.endsWith(x[1])) {
            return [value.substring(x[0].length, x[1].length), formats[i]];
        }
    });
    return [value, formats[0]];
}
/**
 * @returns {{_info: any, _components: Object<string, any>}}
 */
export const extractAdapter = (config) => {
    return {
        _info: config._info,
        _components: ((() => {
            const x = {};
            Object.entries(config)
                .filter(([k, v]) => !k.startsWith('_'))
                .forEach(([k, v]) => {
                    x[k] = {
                        ...v,
                        _name: k,
                        _children: parseChildrenDesign(v),
                    }
                    if (x[k]._variant) {
                        Object.entries(x[k]._variant).forEach(([vk, vv]) => {
                            x[k]._variant[vk] = {
                                ...vv,
                                ...(vv._formats ? {
                                    _formatExpands: vv._formats
                                        .map(f => f.split("*", 2)),
                                } : {}),
                                _name: vk,
                            };
                        });
                    }
                    delete x[k].children;
                });
            return x;
        })())
    };;
}