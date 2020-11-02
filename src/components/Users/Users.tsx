import styles from "./users.module.css";
import userPhoto from "../../assets/images/Avatar.jpg";
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

export function Users(props: PropsType) {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                    className={props.currentPage === p ? styles.selectedPage : ''}>{p}
                        </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to = {`/profile/${u.id}`} >
                            <img className={styles.usersPhoto}
                                      src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
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
