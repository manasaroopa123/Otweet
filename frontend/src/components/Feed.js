import React from "react";
import Post from "./Post";
import "./Feed.css";

const Feed = ({ posts }) => (
  <div className="feed">
    {posts.length === 0 ? (
      <div className="feed-empty">No posts yet.</div>
    ) : (
      posts.map((post, idx) => <Post key={idx} post={post} />)
    )}
  </div>
);

export default Feed;
