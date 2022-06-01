import "./post-app.css";
import Post from "./post";

export default function PostList({ posts }) {
  return (
    <div>
      <ul className="posts">
        {/* {posts.map((item) => {
          return <Post key={item.id} post={item} onDeletePost={onDeletePost} />;
        })} */}
        {posts.map((item) => {
          return <Post key={item.id} post={item} />;
        })}
      </ul>
      {posts.length == 0 && <p>No Posts available</p>}
    </div>
  );
}
