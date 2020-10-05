import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../redux/state";

type PropsType = {
    postsData: PostsDataType[]
}


function Profile(props:PropsType) {
    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>
    </div>

}

export default Profile
