import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <p>{blogData.description}</p>
      <h2>Recent Posts:</h2>
      <ul>
        {blogData.posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>By {post.author}</p>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
