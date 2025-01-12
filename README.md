This is a pair of sample host and guest applications.

They demonstrate an issue with incorrect detection of the `<GuestUIFrame>` content size by UIX SDK in case that content 
has elements with negative margin.

The guest application supplies dynamic content which renders in 4 different modes:
1. List of items built off `<View>` and `<Text>` React Spectrum components
2. List of items built of `<TableView>` React Spectrum component
3. List of items built of `<ListView>` React Spectrum component
4. Plain `<div>` with fixed size and negative bottom margin applied

The 4 buttons at the top allows switching between these modes dynamically.

The host application listens to the `onResize` callback from the `<GuestUIFrame>` and sets `<GuestUIFrame>` height to the 
height reported by the callback.

Additionally, the host application renders a red outline around `<GuestUIFrame>` and shows the current size measurement 
in the "GuestUIFrame size" field.

If the content height reported to the `onResize` callback is valid, there is no vertical scrolling available.

Otherwise, if the content height reported is smaller than the actual value, vertical scrolling kicks in within
`<GuestUIFrame>` which is not correct.

Using the sample app:
1. Clone
2. Build and start the guest on http://localhost:3001
   ```
   cd guest
   npm i
   npm start
   ```
2. Build and start the host app on http://localhost:3000
   ```
   cd host
   npm i
   npm start
   ```
3. Initially, observe:
   1. Number of registered extensions: 1
   2. Guest frame size: non-zero value
   3. Guest frame content coming from extension with four buttons
   4. No vertical scrolling
4. Switch between teh first two modes (`<View>` or `<ListView>`) and observe no vertical scrolling
5. No, switch to either of the last two modes (`<TableView>` or `<div>`)

Result: vertical scrolling appears within `<GuestUIFrame>`

Expected: no vertical scrolling in any mode

Notes: I suspect the root cause is in the `calculateChildrenMargin()` from UIX SDK which explicitly takes
CSS margin into account for all DOM elements within the IFrame:
https://github.com/adobe/uix-sdk/blob/877413636c6ec81f5f4d72a5eb2120b467709b1c/packages/uix-guest/src/guest-ui.ts#L125-L141