import { useMemo, useRef, useState } from 'react';
import './App.css';
import boostrap from './adapters/bootstrap.5.json';
import { DragDropContext } from 'react-beautiful-dnd';
import { expandAdapter, shrinkFormat } from './utils';
import { DrawComponent, renderHtmlComponent } from './comp';
import { useEffect } from 'react';
import { PickerDrawer } from './picker';
import { AppContainer, AppSidebar, AppWorkspace, HierarchyContainer, IframePlayground } from './styles';
import { DrawInspector } from './inspector';
import { DisplayWindow } from './display';

const generateId = () => {
  return "" + Math.random();
}

/**
 * @param {import('./types').AppWorkspace} workspace
 * @param {import('./types').AppComponent} comp
 * @param {string} parent
 * @return {import('./types').AppElement}
 */
const expandElement = (workspace, comp, parent, children = [], attributes = {}, properties = {}) => {
  /**
   * @type {import('./types').AppElement}
   */
  var r = {
    component: comp?.name || null,
    children: children || [],
    attributes: attributes || {},
    properties: properties || {},
    id: generateId(),
    parent,
  }

  if (comp?.variants) {
    Object.values(comp.variants).forEach(vv => {
      switch (vv.type) {
        case "options":
          r.attributes[vv.name] = vv.default ?
            shrinkFormat(vv.default, vv.formatExpands[0]) : null;
          break;
        default:
          r.attributes[vv.name] = vv.default || null
          break;
      }
    });
  }
  if (comp?.defaults) {
    r.attributes = {
      ...r.attributes,
      ...comp.defaults
    };
    if (comp.defaults.children) {
      // expand attr.children and move it away to proper place
      /** @type {import('./types').AppElement[]} */
      var cc = JSON.parse(JSON.stringify(comp.defaults.children));
      delete r.attributes.children;
      cc.forEach(c => {
        Object.assign(c, expandElement(workspace,
          workspace.adapter.components[c.component],
          r.id, c.children, c.attributes, c.properties))
      });
      r.children.push(...cc);
    }
  }
  workspace.indexes[r.id] = r;
  return r;
}

function App() {

  /**
   * @type {React.MutableRefObject<import('./types').AppWorkspace>}
   */
  const workspaceRef = useRef(null);
  const [iter, setIter] = useState(0);
  if (workspaceRef.current === null) {
    var adapter = expandAdapter(boostrap);
    var bodyA = adapter.body;
    workspaceRef.current = {
      // @ts-ignore
      adapter,
      body: null,
      indexes: {}
    }
    workspaceRef.current.body = expandElement(workspaceRef.current, adapter.components[bodyA.component], null,
      bodyA.children, bodyA.attributes, bodyA.properties);
  }

  const workspace = workspaceRef.current;
  const [select, setSelect] = useState(workspace.body.id);
  const html = useMemo(() => renderHtmlComponent(workspace.adapter, workspace.body), [iter]);

  const addComponent = (component) => {
    var c = expandElement(workspace, component, select);
    workspace.indexes[select].children.push(c);
    setSelect(c.id);
    setIter(iter + 1);
  }

  const onDragEnd = (/** @type {import('react-beautiful-dnd').DropResult} */ result) => {
    if (!result.destination) {
      return;
    }
    console.log(result);

    if (result.source.droppableId === 'list') {
      addComponent(workspace.adapter.components[result.draggableId]);
    }
  };

  const onSetVal = (comp, prop, newVal) => {
    if (!newVal)
      delete comp.attributes[prop.name];
    else
      comp.attributes[prop.name] = newVal;
    setIter(iter + 1);
  }

  const onDel = () => {
    var c = workspace.indexes[select];
    if (!c.parent) { alert("Can't delete this"); return; }
    var p = workspace.indexes[c.parent];
    p.children.splice(p.children.findIndex((e) => e.id === c.id), 1);
    delete workspace.indexes[select];
    setIter(iter + 1);
  }

  return (
    <AppContainer>
      <AppSidebar>
        <DragDropContext onDragEnd={onDragEnd}>
          <PickerDrawer adapter={workspace.adapter} />
          <HierarchyContainer>
            <DrawComponent info={workspace.adapter} data={workspace.body} selection={select} setSelection={setSelect} />
          </HierarchyContainer>
        </DragDropContext>
      </AppSidebar>
      <DisplayWindow html={html} workspace={workspace} setIter={() => setIter(iter + 1)} />
      <AppSidebar>
        <DrawInspector elem={select && workspace.indexes[select]} info={workspace.adapter} setProp={onSetVal} onDel={onDel} />
      </AppSidebar>
    </AppContainer >
  );
}

export default App;
