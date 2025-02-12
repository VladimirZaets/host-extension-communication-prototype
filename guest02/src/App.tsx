import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ExtensionRegistration } from './ExtensionRegistration';
import { Attach } from "@adobe/uix-guest-react"
import { Frame01 } from './Frame01';
import { Frame02 } from './Frame02';

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route index element={<div>Guest. Not to be used directly, only by the host app</div>}/>
                <Route path="register" element={<ExtensionRegistration/>}/>
                <Route path="attach-frame-01" element={
                  <Attach config={{id: "frame01"}}>
                    <Frame01/>
                   </Attach>
                  }/>
                <Route path="attach-frame-02" element={
                   <Attach config={{id: "frame02"}}>
                    <Frame02/>
                   </Attach>
                }/>
            </Routes>
        </HashRouter>
    );
}

export default App;
