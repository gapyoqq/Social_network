import React from "react";
import classes from './ProfileInfo.module.css'

export function ProfileInfo() {
    return <div>
        <div>
            <img src='https://funart.pro/uploads/posts/2020-04/1587637095_8-p-temno-serie-foni-34.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            ava+description
        </div>
    </div>
}
