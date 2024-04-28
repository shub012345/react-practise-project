import { useReducer } from "react";

const UseReducerHook = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>Count: {state}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </>
  );
};

export default UseReducerHook;
