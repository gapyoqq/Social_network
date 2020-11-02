import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfileType} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


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
