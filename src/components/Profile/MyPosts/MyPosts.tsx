import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return <div>
        <div>
            My posts
        </div>
        <Post/>
        <Post/>
    </div>
}

export default MyPosts
