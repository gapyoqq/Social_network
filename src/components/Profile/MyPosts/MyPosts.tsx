import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type PropsType = {
    postsData: PostsDataType[]
}


function MyPosts(props:PropsType) {

    return <div className={classes.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea >Write a message... </textarea>
        </div>
        <div>
            <button> Add post</button>
        </div>
        <div className={classes.posts}>
            {props.postsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
        </div>
    </div>
}

export default MyPosts
