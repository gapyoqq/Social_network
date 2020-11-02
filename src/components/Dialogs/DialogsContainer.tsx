import React from 'react'
import {addMessage, onMessageChange} from "../../redux/dialogsReducer";
import { AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}





const DialogsContainer = connect(mapStateToProps, {addMessage,onMessageChange})(Dialogs)


export default DialogsContainer
