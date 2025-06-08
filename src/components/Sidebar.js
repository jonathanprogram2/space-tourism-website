import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/shared/logo.svg';


function Sidebar() {
    return (
        <>
            <div className="floating-logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="sidebar">
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}><span>00</span> Home</NavLink></li>
                        <li><NavLink to="/destination" className={({ isActive }) => isActive ? "active" : ""}><span>01</span> Destination</NavLink></li>
                        <li><NavLink to="/crew" className={({ isActive }) => isActive ? "active" : ""}><span>02</span> Crew</NavLink></li>
                        <li><NavLink to="/technology" className={({ isActive }) => isActive ? "active" : ""}><span>03</span> Technology</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;