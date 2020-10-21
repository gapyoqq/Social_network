import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    fullName: string
    status: string
    location: LocationType
    followed: boolean
    photoUrl: string

}
export type UsersPageType = {
    users: Array<UserType>
}


let initialState: UsersPageType = {
    users: [
        {
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxHW0JNoujLdX5JIJgkQYQw6XQ1cDEC9dBVQ&usqp=CAU',
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'Im a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxHW0JNoujLdX5JIJgkQYQw6XQ1cDEC9dBVQ&usqp=CAU',
            id: 2,
            followed: true,
            fullName: 'Sasha',
            status: 'Im a student',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxHW0JNoujLdX5JIJgkQYQw6XQ1cDEC9dBVQ&usqp=CAU',
            id: 3,
            followed: false,
            fullName: 'Maxim',
            status: 'Im a teacher',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ]

}

const usersReducer = (state: UsersPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS": {
            return {...state, users: [{...state, ...action.users}]}
        }
        default:
            return state
    }
}

export type FollowACType = {
    type: 'FOLLOW'
    userId: number
}
export type UnFollowACType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetUsersACType = {
    type: 'SET-USERS'
    users: UsersPageType
}

export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId: userId})
export const unfollowAC = (userId: number): UnFollowACType => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users: UsersPageType): SetUsersACType => ({type: SET_USERS, users: users})


export default usersReducer
