import classes from "../Dialogs.module.css";
import React from "react";

type MessageItemType = {
    message: string
    id: number
}

export function MessageItem(props: MessageItemType) {
    return <div className={classes.dialog}>{props.message}</div>
}
