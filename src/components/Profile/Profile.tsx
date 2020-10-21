import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionType, StoreType} from "../../redux/redux-store";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {

}





function Profile(props: PropsType) {
    return <div>
        <ProfileInfo />
        <MyPostsContainer />
    </div>

}

export default Profile
