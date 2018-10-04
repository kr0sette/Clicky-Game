import React from "react";

const NavBar = () => (
    <div className="navbar">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="google.com">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="google.com">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="google.com">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="google.com">Disabled</a>
            </li>
        </ul>  
    </div>
);


export default NavBar;