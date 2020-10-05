import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type PropsType = {
    postsData: PostsDataType[]
    addPost:(postMessage:string) => void

}


function MyPosts(props: PropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let postMessage = newPostElement.current?.value
        if (postMessage) {
            props.addPost(postMessage)
        }
    }

    return <div className={classes.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea ref={newPostElement}></textarea>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={classes.posts}>
            {props.postsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
        </div>
    </div>
}

export default MyPosts
