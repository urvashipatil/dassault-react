import React, { useState, useCallback } from "react";
import ChildWithCounter from "./child-with-counter";

export default function UseCallBackApp() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const updateCounter = useCallback(() => setCounter(counter + 1), [counter]);
  return (
    <div className="container">
      <div>{counter}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCounter(counter + 1)}>Click here</button>
      <ChildWithCounter counter={counter} updateCounter={updateCounter} />
    </div>
  );
}
