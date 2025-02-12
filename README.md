This is a sample of host and two guests (extensions) applications.

To install: 
1. Install dependencies: `cd host && yarn install && cd ../guest01 && yarn install && cd ../guest02 && yarn install`
2. Run host application: `cd host && yarn start`
3. Run first extension: `cd guest01 && yarn start`
4. Run second extension: `cd guest02 && yarn start`
5. Clone SDK: `git@github.com:adobe/uix-sdk.git`
6. Checkout branch `VladimirZaets:frames-communication` (PR: https://github.com/adobe/uix-sdk/pull/85)
7. Install SDK dependencies: `npm i` in sdk root folder
8. Deploy SDK to `yalc`: `npm run build && cd ./packages/uix-core && yalc push --sig && cd ../uix-host && yalc push --sig && cd ../uix-host-react &&yalc push --sig && cd ../uix-guest && yalc push --sig && cd ../uix-guest-react && yalc push --sig`
9. Setup `yalc'ed` SDK to guests: `cd ./guest01 && yalc add @adobe/uix-guest-react && cd ../guest02 && yalc add @adobe/uix-guest-react`
10. Setup `yalc'ed` SDK to host: `cd ./host && yalc add @adobe/uix-host-react && @adobe/uix-host`
11. Open browser: `localhost:3000`
