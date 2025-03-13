import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item, index) => (
        <div key={index}>
          <link to={`/blog/${item.id}`}> {item.title}</link>
        </div>
      ))}
    </>
  );
}

export default Blog;
