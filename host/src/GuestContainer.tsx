import React, {useEffect, useState} from 'react';
import {GuestUIFrame, useExtensions} from '@adobe/uix-host-react';
import {UIFrameRect} from '@adobe/uix-core/src/types';

export const GuestContainer = () => {
    const { extensions } = useExtensions(() => {
        return {
            'requires': {},
            'provides': {}
        };
    });
    const [guestFrame, setGuestFrame] = useState<{ id: string, path: string } | null>(null);
    const [guestFrameSize, setGuestFrameSize] = useState<UIFrameRect>({ width: 0, height: 0});

    useEffect(() => {
        const init = async () => {
            if (extensions && extensions.length) {
                const extension = extensions[0];

                const guestFramePath = await extension.apis.guestNamespace.getAttachFramePath();

                setGuestFrame({
                        id: extension.id,
                        path: guestFramePath
                    }
                );
            }
        };
        init();
    }, [extensions]);

    const resizeHandler = (size: UIFrameRect) => {
        setGuestFrameSize(size)
    };

    return (
        <>
            <h1>Host application</h1>
            <p>Number of registered extensions: {extensions.length}</p>
            <p>GuestUIFrame size: {guestFrameSize.width} x {guestFrameSize.height}</p>
            {guestFrame ? <GuestUIFrame
                guestId={guestFrame.id}
                src={guestFrame.path}
                onResize={resizeHandler}
                style={{ outline : '1px solid red', height: `${guestFrameSize.height}px`}}
            ></GuestUIFrame> : null}
        </>
    );
}