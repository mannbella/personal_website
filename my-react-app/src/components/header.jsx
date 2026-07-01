import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        {/* NavLink automatically applies an "active" class when the URL matches */}
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;