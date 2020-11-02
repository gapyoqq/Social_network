import React from "react";
import {addPost, onPostChange} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: RootStateType) => {

    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}


const MyPostsContainer = connect(mapStateToProps, {addPost, onPostChange})(MyPosts)

export default MyPostsContainer


