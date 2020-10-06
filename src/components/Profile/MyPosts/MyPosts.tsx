import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type PropsType = {
    postsData: PostsDataType[]
    addPostCallback: () => void
    newPostText: string
    UpdateNewPostText: (newText: string) => void

}


function MyPosts(props: PropsType) {
    let onPostChange = () => {
        if (newPostElementRef.current)
            props.UpdateNewPostText(newPostElementRef.current.value)
    }

    let newPostElementRef = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPostCallback()
    }

    return <div className={classes.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea onChange={onPostChange} ref={newPostElementRef} value={props.newPostText}/>
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
