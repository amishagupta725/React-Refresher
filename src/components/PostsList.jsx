/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css'

const PostsList = ({ modalIsVisible, hideModalHandler }) => {
  const [allPosts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }

  return (
    <>
      {modalIsVisible &&
        (<Modal onClose={hideModalHandler}>
          <NewPost
            onCancel={hideModalHandler}
            onAddPost={addPostHandler}
          />
        </Modal>)}
      <ul className={classes['posts']}>
        {allPosts.map((post)=> <Post key={crypto.randomUUID()} name={post.name} text={post.text} />)}
      </ul>
    </>
  )
}

export default PostsList