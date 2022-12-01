import React from 'react';
import './about.css';
import ME from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { TbUsers } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>

            <article className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1+ Worldwide</small>
            </article>
          </div>
          <div>
            <p>
              My favorite thing in life, the purpose of my life is problem
              solving, in any field not only in programming.
              <br />I think that programming is the best way i know to work in
              what i love the most.
              <br />
            </p>
            <p>
              In my perspective, every person should develop their ability to
              solve problems, so i instill my attitude in everyone around me.
              <br /> I believe that with my attitude and abilities i can be an
              asset to your company.
            </p>
            <p>
              I have a great understanding in the process of develop both client
              and server sides, i'm a dynamic, possessing strong creative
              thinking skills, i know how to work closely with others, i׳m
              dedicated to constantly improving myself to maximize productivity
              and quickly respond to changing.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
