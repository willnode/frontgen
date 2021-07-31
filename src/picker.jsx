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
        {Object.values(adapter.components).map((x, i) => (
          <Draggable key={x.name} draggableId={x.name} index={i}>
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