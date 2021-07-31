import styled from "styled-components";

export const AppContainer = styled.div `
    display: flex;
`;

export const AppSidebar = styled.div `
    display: flex;
    flex-direction: column;
    width: 25%;
    background: whitesmoke;
    padding: 10px 0;
`;


const paperCss = `
    color: rgba(0, 0, 0, 0.87);
    transition: all 0.2s;
    background: white;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`

export const PickerContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    min-height: 100px;
`;

/**
 * @typedef DragProps
 * @property {boolean} dragging
 */

/**
 * @type {import("styled-components").StyledComponent<"div", any, DragProps, never>}
 */
export const PickerItem = styled.div `
    width: calc(50% - 4px);
    margin: 2px;
    userSelect: none;
    padding: 4px;
    ${() => paperCss}
    background: ${// @ts-ignore
    p => p.dragging ? 'lightblue' : 'white'};
    &:hover {
        box-shadow: 0 0 4px lightblue;
    }
`;

export const HierarchyContainer = styled.div `
    width: calc(100% - 8px);
    margin-top: 10px;
    margin-bottom: 4px;
    margin-right: 8px;
    userSelect: none;
`;

export const HierarchyItem = styled.div `
    width: calc(100% - 8px);
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 8px;
    ${() => paperCss}
    & > span {
        margin: 2px 8px;
        display: block;
    }
`;

export const InspectorItem = styled.div`
    width: 100%;
    display: flex;
    padding: 2px 8px;
    & > span {
        flex-grow: 1;
        display: block;
    }
`

export const AppWorkspace = styled.div `
    display: flex;
    flex-direction: column;
    width: 50%;
    & > nav {
        height: 40px;
        background: whitesmoke;
    }
`;
export const IframePlayground = styled.iframe`
    width: 100%;
    height: calc(100vh - 44px);
    border: none;
`
export const SourceTextPlayground = styled.textarea`
    width: 100%;
    height: calc(100vh - 44px);
    border: none;
`