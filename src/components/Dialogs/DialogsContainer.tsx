import React from 'react'
import {AddMessageAC, onMessageChangeAC} from "../../redux/dialogsReducer";
import { AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
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
