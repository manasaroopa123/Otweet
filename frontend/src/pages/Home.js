import React, { useState } from "react";
import PostComposer from "../components/PostComposer";
import Feed from "../components/Feed";

const Home = () => {
  const [posts, setPosts] = useState([
    { user: "Alice", date: "2025-08-20", content: "Welcome to Otweet!" },
    {
      user: "Bob",
      date: "2025-08-20",
      content: "This is a Facebook-style feed.",
    },
  ]);

  const handlePost = (content) => {
    setPosts([
      { user: "You", date: new Date().toISOString().slice(0, 10), content },
      ...posts,
    ]);
  };

  return (
    <div>
      <PostComposer onPost={handlePost} />
      <Feed posts={posts} />
    </div>
  );
};

export default Home;
