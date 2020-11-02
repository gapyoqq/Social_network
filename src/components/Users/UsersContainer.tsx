import React from "react"
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import preloaderGif from "../../assets/images/preloader.gif";
import {Preloader} from "../common/Preloader/Preloader";


type PropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null }
            <Users totalCount={this.props.totalCount}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        pageSize={this.props.pageSize}
                        unfollow={this.props.unfollow}
        />
        </>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
