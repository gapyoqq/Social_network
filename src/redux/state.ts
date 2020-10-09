export type PostsDataType = {
    id: number
    likesCount: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
}
type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}




export let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, likesCount: 13, message: 'Hi, how are you?'},
                {id: 2, likesCount: 15, message: 'Love you)'},
                {id: 3, likesCount: 11, message: 'Np'}
            ],
            newPostText: ''
        },
        messagesPage: {
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
            ]
        }
    },
    _callSubscriber() {

    },
    addPostCallback() {
        let newPost: PostsDataType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 10
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
       this._callSubscriber()
    },
    subscribe(observer: () => void) {
       this._callSubscriber = observer
    },
    getState() {
        return this._state
    }

}







