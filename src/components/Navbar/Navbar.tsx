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
            <NavLink to='/profile' activeClassName={classes.active}><HomeIcon/>Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/dialogs' activeClassName={classes.active}><MessageIcon/>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' activeClassName={classes.active}><ChromeReaderModeIcon/>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' activeClassName={classes.active}><PlaylistPlayIcon/> Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.active}><SettingsIcon/> Settings</NavLink>
        </div>
    </nav>
}

export default Navbar
