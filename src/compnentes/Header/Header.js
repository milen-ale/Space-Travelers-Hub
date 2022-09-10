import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './planet.png';

function Header() {
  return (
    <header className="shadow-md px-4 md:py-2 pt-2">
      <div className="header_logo">
        <img className="logo" src={logo} alt="logo" />
        <h2>Space Traveler&apos;s Hub</h2>
      </div>
      <nav>
        <li key={1}><NavLink to="/">Rockets</NavLink></li>
        <li key={3}><NavLink to="/Mission">Mission</NavLink></li>
        <li key={4}><NavLink to="/My Profile">My Profile</NavLink></li>
      </nav>
    </header>
  );
}
export default Header;
