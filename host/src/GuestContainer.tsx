import React, {useEffect, useState} from 'react';
import {GuestUIFrame, useExtensions, useExtensibilityState} from '@adobe/uix-host-react';

export const RenderExtensions = () => {
  const {extensions} = useExtensions(() => {
    return {
      'requires': {},
      'provides': {}
    };
  });
  const [color, setColor] = useExtensibilityState('color', "orange")
  return <>
    <h1>Host application</h1>
    <div style={{padding: "0 10px"}}>
      <button onClick={() => {
        setColor("green")
      }}>Green
      </button>
      <button onClick={() => {
        setColor("red")
      }}>red
      </button>
    </div>
    <div style={{
      background: color as string,
      color: "#fff",
      textAlign: "center",
      width: 100,
      height: 100,
      margin: 10
    }}>
      host box
    </div>
    {extensions.map((extension, i) => <GuestContainer key={i} extension={extension}/>)}
    </>
}

export const GuestContainer = ({extension}) => {
  const [guestFrame, setGuestFrame] = useState<{ id: string, path: string } | null>(null);
  const [guestFrameTwo, setGuestFrameTwo] = useState<{ id: string, path: string } | null>(null);

  useEffect(() => {
    const init = async () => {
      if (extension) {
        const guestFramePath = await extension.apis.guestNamespace01.getAttachFramePath();
        const guestFramePathTwo = await extension.apis.guestNamespace02.getAttachFramePath();
        setGuestFrame({
            id: extension.id,
            path: guestFramePath
          });
        setGuestFrameTwo({
          id: extension.id,
          path: guestFramePathTwo
        })
        }
    };
    init();
  }, [extension]);

  return (
    <>
      <div style={{
        height: 200,
        background: "#fcf8f8"
      }}>
        <h3>
          Extension#1 Iframes
        </h3>
        <div style={{
          display: "inline-block",
          width: 300
        }}>
        <div>
          Extension#1 UiFrame #1
        </div>
        {guestFrameTwo ? <GuestUIFrame
          guestId={guestFrameTwo.id}
          src={guestFrameTwo.path}
          key={guestFrameTwo.path}
        ></GuestUIFrame> : null}
        </div>
        <div style={{
          display: "inline-block",
          width: 300
        }}>
        <div>
          Extension#1 UiFrame #2
        </div>
        {guestFrame ? <GuestUIFrame
          guestId={guestFrame.id}
          src={guestFrame.path}
        ></GuestUIFrame> : null}
        </div>
      </div>
    </>
  );
}
