import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";



type DialogItemPropsType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemPropsType) {
    return <div className={classes.dialog}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}
