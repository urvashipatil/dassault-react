// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/use-effect/counter";
import Posts from "./components/use-effect/posts";
import PostApp from "./components/postapp/post-app";

function App() {
  const [show, setShow] = useState(true);

  const toggleCounter = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h2>My First React App</h2>
      {/* {show && <Counter />}

      <button onClick={toggleCounter}>Toggle Counter</button> */}

      {/* <Posts /> */}
      <PostApp />
    </div>
  );
}

export default App;
