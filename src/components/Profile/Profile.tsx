import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/store";
import {ProfilePageType} from "../../redux/profileReducer";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}





function Profile(props: PropsType) {
    return <div>
        <ProfileInfo />
        <MyPosts

            postsData={props.profilePage.postsData}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
        />
    </div>

}

export default Profile
