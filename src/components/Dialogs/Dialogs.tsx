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
    id: number
}


function DialogItem(props: DialogItemPropsType) {
    return <div className={classes.dialog}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}

function MessageItem(props: MessageItemType) {
    return <div className={classes.dialog}>{props.message}</div>
}

function Dialogs(props: DialogsPropsType) {

    let dialogsData = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Petr'},
        {id: 5, name: 'Maxim'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'Love you)'},
        {id: 3, message: 'Np'},

    ]


    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
            }
        </div>
        <div className={classes.messagesItems}>
            {messagesData.map(m => <MessageItem message={m.message} id={m.id}/>)}
            </div>
            </div>
            }


            export default Dialogs
