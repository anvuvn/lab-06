import { useEffect, useState } from 'react';
import './dashboard.css';
import Posts from '../posts/posts';
import PostDetails from '../postDetails/postDetails';
import axios from 'axios';

const Dashboard = (props) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const [currentTitle, setCurrentTitle] = useState('');

  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', author: 'Author 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', author: 'Author 2', content: 'Content 2' },
    { id: 3, title: 'Post 3', author: 'Author 3', content: 'Content 3' },
    { id: 4, title: 'Post 4', author: 'Author 4', content: 'Content 4' },
    { id: 5, title: 'Post 5', author: 'Author 5', content: 'Content 5' },
  ]);

  const itemClickHandler = (post) => {
    setSelectedPost(post);
    console.log(post);
  };
  const updateTitle = () => {
    selectedPost.title = currentTitle;
    setSelectedPost({ ...selectedPost });
  };
  useEffect(() => {
    if (selectedPost) setCurrentTitle(selectedPost.title);
  }, [selectedPost]);

  return (
    <div>
      <div className="Container">
        <Posts posts={posts} handleSelectItem={itemClickHandler} />
      </div>

      <div className="row">
        <input
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
        <button onClick={updateTitle}>Change</button>
      </div>

      <div>{selectedPost ? <PostDetails post={selectedPost} /> : ''}</div>
    </div>
  );
};

export default Dashboard;
