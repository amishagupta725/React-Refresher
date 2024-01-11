/* eslint-disable react/prop-types */
import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {

    const [text, setText] = useState('');
    const [name, setName] = useState('');
  
    function textChangeHandler(e) {
      setText(e.target.value)
    }
  
    function nameChangeHandler(e) {
      setName(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
        const postData = {
            name : name,
            text : text
        }
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={textChangeHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={nameChangeHandler} />
            </p>
            <p className={classes['actions']}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;