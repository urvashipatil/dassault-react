import React, { useMemo } from "react";

function ChildWithCounter({ counter, updateCounter }) {
  console.log("Child Rendering");

  const childNumer = useMemo(() => {
    let childNumer = 0;
    for (let i = 0; i < 500000000; i++) {
      childNumer++;
    }
    return childNumer;
  }, []);

  return (
    <div className="child">
      Child - {counter}
      <div>
        <button onClick={updateCounter}>Child Button - {childNumer}</button>
      </div>
    </div>
  );
}

export default React.memo(ChildWithCounter);
