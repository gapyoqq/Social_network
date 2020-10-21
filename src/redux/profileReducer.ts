import {ActionType} from "./redux-store";

export type PostsDataType = {
    id: number
    likesCount: number
    message: string
}
export type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type AddPostACType = {
    type: 'ADD-POST'
}
export type OnPostChangeACType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export const AddPostAC = (): AddPostACType => ({type: 'ADD-POST'})
export const onPostChangeAC = (newText: string): OnPostChangeACType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
})



let initialState: ProfilePageType = {
    postsData: [
        {id: 1, likesCount: 13, message: 'Hi, how are you?'},
        {id: 2, likesCount: 15, message: 'Love you)'},
        {id: 3, likesCount: 11, message: 'Np'}
    ],
    newPostText: ''

}



const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {


    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 10
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        default:
            return state
    }
}


export default profileReducer
