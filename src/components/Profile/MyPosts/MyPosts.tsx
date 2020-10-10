import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionType} from "../../../redux/store";
import {AddPostAC, onPostChangeAC, PostsDataType} from "../../../redux/profileReducer";

type PropsType = {
    postsData: PostsDataType[]
    newPostText: string
    dispatch: (action: ActionType) => void

}


function MyPosts(props: PropsType) {



    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if (text) {
        props.dispatch(onPostChangeAC(text))}
    }

    const addPost = () => {
        props.dispatch(AddPostAC())
    }

    return <div className={classes.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea onChange={onPostChange}  value={props.newPostText}/>
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
