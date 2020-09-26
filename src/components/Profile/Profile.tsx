import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div> MainContent
        <div>
            <img src='https://funart.pro/uploads/posts/2020-04/1587637095_8-p-temno-serie-foni-34.jpg'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile
