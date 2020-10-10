import {ActionType, AddMessageACType, OnMessageChangeACType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string

}
export type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessageText: string
}


export const AddMessageAC = (): AddMessageACType => ({type: 'ADD-MESSAGE'})
export const onMessageChangeAC = (newMessageText: string): OnMessageChangeACType => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: newMessageText

})


let initialState:DialogsPageType = {
    dialogsData: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Petr'},
        {id: 5, name: 'Maxim'}
    ],
    messagesData: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'Love you)'},
        {id: 3, message: 'Np'}
    ],
    newMessageText: ''
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {

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
