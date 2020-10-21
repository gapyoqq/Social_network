import React from 'react'
import {AddMessageAC, onMessageChangeAC} from "../../redux/dialogsReducer";
import {ActionType, AppStateType, RootStateType, StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


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


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}



let mapDispatchToProps = (dispatch:Dispatch) => {
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
