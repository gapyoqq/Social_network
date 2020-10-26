import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogsReducer";


type PropsType = {
    dialogsPage: DialogsPageType
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
            {props.dialogsPage.dialogsData.map(d => <DialogItem id={d.id}
                                                                key={d.id}
                                                                name={d.name}/>)
            }
        </div>
        <div className={classes.messagesItems}>
            {props.dialogsPage.messagesData.map(m => <MessageItem message={m.message}
                                                                  key={m.id}
                                                                  id={m.id}/>)}
        </div>
        <div>
            <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
            <button onClick={addMessage}>Send</button>
        </div>
    </div>
}


export default Dialogs
