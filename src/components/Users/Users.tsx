import React from "react"
import {UsersPageType, UserType} from "../../redux/usersReducer";
import styles from './users.module.css'
import axios from 'axios'
import userPhoto from '../..//assets/images/Avatar.jpg'

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
}


const Users = React.memo(
    class Users extends React.Component<PropsType> {
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
        }

        onPageChanged = (currentPage: number) => {
            this.props.setCurrentPage(currentPage)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            })
        }

        render() {

            let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
            let pages = []
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }

            return <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={() => {
                            this.onPageChanged(p)
                        }}
                                     className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
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
    })


export default Users
