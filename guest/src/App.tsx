import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ExtensionRegistration } from './ExtensionRegistration';
import { AttachFrame } from './AttachFrame';

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route index element={<div>Guest. Not to be used directly, only by the host app</div>}/>
                <Route path="register" element={<ExtensionRegistration/>}/>
                <Route path="attach-frame" element={<AttachFrame/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
