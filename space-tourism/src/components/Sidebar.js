import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li><a href="#"><span>00</span> Home</a></li>
                    <li><a href="#"><span>01</span> Destination</a></li>
                    <li><a href="#"><span>02</span> Crew</a></li>
                    <li><a href="#"><span>03</span> Technology</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;