import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsPropsType = {}

type DialogItemPropsType = {
    name: string
    id: number
}
type MessageItemType = {
    message: string
}

function DialogItem(props: DialogItemPropsType) {
    return <div className={classes.dialog}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}
function MessageItem(props:MessageItemType) {
return <div className={classes.dialog}>{props.message}</div>
}

function Dialogs(props: DialogsPropsType) {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <DialogItem id={1} name={'Andrew'}/>
            <DialogItem id={2} name={'Svetlana'}/>
            <DialogItem id={3} name={'Kon'}/>
            <DialogItem id={4} name={'Andrew'}/>
            <DialogItem id={5} name={'Maxim'}/>
        </div>
        <div className={classes.messagesItems}>
            <MessageItem message={'Hi, how are you?'}/>
            <MessageItem message={'You too'}/>
            <MessageItem message={'no problem'}/>
        </div>
    </div>
}


export default Dialogs
