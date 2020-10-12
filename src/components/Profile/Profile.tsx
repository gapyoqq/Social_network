import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/store";
import {ProfilePageType} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

type PropsType = {
    store: StoreType
}





function Profile(props: PropsType) {
    return <div>
        <ProfileInfo />
        <MyPostsContainer  store={props.store}
        />
    </div>

}

export default Profile
