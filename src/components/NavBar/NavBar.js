import React from "react";
import "./NavBar.css";

const NavBar = () => (
    <div className="navbar">
        <ul className="nav justify-content-center">
            <li className="nav-item" id="left">
                Clicky Game
            </li>
            <li className="nav-item" id="center">
                Status
            </li>
            <li className="nav-item" id="right">
                Score
            </li>
        </ul>  
    </div>
);


export default NavBar;