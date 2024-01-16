## React

### Hooks

#### [useEffect](https://react.dev/reference/react/useEffect)

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

#### useReducer

Well written reducers don't send requests, sche

#### [useDebugValue](https://react.dev/reference/react/useDebugValue)

`useDebugValue` is a hook that allows you to display a label for custom hooks in React DevTools. It takes two arguments, the value to display and an optional function to format the value. The function is only called when the DevTools are open. It's useful for displaying values that are expensive to compute or are difficult to inspect and in a custom hook.

```jsx
useDebugValue(value, formatValue);
useDebugValue(date, (date) => date.toDateString());
```

#### [useRef](https://react.dev/reference/react/useRef)

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument. It's useful for storing mutable values that don't cause a rerender when they change. It's also useful for storing values that are expensive to compute.

```jsx
const ref = useRef(initialValue);
```

#### [use](https://react.dev/reference/react/use)

`use` is a hook that allows you to use a promise in a component. It takes a promise as an argument and returns an object with the promise's current state. Should be defined outside the component as it will cause the component to rerender when the promise resolves. Better use Redux. can be used for conditional hooks.

```jsx
const promise = use(promise);
```

### Don't define components inside components

Defining components inside components will cause them to be redefined on every render. This will cause the component to be unmounted and remounted every time the parent component renders. This will cause the component to lose its state and any side effects will be run again.

Bad:

```jsx
function Parent() {
  function Child() {
    return <div>Child</div>;
  }

  return <Child />;
}
```

Good:

```jsx
function Child() {
  return <div>Child</div>;
}

function Parent() {
  return <Child />;
}
```
