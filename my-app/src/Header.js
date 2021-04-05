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
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="text">
            
            </img>
            </div>

            <div className="header_input">
            <input placeholder="Search" type="text"></input>
            <SearchIcon className="header_inputButton" />
            </div>
            
            <div>
            <VideoCallIcon className="header_icon"/>      
            <AppsIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <Avatar
                    alt="Remy Sharp"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fatharva21-stack&psig=AOvVaw26d-GDnttvPe8hrSRdZMcS&ust=1617548242708000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi83vWq4u8CFQAAAAAdAAAAABAD"
            
            />
            </div>
            
           
            
        </div>
    )
}

export default header
