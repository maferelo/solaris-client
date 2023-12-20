## React

### [useEffect](https://react.dev/reference/react/useEffect)

Calling `useEffect` with an empty array as the second argument will cause the effect to only run once, on mount. This is equivalent to `componentDidMount` in class components.

```jsx
useEffect(() => {
  // do something
  return () => {
    // do something
  };
}, []);
```

The function returned from the effect will be called when the component unmounts. This is equivalent to `componentWillUnmount` in class components.

### useReducer

Well written reducers don't send requests, sche

### [useDebugValue](https://react.dev/reference/react/useDebugValue)

`useDebugValue` is a hook that allows you to display a label for custom hooks in React DevTools. It takes two arguments, the value to display and an optional function to format the value. The function is only called when the DevTools are open. It's useful for displaying values that are expensive to compute or are difficult to inspect and in a custom hook.

```jsx
useDebugValue(value, formatValue);
useDebugValue(date, (date) => date.toDateString());
```
