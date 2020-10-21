import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostACType, OnPostChangeACType, ProfilePageType} from "./profileReducer";
import dialogsReducer, {AddMessageACType, DialogsPageType, OnMessageChangeACType} from "./dialogsReducer";
import usersReducer, {FollowACType, SetUsersACType, UnFollowACType, UsersPageType} from "./usersReducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    userPage: UsersPageType
}

export type ActionType = AddPostACType | OnPostChangeACType | OnMessageChangeACType | AddMessageACType | UnFollowACType | FollowACType | SetUsersACType



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type RooTReducerType = typeof reducers
export type AppStateType = ReturnType<RooTReducerType>




export type StoreType = typeof store

let store  = createStore(reducers)


export default store
