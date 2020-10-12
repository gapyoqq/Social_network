import React from 'react'
import {AddMessageAC, onMessageChangeAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/store";


type PropsType = {
    store: StoreType
}


/*function DialogsContainer(props: PropsType) {

    let state = props.store.getState()

    const onMessageChange = (text: string) => {
        props.store.dispatch(onMessageChangeAC(text))
    }


    const addMessage = () => {
        props.store.dispatch(AddMessageAC())
    }

    return <Dialogs dialogsPage={state.dialogsPage}
                    addMessage={addMessage}
                    onMessageChange={onMessageChange}

    />
}*/


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}



let mapDispatchToProps = (dispatch:any) => {
    return {
        addMessage: () => {
            dispatch(AddMessageAC())
        },
        onMessageChange: (text: string) => {
           dispatch(onMessageChangeAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer
