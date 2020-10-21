import React from "react";
import {AddPostAC, onPostChangeAC, PostsDataType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

type PropsType = {}


let mapStateToProps = (state: RootStateType) => {

    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        onPostChange: (text: string) => dispatch(onPostChangeAC(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer


