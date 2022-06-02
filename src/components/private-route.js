import { Route } from "react-router-dom";

const authentication = {
  isLoggedIn: false,
};

export default function PrivateRoute({ children, isLoggedIn, ...rest }) {
  return (
    <Route {...rest}>
      {isLoggedIn
        ? children
        : () => <h2>You are not allowed to view this page</h2>}
    </Route>
  );
}
