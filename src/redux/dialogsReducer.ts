import {AddMessageACType, MessagesDataType, OnMessageChangeACType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const AddMessageAC = (): AddMessageACType => ({type: 'ADD-MESSAGE'})
export const onMessageChangeAC = (newMessageText: string): OnMessageChangeACType => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: newMessageText

})



export const dialogsReducer = (state: any, action: any) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        case ADD_MESSAGE:
            let newMessage: MessagesDataType = {
                id: 1,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export default dialogsReducer
