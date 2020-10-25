import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    name: string
    id: number
    photos: string
    status?: null
    followed: boolean
}

export type UsersPageType = {
    users: Array<UserType>
    totalCount?: number
    error?: null
}


let initialState: UsersPageType = {
    users: []
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
