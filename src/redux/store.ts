import profileReducer, {PostsDataType, ProfilePageType} from "./profileReducer";
import dialogsReducer, {DialogsPageType, MessagesDataType} from "./dialogsReducer";



export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
    _addPost: () => void
    _addMessage: () => void
    _updateNewPostText: (newText: string) => void
    _updateNewMessageText: (newMessageText: string) => void

}



export type AddPostACType = {
    type: 'ADD-POST'
}
export type OnPostChangeACType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type AddMessageACType = {
    type: 'ADD-MESSAGE'
}
export type OnMessageChangeACType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}

export type ActionType = AddPostACType | OnPostChangeACType | OnMessageChangeACType | AddMessageACType



let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, likesCount: 13, message: 'Hi, how are you?'},
                {id: 2, likesCount: 15, message: 'Love you)'},
                {id: 3, likesCount: 11, message: 'Np'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
    },
    _addPost() {
        let newPost: PostsDataType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 10
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    _updateNewMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText
        this._callSubscriber()
    },
    _addMessage() {
        let newMessage: MessagesDataType = {
            id: 1,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}










