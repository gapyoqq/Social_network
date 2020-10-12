import React from "react";
import {AddPostAC, onPostChangeAC, PostsDataType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";

type PropsType = {
    store: StoreType

}


function MyPostsContainer(props: PropsType) {
let state = props.store.getState()

    const onPostChange = (text: string) => {

        props.store.dispatch(onPostChangeAC(text))
    }


    const addPost = () => {
        props.store.dispatch(AddPostAC())
    }

    return <MyPosts
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
        addPost={addPost}
        onPostChange={onPostChange}/>
}

export default MyPostsContainer
