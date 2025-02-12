import React from 'react';
import {useHostExtensibilityState, useExtensionExtensibityState} from "@adobe/uix-guest-react";
import {defaultTheme, Provider, View, ButtonGroup, Button,} from '@adobe/react-spectrum';

export const Frame01 = () => {
  const [color, setColor] = useHostExtensibilityState('color', '');
  const [price] = useExtensionExtensibityState('price', '');
  const [_, setSize] = useExtensionExtensibityState('size', '0');

  return (
    <Provider theme={defaultTheme} colorScheme={'light'}>
      <View height="100vh" width="100vw" flex backgroundColor={"static-white"}>
        <>
          Price from host is {price}
          <ButtonGroup>
            <Button variant="primary" onPress={() => {
              setColor("brown")
            }
            }>Set color brown</Button>
            <Button variant="primary" onPress={() => {
              setSize(Math.random() * 100)
            }
            }>Set extension size</Button>
          </ButtonGroup>
          <div style={{
            background: color as string,
            color: "#fff",
            textAlign: "center",
            width: 100,
            height: 100,
            margin: 10
          }}>
            UiFrame2 box
          </div>
        </>
      </View>
    </Provider>
  );
}
