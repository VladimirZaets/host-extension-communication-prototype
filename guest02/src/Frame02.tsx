import React from 'react';
import {useHostExtensibilityState } from "@adobe/uix-guest-react";
import {defaultTheme, Provider, View, ButtonGroup, Button} from '@adobe/react-spectrum';



export const Frame02 = () => {
    const [color, setColor] = useHostExtensibilityState('color', 'blue');

    return (
        <Provider theme={defaultTheme} colorScheme={'light'}>
            <View height="100vh" width="100vw" flex backgroundColor={"static-white"}>
            <ButtonGroup>
                <Button variant="primary" onPress={() => {
                    setColor("blue")}
                }>Set color blue</Button>
            </ButtonGroup>
                <div style={{
                    //@ts-ignore
                    background: color,
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
