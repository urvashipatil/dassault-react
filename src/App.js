// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/use-effect/counter";
import Posts from "./components/use-effect/posts";
import PostApp from "./components/postapp/post-app";
import Greeting from "./components/prop-types/greeting";
import ChildComp from "./components/render-props/child-comp";
import Datatable from "./components/render-props/datatable";
import { Image, WithBorder, WithTransparent } from "./components/hoc/image";

function App() {
  const [show, setShow] = useState(true);

  const toggleCounter = () => {
    setShow(!show);
  };

  const rows = [
    {
      id: 1,
      cell: () => "Cell 1",
    },
    {
      id: 2,
      cell: () => <Counter />,
    },
  ];

  const WithBorderImage = WithBorder(Image);
  const WithBorderTransperancyImage = WithTransparent(WithBorder(Image));

  return (
    <div className="App">
      <h2>My First React App</h2>
      {/* {show && <Counter />}

      <button onClick={toggleCounter}>Toggle Counter</button> */}

      {/* <Posts /> */}
      {/* <PostApp /> */}
      {/* <Greeting name="Urvashi" /> */}
      {/* <ChildComp render={() => <h3>My child comp</h3>} /> */}
      {/* <Datatable rows={rows} /> */}

      <Image src={"/images/logo192.png"} />
      <WithBorderImage src={"/images/logo192.png"} />
      <WithBorderTransperancyImage src={"/images/logo192.png"} />
    </div>
  );
}

export default App;
