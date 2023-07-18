import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">My Website</a>
      <ul className="navbar-links">
        <li className="navbar-link-item"><a href="#about" className="navbar-link">About</a></li>
        <li className="navbar-link-item"><a href="#services" className="navbar-link">Services</a></li>
        <li className="navbar-link-item"><a href="#portfolio" className="navbar-link">Portfolio</a></li>
        <li className="navbar-link-item"><a href="#contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
