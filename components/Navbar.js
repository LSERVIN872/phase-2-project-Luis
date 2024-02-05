import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
      <nav className="navbar">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/gifts">Gifts</NavLink>
        <NavLink to= "schedule">Schedule</NavLink>
      </nav>
    );
  }
  
  export default NavBar