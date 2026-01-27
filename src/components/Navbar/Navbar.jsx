import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -90;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">DanieLevi</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("portfolio");
          }}
        >
          Portfolio
        </a>
        <a
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("experience");
          }}
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
