import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { PostsContext, UserContext } from "./post-context";

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
