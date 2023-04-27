import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">DanieLevi</span>
      <div className={`nav-items ${isOpen && 'open'}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
