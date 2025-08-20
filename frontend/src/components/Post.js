import React from "react";
import "./Post.css";

const Post = ({ post }) => (
  <div className="post">
    <div className="post-header">
      <span className="post-user">{post.user}</span>
      <span className="post-date">{post.date}</span>
    </div>
    <div className="post-content">{post.content}</div>
    {/* TODO: Add like, comment, share buttons */}
  </div>
);

export default Post;
