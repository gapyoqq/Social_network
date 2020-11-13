import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {DataAuthType} from "../../redux/auth-reducer";

function Header(props: DataAuthType) {
    return <header className={classes.header}><img alt='image'
                                                   src='https://www.clipartmax.com/png/full/398-3982481_pop-vk-vkontakte-icon-icon-pop-vk-vkontakte-icon-icon.png'/>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header
