import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../components/Sidebar.css';


function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false)
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* MOBILE HEADER */}
            <div className="mobile-header">
                <div className="floating-logo">
                    <img src="/assets/shared/logo.svg" alt="Logo" />
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
            </div>

            {/* Desktop Sidebar */}
            <div className="sidebar">
                <div className="floating-logo">
                    <img src="/assets/shared/logo.svg" alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}><span>00</span> Home</NavLink></li>
                        <li><NavLink to="/destination" className={({ isActive }) => isActive ? "active" : ""}><span>01</span> Destination</NavLink></li>
                        <li><NavLink to="/crew" className={({ isActive }) => isActive ? "active" : ""}><span>02</span> Crew</NavLink></li>
                        <li><NavLink to="/technology" className={({ isActive }) => isActive ? "active" : ""}><span>03</span> Technology</NavLink></li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu" ref={menuRef}>
                    <NavLink to="/" onClick={() => { setIsMobileMenuOpen(false);  navigate("/"); }}><span>00</span> Home</NavLink>
                    <NavLink to="/destination" onClick={toggleMenu}><span>01</span> Destination</NavLink>
                    <NavLink to="/crew" onClick={toggleMenu}><span>02</span> Crew</NavLink>
                    <NavLink to="/technology" onClick={toggleMenu}><span>03</span> Technology</NavLink>
                </div>
            )}
        </>
    );
}

export default Sidebar;