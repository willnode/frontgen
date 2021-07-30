import { List, ListItem, Paper } from '@material-ui/core';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ReactDOMServer from 'react-dom/server';

export const getCompStyle = (snapshot, selected) => {
    return {
        backgroundColor: snapshot.isDraggingOver ? 'lightblue' : (selected ? 'lightyellow' : 'gainsboro'),
        minHeight: '100px',
    }
}

const combineAttr = (name, val, dest) => {
    switch (name) {
        case "className":
            dest.className = dest.className ? dest.className + " " + val : val;
            return;
        case "style":
            dest.style = {
                ...(dest.style || {}),
                ...val,
            };
            return;
        default:
            dest[name] = val;
            return;
    }
}

const HtmlComponent = ({ comp, info }) => {
    var attr = {};
    Object.entries(comp.component)
        .filter(([k, v]) => !k.startsWith('_'))
        .forEach(([k, v]) => {
            attr[k] = v;
        });
    if (comp.attributes) {
        Object.keys(comp.attributes).forEach(vk => {
            var varia = comp.component._variant[vk] || info.flavors[vk]
            combineAttr(
                varia._target,
                comp.attributes[vk], attr);
        });
    }

    return React.createElement(
        comp.component._element || 'div',
        attr,
        ...(comp.children?.map((x, i) => (
            <HtmlComponent comp={x} info={info} key={x.id || i} />
        )) || [])
    );
}

export const renderHtmlComponent = (info, comp) => {
    var head = ReactDOMServer.renderToStaticMarkup(<HtmlComponent comp={info.head} info={info} />);
    var body = ReactDOMServer.renderToStaticMarkup(<HtmlComponent comp={comp} info={info} />);
    return `<!DOCTYPE html><html lang="en">${head}${body}</html>`;
}

export const DrawComponent = ({ data, selection, setSelection }) => {
    const disallowDrop = selection !== data.id || (data.children.length > 0 && !data.component._children?.multiple);
    return (
        <ListItem style={{padding: '0 0 0 8px'}}>
            <Paper style={{ width: '100%' }} onClick={(e) => {
                e.stopPropagation();
                setSelection(data.id)
            }}>
                {data.component._name}
                {data.component._children && <Droppable droppableId={data.id} isDropDisabled={disallowDrop}>
                    {(provided, snapshot) => (
                        <List
                            ref={provided.innerRef}
                            style={getCompStyle(snapshot, selection === data.id)}
                            {...provided.droppableProps}
                        >
                            {(data.children).map(x => <DrawComponent data={x} key={x.id} selection={selection} setSelection={setSelection} />)}
                            {provided.placeholder}
                        </List>
                    )}
                </Droppable>}
            </Paper>
        </ListItem>
    )
}
