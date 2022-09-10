import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './planet.png';

function Header() {
  return (
    <header>

      <div className="header_logo">
        <img className="logo" src={logo} alt="logo" />
        <h2>Space Traveler&apos;s Hub</h2>
      </div>
      <nav>
        <li key={1}><NavLink to="/">Rockets</NavLink></li>
        <li key={2}><NavLink to="/Mission">Mission</NavLink></li>
        <li key={3}><NavLink to="/MyProfile">My Profile</NavLink></li>
      
      </nav>
    </header>
  );
}
export default Header;
