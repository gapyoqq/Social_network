import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    let postsData = [
        {id: 1, likesCount: 13, message: 'Hi, how are you?'},
        {id: 2, likesCount: 15, message: 'Love you)'},
        {id: 3, likesCount: 11, message: 'Np'},

    ]
    return <div className={classes.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button> Add post</button>
        </div>
        <div className={classes.posts}>
            {postsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
        </div>
    </div>
}

export default MyPosts
