import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import MERN from '../../assets/mern.png';

import Socials from '../socials/Socials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Daniel Levi</h1>
        <h5 className="text-gray">Professional JavaScript developer</h5>
        <h5 className="text-gray">Full-Stack engineer</h5>

        <CTA />
        <div className="container">
          <div className="rows">
            <div className="row r1">
              <Socials
                class_style={'header__socials'}
                icon_style={'social_icon_header'}
              />
            </div>
            <div className="row r2">
              <img className="me_img" src={ME} alt="Me"></img>
            </div>

            <div className="row r3">
              <a href="#contact" className="scroll__down">
                Scroll Down
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.mongodb.com/mern-stack"
          target="_blank"
          rel="noreferrer"
        >
          <img className="mern_img" src={MERN} alt="Me"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
