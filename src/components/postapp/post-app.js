import React, { useState, useEffect } from "react";
import PostForm from "./post-form";
import PostList from "./post-list";
import { PostsContext, UserContext } from "./post-context";

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

  const onDeletePost = (postToBeDeteled) => {
    console.log("post to be deleted", postToBeDeteled);
    let filteredPosts = posts.filter((item) => {
      return item.id != postToBeDeteled.id;
    });

    setPosts(filteredPosts);
  };

  const toggleAddNew = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div>
      <PostsContext.Provider value={{ onDeletePost }}>
        <UserContext.Provider value={"Urvashi Sachdev"}>
          <div>{showAddForm && <PostForm onAddNewPost={onAddNewPost} />}</div>
          <div>
            <button onClick={toggleAddNew}>+</button>
          </div>
          <div>
            {/* <PostList posts={posts} onDeletePost={onDeletePost} /> */}
            <PostList posts={posts} />
          </div>
        </UserContext.Provider>
      </PostsContext.Provider>
    </div>
  );
}
