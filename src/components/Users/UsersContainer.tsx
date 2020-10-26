import React from "react"
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import Users from "./Users";

let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        setUsers: (users: Array<UserType>) => {
           dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
           dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
           dispatch(setTotalCountAC(totalCount))
        }

    }
}

const UsersContainer = React.memo( connect(mapStateToProps, mapDispatchToProps)(Users))

export default UsersContainer
