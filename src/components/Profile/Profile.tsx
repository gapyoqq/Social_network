import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}


function Profile(props: PropsType) {
    return <div>
        <ProfileInfo/>
        <MyPosts

            postsData={props.profilePage.postsData}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
        />
    </div>

}

export default Profile
