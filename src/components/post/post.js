import React from 'react';

const Post = ({ post, clickHandler }) => {
  return (
    <div className="content" onClick={() => clickHandler(post)}>
      <p>Id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default Post;
