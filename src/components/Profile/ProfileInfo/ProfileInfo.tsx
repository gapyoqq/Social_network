import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {
    profile: ProfileType
}


export function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <div>
            <Preloader/>
        </div>
    }
    return <div>
        <div>
            <img className={classes.img}
                 src='https://funart.pro/uploads/posts/2020-04/1587637095_8-p-temno-serie-foni-34.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.small}/>
            ava+description
        </div>
    </div>
}
