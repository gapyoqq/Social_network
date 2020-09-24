import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import SettingsIcon from "@material-ui/icons/Settings";
import classes from './Navbar.module.css'

function Navbar() {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <a href=''><HomeIcon/>Profile</a>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <a href=''><MessageIcon/>Messages</a>
        </div>
        <div>
            <a href=''><ChromeReaderModeIcon/>News</a>
        </div>
        <div>
            <a href=''><PlaylistPlayIcon/> Music</a>
        </div>
        <div>
            <a href=''><SettingsIcon/> Settings</a>
        </div>
    </nav>
}

export default Navbar
