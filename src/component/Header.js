import React from "react";
import { NavLink } from "react-router-dom";
import Nav from './Nav'

const Header = () => {
    return (
        <div className="Header">
        <NavLink to="/">
            <img src="./images/logo.jpg"></img>
        </NavLink>
        <Nav />
        </div>
    
    );
};

export default Header;