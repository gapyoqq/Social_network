import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostACType, OnPostChangeACType, ProfilePageType} from "./profileReducer";
import dialogsReducer, {AddMessageACType, DialogsPageType, OnMessageChangeACType} from "./dialogsReducer";
import usersReducer, {
    FollowACType,
    SetCurrentPageACType, SetTotalCountACType,
    SetUsersACType, ToggleIsFetchingACType,
    UnFollowACType,
    UsersPageType
} from "./usersReducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}

export type ActionType = AddPostACType | OnPostChangeACType | OnMessageChangeACType | AddMessageACType | UnFollowACType | FollowACType | SetUsersACType | SetCurrentPageACType | SetTotalCountACType | ToggleIsFetchingACType



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>


export type StoreType = typeof store

let store  = createStore(reducers)


export default store
