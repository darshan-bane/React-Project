import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
        <NavLink to="/">
            <img src="./images/logo.jpg"></img>
        </NavLink>
        </div>
    
    );
};

export default Header;