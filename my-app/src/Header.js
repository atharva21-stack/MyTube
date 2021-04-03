import React from 'react'
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
function header() {
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon/>
            <img className="header_logo" src="https://en.wikipedia.org/wiki/File:Logo_of_YouTube_(2015-2017).svg">
            alt=""
            </img>
            </div>

            <div className="header_input">
            <input type="text"></input>
            <SearchIcon/>
            </div>
            
            <div>
            <VideoCallIcon/>      
            <AppsIcon/>
            <NotificationsIcon/>
            <Avatar
                    alt="Remy Sharp"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fatharva21-stack&psig=AOvVaw26d-GDnttvPe8hrSRdZMcS&ust=1617548242708000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi83vWq4u8CFQAAAAAdAAAAABAD"
            </div>
            
           
            
        </div>
    )
}

export default header
