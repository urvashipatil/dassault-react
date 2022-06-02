import { useReducer } from "react";
import { INCREMENT, DECREMENT } from "./counter-action";

function cntrReducer(state, action) {
  // console.log("in reducer fun", state, action);

  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
  }

  return state;
}

const CounterReducer = () => {
  const [counter, dispatch] = useReducer(cntrReducer, 0);

  function increment() {
    // setCounter(counter + 1);
    dispatch({ type: "dummy", payload: 5 });
  }

  function decrement() {
    // setCounter(counter - 1);
    dispatch({ type: DECREMENT, payload: 2 });
  }

  return (
    <div className="counter">
      <h1>useReducer - {counter}</h1>
      {/* <div><input type="text"></input></div> */}
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default CounterReducer;
