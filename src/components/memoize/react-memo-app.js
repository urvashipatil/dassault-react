import React, { useState } from "react";

export default function ReactMemoApp() {
  const [counter, setCounter] = useState(0);
  const arr = [1, 2, 3];
  return (
    <div className="container">
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Click here</button>
      <Child myArr={arr} />
    </div>
  );
}

//lodash
function areEqual(prevProps, nextProps) {
  if (prevProps.myArr.join("") == nextProps.myArr.join("")) {
    return true;
  }
  return false;
}

const Child = React.memo(function Child() {
  console.log("Child Rendering");
  return <div className="child">Child</div>;
}, areEqual);

// export default React.memo(Child, areEqual);
