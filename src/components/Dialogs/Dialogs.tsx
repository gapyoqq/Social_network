import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {DialogsDataType} from "../../index";


type DialogsPropsType = {
    dialogsData: DialogsDataType[]
}




function Dialogs(props: DialogsPropsType) {




    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
            }
        </div>
        <div className={classes.messagesItems}>
            {props.messagesData.map(m => <MessageItem message={m.message} id={m.id}/>)}
            </div>
            </div>
            }


            export default Dialogs
