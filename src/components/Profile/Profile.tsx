import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, ProfileType} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionType, StoreType} from "../../redux/redux-store";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {
    profile: ProfileType
}





function Profile(props: PropsType) {
    return <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
    </div>

}

export default Profile
