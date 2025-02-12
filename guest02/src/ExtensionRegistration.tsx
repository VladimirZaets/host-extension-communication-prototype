import { useEffect } from "react";
import { register } from "@adobe/uix-guest-react";
import React from "react";

export const  ExtensionRegistration = () => {
  useEffect(() => {
    const init = async () => {
      void register({
        id: 'extensiossnId',
        methods: {
          guestNamespace01: {
            async getAttachFramePath() {
              return '#/attach-frame-01'
            },
          },
          guestNamespace02: {
            async getAttachFramePath() {
              return '#/attach-frame-02'
            },
          },
        },
      });
    }
    init().catch(console.error)
  }, []);
  return <>IFrame for integration with Host (AEM)...</>;
}

