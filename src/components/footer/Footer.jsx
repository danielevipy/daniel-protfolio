import React from 'react';
import './footer.css';
import Socials from '../socials/Socials';

const Footer = () => {
  return (
    <footer>
      <a href="/index.html" className="footer__logo">
        Daniel Levi
      </a>

      <ul className="footer__links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Socials class_style={'footer__socials'} icon_style={'social_icon'} />

      <div className="footer_copyright">
        <small>&copy; Daniel Levi 2022 - all rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
