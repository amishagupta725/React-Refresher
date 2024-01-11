/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from './Post.module.css';
function Post({name, text}) {
    return (
        <li className={classes['post']}>
            <p className={classes['author']}>{name}</p>
            <p className={classes['text']}>{text}</p>
        </li>
    )
}

export default Post;