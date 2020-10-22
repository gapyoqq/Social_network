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
    setUsers: (response: any) => void
}

function Users(props: PropsType) {


    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })

        return <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={u.photos.small != null? u.photos.small : userPhoto}/>
                    </div>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UnFollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
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
}

export default Users



