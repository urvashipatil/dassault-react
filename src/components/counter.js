import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  //It will get called on each render
  // useEffect(() => {
  //   console.log("UseEffect getting called on each render");
  //   return () => {
  //     console.log("Cleanup on render");
  //   };
  // });

  //It will get called only once - mount
  useEffect(() => {
    console.log("UseEffect getting called Once");
    // let interv = setInterval(() => {
    //   console.log("Interval for 1 sec is getting called");
    // }, 1000);

    const handleResize = () => {
      console.log("window resized");
      // alert("Resize called");
      const { width } = document.body.getBoundingClientRect();

      setWindowWidth(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Interval clean up is called");
      // clearInterval(interv);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Calling useEffect conditionally
  // useEffect(() => {
  //   console.log("UseEffect getting called when counter changes");
  //   return () => {
  //     console.log("Interval clean up is called for counter change");
  //   };
  // }, [counter]);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <p>Widnow Width is {windowWidth}</p>
      </div>
    </div>
  );
};

export default Counter;
