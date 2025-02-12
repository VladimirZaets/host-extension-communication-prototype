import React from 'react'
import {Extensible, ExtensionsProvider} from '@adobe/uix-host-react';
import {RenderExtensions} from './GuestContainer';

function App() {
  const provider: ExtensionsProvider = async () => ({
    ['guestId01']: {
      'id': 'guestId',
      'url': 'http://localhost:3001#/register',
    },
    ['guestId02']: {
      'id': 'guestId',
      'url': 'http://localhost:3002#/register',
    },
  });

  return (
    <>
      <Extensible debug={true} extensionsProvider={provider}>
        <RenderExtensions/>
      </Extensible>
    </>
  );
}

export default App;
