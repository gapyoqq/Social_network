import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/dialogsReducer";


type PropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType []
    newMessageText: string
    onMessageChange: (text: string) => void
    addMessage: () => void
}


function Dialogs(props: PropsType) {


    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = e.currentTarget.value
        if (newMessageText) {
            props.onMessageChange(newMessageText)
        }
    }

    const addMessage = () => {
        props.addMessage()
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
            }
        </div>
        <div className={classes.messagesItems}>
            {props.messagesData.map(m => <MessageItem message={m.message} id={m.id}/>)}
        </div>
        <div>
            <textarea value={props.newMessageText} onChange={onMessageChange}/>
            <button onClick={addMessage}>Send</button>
        </div>
    </div>
}


export default Dialogs
