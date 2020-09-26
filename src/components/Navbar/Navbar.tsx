import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import SettingsIcon from "@material-ui/icons/Settings";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile'><HomeIcon/>Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/dialogs'><MessageIcon/>Messages</NavLink>
        </div>
        <div>
            <NavLink to='/news'><ChromeReaderModeIcon/>News</NavLink>
        </div>
        <div>
            <NavLink to='/music'><PlaylistPlayIcon/> Music</NavLink>
        </div>
        <div>
            <NavLink to='/settings'><SettingsIcon/> Settings</NavLink>
        </div>
    </nav>
}

export default Navbar
