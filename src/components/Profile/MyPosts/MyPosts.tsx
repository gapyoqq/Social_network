import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/profileReducer";

type PropsType = {
    postsData: PostsDataType[]
    newPostText: string
    onPostChange: (text: string) => void
    addPost: () => void

}


function MyPosts(props: PropsType) {



    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if (text) {
        props.onPostChange(text)}
    }

    const onAddPost = () => {
        props.addPost()
    }

    return <div className={classes.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea onChange={onPostChange}  value={props.newPostText}/>
        </div>
        <div>
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={classes.posts}>
            {props.postsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
        </div>
    </div>
}

export default MyPosts
