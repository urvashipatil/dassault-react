// import logo from "./logo.svg";
import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import "./App.css";
// import Counter from "./components/use-effect/counter";
import Posts from "./components/use-effect/posts";
// import PostApp from "./components/postapp/post-app";
import Greeting from "./components/prop-types/greeting";
import ChildComp from "./components/render-props/child-comp";
import Datatable from "./components/render-props/datatable";
import { Image, WithBorder, WithTransparent } from "./components/hoc/image";
import CounterReducer from "./components/use-reducer/counter-reducer";
import PostDetails from "./components/postapp/post-details";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PrivateRoute from "./components/private-route";
import ReactMemoApp from "./components/memoize/react-memo-app";
import UseCallBackApp from "./components/memoize/use-callback-app";
import Search from "./components/search";
import ErrorBoundary from "./components/error-boundary";

const Counter = React.lazy(() => import("./components/use-effect/counter"));
const PostApp = React.lazy(() => import("./components/postapp/post-app"));

function App() {
  const [show, setShow] = useState(true);

  const [login, setLogin] = useState(false);

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
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
      <Router>
        <div>
          <NavLink activeClassName="activ-nav" exact to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="activ-nav" to="/counter">
            Counter
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="activ-nav" to="/postapp">
            Post App
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="activ-nav" to="/renderprop">
            Render Prop
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="activ-nav" to="/memo">
            React.memo
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="activ-nav" to="/usecallback">
            UseCallback
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="activ-nav" to="/debounce">
            Debounce
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact>
            <Greeting name="Urvashi" />
          </Route>
          {/* <Route path="/counter">
            {login ? (
              <Counter />
            ) : (
              () => <h2>You are not allowed to view this page</h2>
            )}
          </Route> */}

          <PrivateRoute path="/counter" exact isLoggedIn={login}>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Counter />
            </Suspense>
          </PrivateRoute>
          <PrivateRoute path="/postapp" exact isLoggedIn={login}>
            <Suspense fallback={<h2>Loading...</h2>}>
              <PostApp />
            </Suspense>
          </PrivateRoute>
          <Route path="/post/:postid" component={PostDetails} />
          <Route path="/renderprop" exact>
            <Datatable rows={rows} />
          </Route>
          <Route path="/memo" exact>
            <ReactMemoApp />
          </Route>
          <Route path="/usecallback" exact>
            <UseCallBackApp />
          </Route>
          <Route path="/debounce" exact>
            <>
              <ErrorBoundary>
                <Search />
              </ErrorBoundary>
              {/* <ErrorBoundary>
                <Counter />
              </ErrorBoundary> */}
            </>
          </Route>
          <Route component={() => <h3>Invalid path</h3>}></Route>
        </Switch>
      </Router>

      {/* {show && <Counter />}

      <button onClick={toggleCounter}>Toggle Counter</button> */}

      {/* <Posts /> */}
      {/* <PostApp /> */}
      {/* <Greeting name="Urvashi" /> */}
      {/* <ChildComp render={() => <h3>My child comp</h3>} /> */}
      {/* <Datatable rows={rows} /> */}

      {/* <Image src={"/images/logo192.png"} />
      <WithBorderImage src={"/images/logo192.png"} />
      <WithBorderTransperancyImage src={"/images/logo192.png"} /> */}

      {/* <CounterReducer /> */}
    </div>
  );
}

export default App;
