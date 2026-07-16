import { useState, useEffect } from "react";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 2: Fetch Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
