import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return <div>
        <div>
            My posts
        </div>
        <Post message = 'privet' likesCount ={15}/>
        <Post message = 'how you doing?' likesCount ={20}/>
    </div>
}

export default MyPosts
