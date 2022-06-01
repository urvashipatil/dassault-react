import React from "react";

export default function Post({ post }) {
  return (
    <li className="post">
      <div className="title">{post.title}</div>
      <hr />
      <div>{post.body}</div>
    </li>
  );
}
