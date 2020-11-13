import {combineReducers, createStore} from "redux";
import profileReducer, {
    AddPostACType,
    OnPostChangeACType,
    ProfilePageType,
    SetUserProfileACType
} from "./profileReducer";
import dialogsReducer, {AddMessageACType, DialogsPageType, OnMessageChangeACType} from "./dialogsReducer";
import usersReducer, {
    FollowACType,
    SetCurrentPageACType, SetTotalCountACType,
    SetUsersACType, ToggleIsFetchingACType,
    UnFollowACType,
    UsersPageType
} from "./usersReducer";
import {authReducer, SetUserDataType} from "./auth-reducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}

export type ActionType =
    SetUserProfileACType
    | AddPostACType
    | OnPostChangeACType
    | OnMessageChangeACType
    | AddMessageACType
    | UnFollowACType
    | FollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalCountACType
    | ToggleIsFetchingACType
    | SetUserDataType


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    /*auth: authReducer*/
})

export type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>


export type StoreType = typeof store

let store = createStore(reducers)


export default store
