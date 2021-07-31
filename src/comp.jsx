import { List, ListItem, Paper } from '@material-ui/core';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ReactDOMServer from 'react-dom/server';
import { HierarchyItem } from './styles';

export const getCompStyle = (snapshot, selected) => {
    return {
        backgroundColor: snapshot.isDraggingOver ? 'lightblue' : (selected ? 'lightyellow' : 'gainsboro'),
        minHeight: '100px',
    }
}

const combineAttr = (name, val, dest) => {
    if (Array.isArray(val))
        val = val.join(" ");
    switch (name) {
        case "className":
            dest.className = dest.className ? dest.className + " " + val : val;
            return;
        case "style":
            dest.style = dest.style ? dest.style + " " + val : val;
            return;
        default:
            dest[name] = val;
            return;
    }
}

/**
 * @param {{info: import('./types').AppAdapter, elem: import('./types').AppElement}} props
 */
const HtmlComponent = ({ elem, info }) => {
    var comp = info.components[elem.component];
    var attr = {};
    if (elem.properties) {
        for (const [key, value] of Object.entries(elem.properties)) {
            combineAttr(key, value, attr);
        }
    }
    if (comp?.attributes) {
        for (const [key, value] of Object.entries(comp.attributes)) {
            combineAttr(key, value, attr);
        }
    }
    if (elem.attributes) {
        Object.keys(elem.attributes).forEach(vk => {
            var varia = comp?.variants?.[vk] || info.flavors[vk]
            if (varia) {
                combineAttr(
                    varia.target,
                    elem.attributes[vk], attr
                );
            }
        });
    }

    const element = attr.element || 'div';
    delete attr.element;

    return React.createElement(
        element,
        attr,
        ...(elem.children?.map((x, i) => (
            <HtmlComponent elem={x} info={info} key={x.id || i} />
        )) || [])
    );
}

/**
 * @param {import('./types').AppAdapter} info
 * @param {import('./types').AppElement} elem
 */
export const renderHtmlComponent = (info, elem) => {
    var head = ReactDOMServer.renderToStaticMarkup(<HtmlComponent elem={info.head} info={info} />);
    var body = ReactDOMServer.renderToStaticMarkup(<HtmlComponent elem={elem} info={info} />);
    return `<!DOCTYPE html><html lang="en">${head}${body}</html>`;
}


/**
 * @param {{data: import('./types').AppElement, info: import('./types').AppAdapter, selection: any, setSelection: Function}} props
 */
export const DrawComponent = ({ data, info, selection, setSelection }) => {
    const comp = info.components[data.component];
    const disallowDrop = selection !== data.id;
    return (
        <HierarchyItem onClick={(e) => {
            e.stopPropagation();
            setSelection(data.id)
        }}>
            <span>{selection === data.id && "▶"} {comp?.name || data.attributes.element || "div"}</span>
            <Droppable droppableId={data.id} isDropDisabled={disallowDrop}>
                {(provided, snapshot) => (
                    <List
                        ref={provided.innerRef}
                        style={getCompStyle(snapshot, selection === data.id)}
                        {...provided.droppableProps}
                    >
                        {(data.children).map(x => <DrawComponent info={info} data={x} key={x.id}
                            selection={selection} setSelection={setSelection} />)}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
        </HierarchyItem>
    )
}
