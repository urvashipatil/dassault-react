import React, { useState, useEffect } from "react";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setPosts(data);
    //   });
    async function fetchData() {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      console.log(response);
      let data = await response.json();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      Posts
      <ul className="posts">
        {posts.map((post) => {
          return (
            <li key={post.id} className="post">
              <div className="title">{post.title}</div>
              <hr />
              <div>{post.body}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Posts;
