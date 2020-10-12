import React from 'react'
import {AddMessageAC, onMessageChangeAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


type PropsType = {
    store: StoreType
}


function DialogsContainer(props: PropsType) {

    let state = props.store.getState()

    const onMessageChange = (text: string) => {
        props.store.dispatch(onMessageChangeAC(text))
    }


    const addMessage = () => {
        props.store.dispatch(AddMessageAC())
    }

    return <Dialogs dialogsData={state.dialogsPage.dialogsData}
                    messagesData={state.dialogsPage.messagesData}
                    newMessageText={state.dialogsPage.newMessageText}
                    addMessage={addMessage}
                    onMessageChange={onMessageChange}

    />
}


export default DialogsContainer
