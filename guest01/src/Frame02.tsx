import React from 'react';
import {useHostExtensibilityState, useExtensionExtensibityState } from "@adobe/uix-guest-react";
import {defaultTheme, Provider, View, ButtonGroup, Button} from '@adobe/react-spectrum';

export const Frame02 = () => {
    const [color, setColor] = useHostExtensibilityState('color', 'blue');
    const [price, setPrice] = useExtensionExtensibityState('price', '0');

    return (
        <Provider theme={defaultTheme} colorScheme={'light'}>
            <View height="100vh" width="100vw" flex backgroundColor={"static-white"}>
            <ButtonGroup>
                <Button variant="primary" onPress={() => {
                    setColor("purple")}
                }>Set color purple</Button>
            </ButtonGroup>
                <input name={"Price"} value={price as string} onChange={(e) => setPrice(e.target.value)}/>
                <div style={{
                    background: color as string,
                    color: "#fff",
                    textAlign: "center",
                    width: 100,
                    height: 100,
                    margin: 10
                }}>
                    UiFrame1 box
                </div>
            </View>
        </Provider>
    );
}
