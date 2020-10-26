import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string | null
    large: string | null

}

export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status?: null
    followed: boolean
}

export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    error?: null
    pageSize: number
    currentPage: number
}


let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 3
}

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-COUNT": {
            return {
                ...state,
                totalCount: action.totalCount
            }
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
    users: Array<UserType>
}
export type SetCurrentPageACType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type SetTotalCountACType = {
    type: 'SET-TOTAL-COUNT'
    totalCount: number
}


export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnFollowACType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalCountAC = (totalCount: number): SetTotalCountACType =>
    ({type: 'SET-TOTAL-COUNT', totalCount})


export default usersReducer
