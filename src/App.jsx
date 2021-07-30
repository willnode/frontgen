import { Card, Grid, Paper } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import './App.css';
import boostrap from './adapters/bootstrap.5.json';
import { DragDropContext } from 'react-beautiful-dnd';
import { useMemo } from 'react';
import { extractAdapter, shrinkFormat } from './utils';
import { DrawComponent, renderHtmlComponent } from './comp';
import { useEffect } from 'react';
import { PickerDrawer } from './picker';

class ItemComponent {
  component = null;
  id = "";
  children = [];
  attributes = {};
  constructor(component, id) {
    this.component = component;
    if (this.component._variant) {
      Object.values(this.component._variant).forEach(vv => {
        switch (vv._type) {
          case "options":
            this.attributes[vv._name] = vv._default ?
              shrinkFormat(vv._default, vv._formatExpands?.[0]
                || ["", ""]) : null;
            break;
          default:
            this.attributes[vv._name] = vv._default || null
            break;
        }
      });
      if (this.component._defaults) {
        this.attributes = {
          ...this.attributes,
          ...this.component._defaults
        };
      }
    }
    this.id = id;
  }
}


function App() {
  const adapter = useMemo(() => extractAdapter(boostrap), []);
  const [iter, setIter] = useState(0);
  const [select, setSelect] = useState("body");
  const workspace = useRef(null);
  const refIframe = useRef(null);
  const addComponent = (component, selected) => {
    var c = new ItemComponent(component, "" + Math.random());
    workspace.current.indexes[selected].children.push(c);
    workspace.current.indexes[c.id] = c;
  }

  if (workspace.current === null) {
    var body = new ItemComponent(adapter._components.body, "body");
    workspace.current = {
      body,
      indexes: { body },
      selected: null,
    }
  }

  useEffect(() => {
    var html = renderHtmlComponent(adapter._info, workspace.current.body);
    refIframe.current.srcdoc = html;
  }, [iter, adapter._info]);

  const onDragEnd = (/** @type {import('react-beautiful-dnd').DropResult} */ result) => {
    if (!result.destination) {
      return;
    }
    console.log(result);

    if (result.source.droppableId === 'list') {
      addComponent(adapter._components[result.draggableId], select);
      setIter(iter + 1);
    }
  };

  return (
    <Grid container>
      <Grid item xs={3} lg={2}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Card elevation={2}>
            <PickerDrawer adapter={adapter} />
          </Card>
          <div style={{ height: '10px' }} />
          <DrawComponent data={workspace.current.body} selection={select} setSelection={setSelect} />
        </DragDropContext>
      </Grid>
      <Grid item xs={6} lg={8}>
        <iframe ref={refIframe} title="Playground" style={{ width: '100%', height: '100vh', border: 'none' }} />
      </Grid>
      <Grid item xs={3} lg={2}>
        <Paper>
        </Paper>
      </Grid>
    </Grid >
  );
}

export default App;
