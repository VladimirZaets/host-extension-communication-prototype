import React from 'react'
import { Extensible, ExtensionsProvider } from '@adobe/uix-host-react';
import { Extension } from '@adobe/uix-core';
import { GuestContainer } from './GuestContainer';

function App() {
    const extension: Extension = {
        'id': 'guestId',
        'url': 'http://localhost:3001#/register',
    };
    const provider: ExtensionsProvider = async () => ({
        [extension.id]: extension,
    });

    return (
        <>
            <Extensible debug={true} extensionsProvider={provider}>
                <GuestContainer/>
            </Extensible>
        </>
    );
}

export default App;
