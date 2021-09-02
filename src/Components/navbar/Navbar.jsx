import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt="netflix logo"
                    />
                    <span>Home Page</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My Lists</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span> kid </span>
                    <NotificationsIcon className="icon"/>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeah0RykjjydWZ1E_EDdNITYsZvY5T5iNnVKt0u8qhHnMPP7fLsBtiDRxVwq4zz5j_-Y&usqp=CAU"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon"/>  
                        <div className="options">
                            <span> Settings </span>
                            <span> Log Out </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;