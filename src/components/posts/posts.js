import React from 'react';
import Post from '../post/post';

const Posts = (props) => {
  const postList = props.posts.map((post) => {
    return (
      <Post
        post={post}
        key={post.id}
        clickHandler={() => props.handleSelectItem(post)}
      />
    );
  });

  return postList;
};

export default Posts;
