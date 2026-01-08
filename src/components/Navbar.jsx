// Navbar.jsx
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../components/styles/navbar.css"
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";



const Navbar = ({ setActiveSection, activeSection }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {theme, toggleTheme} = useTheme();

    const handleSectionNav = (hash) => (e) => {
        e.preventDefault();
        window.location.hash = hash;

        setActiveSection(hash.replace('#', "").toLowerCase());
        if (location.pathname === "/") {
            navigate(`/#${hash.replace("#", '')}`)
        } else {
            navigate("/#" + hash.replace("#", ""));
        }
    };

    return (
        <header className="header">
        <div className="container header-container">
            {/* Logo */}
            <h1 className="secondary-color">
                <span className="name-color">Aniket</span> Narayan
            </h1>

            {/* Navigation Links */}
            <nav className="main-nav">
                    {theme === 'dark' ? (
                        <FaMoon className="theme-toggle" onClick={toggleTheme} />
                    ) : (
                        <FaSun className="theme-toggle" onClick={toggleTheme} />
                    )}
                    
                {["Home", "About", "Experience", "Projects", "Contact"].map((link, index) => (
                    <a
                        href={`#${link.toLowerCase()}`}
                        key={index}
                        className={`nav-link secondary-color ${activeSection === link.toLowerCase() ? "active-link" : ""}`}
                        // className=" nav-link secondary-color active"
                        onClick={handleSectionNav(`#${link.toLowerCase()}`)}
                    >
                        {link}
                    </a>
                ))}
            </nav>

            {/* Theme Toggle */}
            </div>
        </header>
    );
};

export default Navbar;
