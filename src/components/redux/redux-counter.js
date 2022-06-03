// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function IncrementActionCreator() {
  return { type: "INCREMENT", payload: 2 };
}

const ReduxCounter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  function increment() {
    // setCounter(counter + 1);
    dispatch(IncrementActionCreator());
  }

  function decrement() {
    // setCounter(counter - 1);
    dispatch({ type: "DECREMENT", payload: 2 });
  }

  return (
    <div className="counter">
      <h1>Using Redux - {counter}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
