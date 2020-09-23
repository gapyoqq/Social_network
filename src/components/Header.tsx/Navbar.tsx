import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import SettingsIcon from "@material-ui/icons/Settings";

function Navbar() {
    return <nav className='nav'>
        <div>
            <a href=''><HomeIcon/>Profile</a>
        </div>
        <div>
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
