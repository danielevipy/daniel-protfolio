import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpeg';
import LANG_IMG from '../../assets/python_js.jpeg';

import Socials from '../socials/Socials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Daniel Levi</h1>
        <h3 className="text-gray">Backend Developer</h3>

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
          <img className="lang_img" src={LANG_IMG} alt="Me"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
