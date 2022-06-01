import "./post-app.css";
import Post from "./post";

export default function PostList({ posts }) {
  return (
    <div>
      <ul className="posts">
        {posts.map((item) => {
          return <Post key={item.id} post={item} />;
        })}
      </ul>
    </div>
  );
}
