import {ActionType} from "./redux-store";

export type PostsDataType = {
    id: number
    likesCount: number
    message: string
}
export type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string,
    profile: ProfileType
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
export type SetUserProfileACType = {
    type: 'SET-USERS-PROFILE',
    profile: ProfileType
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string,
        large: string
    }
}

export const addPost = (): AddPostACType => ({type: 'ADD-POST'})
export const onPostChange = (newText: string): OnPostChangeACType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
})
export const setUserProfile = (profile: ProfileType): SetUserProfileACType => ({type: 'SET-USERS-PROFILE', profile})


let initialState: ProfilePageType = {
    postsData: [
        {id: 1, likesCount: 13, message: 'Hi, how are you?'},
        {id: 2, likesCount: 15, message: 'Love you)'},
        {id: 3, likesCount: 11, message: 'Np'}
    ],
    newPostText: '',
    profile: {
        userId: 1,
        contacts: {facebook: 's', github: 'b', instagram: 'b', mainLink: 'b', twitter: 'b', website: 'b', youtube: 'b'},
        fullName: 'b',
        lookingForAJob: true,
        lookingForAJobDescription: 'no',
        photos: {large: '1', small: 'b'}
    },
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
        case "SET-USERS-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}


export default profileReducer
