import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { PickerContainer, PickerItem } from './styles';

/**
 * @param {{adapter: import('./types').AppAdapter}} props
 */
export const PickerDrawer = ({ adapter }) => {
  return (<Droppable droppableId="list" isDropDisabled>
    {(provided, snapshot) => (
      <PickerContainer
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <Draggable draggableId="___" index={0}>
            {(provided, snapshot) => (
              <PickerItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                dragging={snapshot.isDragging}
                style={provided.draggableProps.style}>
                  [custom]
              </PickerItem>
            )}
          </Draggable>
        {Object.values(adapter.components).map((x, i) => (
          <Draggable key={x.name} draggableId={x.name} index={i + 1}>
            {(provided, snapshot) => (
              <PickerItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                dragging={snapshot.isDragging}
                style={provided.draggableProps.style}>
                  {x.name}
              </PickerItem>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </PickerContainer>
    )}
  </Droppable>
  )
}