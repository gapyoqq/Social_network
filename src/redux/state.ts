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
type ProfilePageType = {
    postsData: PostsDataType[]
}
type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}


export let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, likesCount: 13, message: 'Hi, how are you?'},
            {id: 2, likesCount: 15, message: 'Love you)'},
            {id: 3, likesCount: 11, message: 'Np'}
        ]
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
}


export let addPost = (postMessage:string) => {
    let newPost: PostsDataType = {
        id: 5,
        message: postMessage,
        likesCount: 10
    }
    state.profilePage.postsData.push(newPost)
}