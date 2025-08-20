import React, { useState } from "react";
import "./PostComposer.css";

const PostComposer = ({ onPost }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onPost(content);
      setContent("");
    }
  };

  return (
    <div className="post-composer">
      <form onSubmit={handleSubmit}>
        <textarea
          className="post-composer-input"
          placeholder="What's happening, Otweeter?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="post-composer-btn">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostComposer;
