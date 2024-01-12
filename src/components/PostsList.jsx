/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom';
import Post from "./Post";
import classes from './PostsList.module.css'

const PostsList = () => {
  const posts = useLoaderData();

 return (
    <>
      { posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} name={post.name} text={post.text} id={post.id} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostsList