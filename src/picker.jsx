import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';


const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: `4px`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : '#0000',

    // styles we need to apply on draggables
    ...draggableStyle
  });

export const PickerDrawer = ({ adapter }) => {
    return <Droppable droppableId="list" isDropDisabled>
    {(provided, snapshot) => (
      <Grid container
        ref={provided.innerRef}
        style={{
          backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white',
          minHeight: '100px',
        }}
        {...provided.droppableProps}
      >
        {Object.values(adapter._components).map((x, i) => (
          <Draggable key={x._name} draggableId={x._name} index={i}>
            {(provided, snapshot) => (
              <Grid item xs={6}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}>
                <Paper style={{ padding: 8, margin: 0 }}>
                  {x._name}
                </Paper>
              </Grid>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </Grid>
    )}
  </Droppable>
}