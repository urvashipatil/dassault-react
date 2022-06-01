import React, { useContext } from "react";
import { PostsContext, UserContext } from "./post-context";
import PropTypes from "prop-types";
export default function Post({ post }) {
  const { onDeletePost } = useContext(PostsContext);
  const userName = useContext(UserContext);
  // console.log("contextValue", contextValue.onDeletePost);

  return (
    <li className="post">
      <div>{userName}</div>
      <div className="title">{post.title}</div>
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
