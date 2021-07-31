import React from 'react';
import { InspectorItem } from './styles';
import { expandFormat, shrinkFormat } from './utils';


/**
 * @param {{info: import('./types').AppAdapter, elem: import('./types').AppElement,
 * prop: import('./types').AppVariant, val: any, setVal: Function}} props
 */
const DrawInspectorItem = ({ elem, prop, val, setVal }) => {
    switch (prop.type) {
        case 'options':
            return (
                <InspectorItem>
                    <span>{prop.name}</span>
                    <div>
                        {(val || [null]).map((v, i) => {
                            var exp = expandFormat(v, prop.formatExpands);
                            const unselected = !v;
                            return (
                                <div key={v}>
                                    <select disabled={unselected} value={exp[0] || ""} onChange={(e) => {
                                        val[i] = shrinkFormat([e.target.value], prop.formatExpands[exp[1]])[0];
                                        setVal(elem, prop, val);
                                    }}>
                                        {unselected && <option></option>}
                                        {prop.values.map(x => <option key={x}>{x}</option>)}
                                    </select>
                                    <select data-val={exp[0] === null ? 0 : (exp[1] + 1)} value={exp[0] === null ? 0 : (exp[1] + 1)} onChange={(e) => {
                                        if (val == null) {
                                            val = exp = [prop.values[0]];
                                        }
                                        var selval = parseInt(e.target.value) - 1;
                                        if (selval === -1) {
                                            val.splice(i, 1);
                                            if (val.length === 0) {
                                                return setVal(elem, prop, null);
                                            }
                                        } else {
                                            val[i] = shrinkFormat([exp[0]], prop.formatExpands[selval])[0];
                                        }
                                        setVal(elem, prop, val);
                                    }}>
                                        {!prop.default && <option value="0"></option>}
                                        {prop.formats.map((x, k) => <option key={x} value={k + 1}>{x}</option>)}
                                    </select>
                                    {
                                        prop.multiple && i == 0 && <button disabled={unselected} onClick={() => {
                                            val.push(null);
                                            setVal(elem, prop, val);
                                        }}>+</button>
                                    }
                                    {
                                        prop.multiple && i > 0 && <button onClick={() => {
                                            val.splice(i);
                                            setVal(elem, prop, val);
                                        }}>-</button>
                                    }
                                </div>
                            )
                        })}
                    </div>

                </InspectorItem>
            );
        case 'text':
            return (
                <InspectorItem>
                    <span>{prop.name}</span>
                    <input type="text" value={val || ""} onChange={(e) => setVal(elem, prop, e.target.value)} />
                </InspectorItem>
            );
        default:
            return (
                <InspectorItem>
                    {prop.name}
                    ?
                </InspectorItem>
            );
    }

}

/**
 * @param {{info: import('./types').AppAdapter, elem: import('./types').AppElement, setProp: Function, onDel: Function}} props
 */
export const DrawInspector = ({ elem, info, setProp, onDel }) => {
    if (!elem) return <></>;
    var comp = info.components[elem.component];
    return comp ? (<div>
        {comp.variants && Object.values(comp.variants).map(x => <DrawInspectorItem info={info} elem={elem} prop={x} key={x.name} val={elem.attributes[x.name]} setVal={setProp} />)}
        <hr />
        {Object.values(info.flavors).map(x => <DrawInspectorItem info={info} elem={elem} prop={x} key={x.name} val={elem.attributes[x.name]} setVal={setProp} />)}
        <hr />
        <button onClick={() => onDel()}>Delete</button>
    </div>) : <></>
}