import React, { useState, useEffect } from "react";
import PostForm from "./post-form";
import PostList from "./post-list";

export default function PostApp() {
  const [posts, setPosts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
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

  const onAddNewPost = (newPost) => {
    console.log("onAddNewPost", newPost);
    newPost.id = +new Date(); //uuid V4
    setPosts([newPost, ...posts]);
  };

  const toggleAddNew = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div>
      <div>{showAddForm && <PostForm onAddNewPost={onAddNewPost} />}</div>
      <div>
        <button onClick={toggleAddNew}>+</button>
      </div>
      <div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
