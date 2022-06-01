import React, { useState, useEffect } from "react";

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
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(response);
      let data = await response.json();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      Posts
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="post">
              <div>{post.title}</div>
              <div>{post.body}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Posts;
