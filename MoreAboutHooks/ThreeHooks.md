react limits the number of renders to prevent infinite loop,
- in short , rendering of a component is not fully controlled by the users but its actually controlled by react itself, via hooks.
- **Note for future-** in react , we can use window object , but while learning in next, there is server side rendering ,over there we cant use window.
- to copy text from input and store it in clip board use `window.navigator.clipboard.writeText(password)`

- `passwordRef.current?.select()`
- `passwordRef.current?.setSelectionRange(start,end)`
