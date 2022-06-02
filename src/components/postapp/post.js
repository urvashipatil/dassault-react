import React, { useContext } from "react";
import { PostsContext, UserContext } from "./post-context";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const { onDeletePost } = useContext(PostsContext);
  const userName = useContext(UserContext);

  // console.log("contextValue", contextValue.onDeletePost);

  // const onPostTitleclick = () => {
  //   alert("post clicked");
  // };

  return (
    <li className="post">
      <div>{userName}</div>
      {/* <div className="title" onClick={onPostTitleclick}>
        {post.title}
      </div> */}

      <Link to={`/post/${post.id}`}>{post.title}</Link>
      <hr />
      <div>{post.body}</div>
      <div>
        <button className="delete" onClick={() => onDeletePost(post)}>
          Delete
        </button>
      </div>
    </li>
  );
}

//<componentName>.propTypes
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};
