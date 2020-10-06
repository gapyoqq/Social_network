import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPostCallback:() => void
    UpdateNewPostText: (newText: string) => void
    }


function Profile(props:PropsType) {
    return <div>
        <ProfileInfo/>
        <MyPosts
            addPostCallback={props.addPostCallback}
            postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
            UpdateNewPostText={props.UpdateNewPostText}
        />
    </div>

}

export default Profile
