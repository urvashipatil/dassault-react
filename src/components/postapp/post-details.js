import React from "react";
import {
  Route,
  useParams,
  useLocation,
  useHistory,
  Link,
} from "react-router-dom";

function PostDetails() {
  const { postid } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log("location", location);

  const queryParams = new URLSearchParams(location.search);

  console.log("postid parameter", postid);
  const onCounterClick = () => {
    //if user is authenticated
    // if()
    history.push("/counter");
  };
  return (
    <div>
      Post Details will be show here for Id {postid}
      <Link to={`/post/${postid}/moredetails`}>More details</Link>
      <Route
        path="/post/:postid/moredetails"
        component={() => <h2>More Details</h2>}
      ></Route>
      <button onClick={() => history.goBack()}>Back</button>
      <button onClick={onCounterClick}>Counter</button>
    </div>
  );
}

export default PostDetails;

// function PostNetsedRouteComponent() {
//   return <h2>More Details</h2>;
// }
