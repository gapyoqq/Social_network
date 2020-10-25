import React from "react"
import {connect} from "react-redux";
import {AppStateType, RootStateType, StoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPageType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import Users from "./Users";

let mapStateToProps = (state:AppStateType) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
       follow: (userId: number) => {
           dispatch(followAC(userId))
       },
        unfollow: (userId: number) => {
           dispatch(unfollowAC(userId))
       },
        setUsers: (users:UsersPageType) => {
           dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
