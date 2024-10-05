import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const TopNavigationBar = () => {
    return (
        <nav className="nav-container">
            <div className="nav-logo">DEV@Deakin</div>
            <input 
                type="text"
                className="nav-search"
                placeholder="Search"
            />
            <div className="nav-actions">
                <button className="nav-post-btn">Post</button>
                <Link to="/login">
                    <button className="nav-login-btn">Log In</button>
                </Link>
            </div>
        </nav>
    );
}

export default TopNavigationBar;
