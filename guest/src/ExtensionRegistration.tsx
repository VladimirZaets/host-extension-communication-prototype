import React, { useEffect } from 'react';
import { register } from "@adobe/uix-guest";

export const ExtensionRegistration = () => {
    useEffect(() => {
            register({
                id: 'guestId',
                methods: {
                    guestNamespace: {
                        'getAttachFramePath': async () => '#/attach-frame',
                    }
                }
            });
        }, []
    );

    return (
        <></>
    );
};