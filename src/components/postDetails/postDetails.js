import React from 'react';

const postDetails = ({ post }) => {
  const editHandler = (e) => {};
  const deleteHandler = (e) => {};

  return post ? (
    <div className="post-details">
      <div className="row">{post.title}</div>
      <div className="row">{post.author}</div>
      <div className="row row-content">{post.content}</div>

      <div className="row">
        <a
          href="#"
          onClick={(e) => {
            editHandler(e);
          }}
        >
          edit
        </a>
        &nbsp;|&nbsp;
        <a
          href="#"
          onClick={(e) => {
            deleteHandler(e);
          }}
        >
          delete
        </a>
      </div>
    </div>
  ) : (
    'No post selected'
  );
};

export default postDetails;
