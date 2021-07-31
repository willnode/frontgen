import React, { useState } from 'react';
import { AppWorkspace, IframePlayground, SourceTextPlayground } from './styles';
import p from 'pretty';
import { initiateDownload, initiateOpen } from './utils';

export const DisplayWindow = ({ html, workspace, setIter }) => {
    const [page, setPage] = useState(0);
    return (
        <AppWorkspace>
            <nav>
                <button onClick={() => setPage(0)}>Visual</button>
                <button onClick={() => setPage(1)}>HTML</button>
                <button onClick={() => initiateOpen(workspace, setIter)}>Open</button>
                <button onClick={() => initiateDownload("webgendata.json","application/json",JSON.stringify(workspace.body))}>Save</button>
                <button onClick={() => initiateDownload("index.html","text/html",p(html))}>Export</button>
            </nav>
            <main>
                {page === 0 && <IframePlayground srcDoc={html} title="Playground" />}
                {page === 1 && <SourceTextPlayground value={p(html)} readOnly />}
            </main>
        </AppWorkspace>
    );
}