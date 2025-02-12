import React from 'react';
import {useHostExtensibilityState, useExtensionExtensibityState } from "@adobe/uix-guest-react";
import {defaultTheme, Provider, View, ButtonGroup, Button} from '@adobe/react-spectrum';

export const Frame01 = () => {
    const [color, setColor] = useHostExtensibilityState('color', 'love');
    const [size] = useExtensionExtensibityState('size', '4');

    return (
      <Provider theme={defaultTheme} colorScheme={'light'}>
          <View height="100vh" width="100vw" flex backgroundColor={"static-white"}>
              <ButtonGroup>
                  <Button variant="primary" onPress={() => {
                      //@ts-ignore
                      setColor("yellow")}
                  }>Set color yellow</Button>
              </ButtonGroup>
              {/*@ts-ignore*/}
              <div>
                  Extension size is {size}
              </div>
              <div style={{
                  //@ts-ignore
                  background: color,
                  color: "#fff",
                  textAlign: "center",
                  width: 100,
                  height: 100,
                  margin: 10
              }}>
                  UiFrame2 box
              </div>
          </View>
      </Provider>
    );
}
