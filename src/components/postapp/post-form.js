import React, { useState, useRef, useEffect } from "react";

function PostForm({ onAddNewPost }) {
  const [post, setPost] = useState({ title: "", body: "" });
  const form = useRef(); //{current: null}

  const testRef = useRef({}); //{current: {}}

  useEffect(() => {
    testRef.current["title"].focus();
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();

    //using controlled inputs
    // console.log("newPost", post);
    // onAddNewPost(post);

    //using ref for a form
    // console.log(form.current.elements.title.value);
    // console.log(form.current.elements.body.value);
    // onAddNewPost({
    //   title: form.current.elements.title.value,
    //   body: form.current.elements.body.value,
    // });

    //using ref to multiple inputs
    console.log(testRef);
    onAddNewPost({
      title: testRef.current.title.value,
      body: testRef.current.body.value,
    });

    //
  };

  // const onTitleChange = (e) => {

  //   setPost({
  //     ...post,
  //    title: e.target.value,
  //   });
  // };

  // const onDescriptionChange = (e) => {
  //   setPost({
  //     ...post,
  //     body: e.target.value,
  //   });
  // };

  const onHandleChange = (e) => {
    console.log(e.target.name); //"title, body"
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form id="myform" name="myForm" onSubmit={onSubmitForm}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            ref={(el) => {
              testRef.current["title"] = el;
            }}
            // value={post.title}
            // onChange={onHandleChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="body"
            // value={post.body}
            // onChange={onHandleChange}

            ref={(el) => {
              testRef.current["body"] = el;
            }}
          />
        </div>
        <button type="submit">Save</button>
        {/* <pre>{JSON.stringify(post)}</pre> */}
      </form>
    </div>
  );
}

export default PostForm;
