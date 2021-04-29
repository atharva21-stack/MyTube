import React, { useState } from 'react'

import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';
function Header() {
        const [inputsearch , setInputSearch] = useState('');
   
    return (
        
        <div className="header">
            <div className="header_left">
            <MenuIcon/>
            <Link to={'/'}>
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="text">
            </img>
            </Link>
            
            </div>

            <div className="header_input">
            <input onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text"></input>
            
            <Link to={'/search/${inputSearch}'}>
            <SearchIcon className="header_inputButton" />
            </Link>
            
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

export default Header
