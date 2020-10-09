import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type PropsType = {
    postsData: PostsDataType[]
    newPostText: string
    dispatch: (action: any) => void

}


function MyPosts(props: PropsType) {
    const onPostChange = () => {
        let text = newPostElementRef.current?.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    let newPostElementRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
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
