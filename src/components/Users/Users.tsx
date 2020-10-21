import React from "react"
import {AppStateType, RootStateType} from "../../redux/redux-store";
import {UsersPageType, UserType} from "../../redux/usersReducer";
import styles from './users.module.css'


type PropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersPageType) => void
}

function Users(props: PropsType) {
    props.setUsers()
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={u.photoUrl}/>
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
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                    <div>
                        {u.location.country}
                        {u.location.city}
                    </div><div></div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}


export default Users
