import React from "react"
import {AppStateType, RootStateType} from "../../redux/redux-store";
import {UsersPageType, UserType} from "../../redux/usersReducer";
import styles from './users.module.css'
import axios from 'axios'
import userPhoto from '../..//assets/images/Avatar.jpg'

type PropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (response: UsersPageType) => void
}



const Users = React.memo(
    class Users extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={userPhoto}/>
                    </div>
                    {u.followed ?
                        <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>UnFollow</button> :
                        <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}

                </span>
                        <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                    <div>
                        {'u.location.country'}
                    </div><div></div>
                    </span>
                </span>
                    </div>
                )
            }
        </div>
    }
    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }
})

export default Users
