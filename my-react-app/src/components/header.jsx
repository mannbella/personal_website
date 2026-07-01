import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../header.css";

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo-container">
                <Link to="/" className="logo-text">Isabella Mann</Link>
            </div>
        
            <nav className="nav-links">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/leadership">Leadership</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>

            <div className="header-actions">
                <button className="night-mode-toggle" aria-label="Toggle Night Mode">
                    N
                </button>
                <Link to="/contact" className="btns-lets-talk">Let's Talk</Link>
            </div>
        </header>   
    );
};

export default Header;