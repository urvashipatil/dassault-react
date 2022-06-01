// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import Counter from "./components/counter";
import Posts from "./components/posts";

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

      <Posts />
    </div>
  );
}

export default App;
