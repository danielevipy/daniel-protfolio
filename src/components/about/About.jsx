import React from 'react';
import './about.css';
import ME from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

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
              <GiBrain className="about__icon" />
              <h5>Logical & Creative Thinking</h5>
              <small>
                Skills to objectively study any problem and find the appropriate
                solution.
              </small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                I have comprehensive knowledge and an in-depth understanding of
                development concepts, ideas and technologies.
              </small>
            </article>

            <article className="about__card">
              <FaBookReader className="about__icon" />
              <h5>Self Learning</h5>
              <small>
                I know how to concentrate, separate the wheat from the chaff, i
                have positive self-criticism and a desire for self-development.
              </small>
            </article>
          </div>
          <div>
            <p>
              My favorite thing in life, the purpose of my life is problem
              solving, in any field not only in programming.
              <br />I think that programming is the most efficient way i know to
              work in what i love.
              <br />
              For me, programming is personal development.
            </p>
            <p>
              In my perspective, every person should develop their ability to
              solve problems, to learn the process of finding solutions, so i
              instill my attitude in everyone around me.
              <br /> I believe that with my attitude and abilities i can be an
              asset to your company.
            </p>
            <p>
              I have a great understanding in the process of develop both client
              and server sides, I have an in-depth understanding of development
              concepts, ideas and technologies, i'm a dynamic, possessing strong
              creative thinking skills, i know how to work closely with others,
              to listen and understand the needs of those around me, i׳m
              dedicated to constantly improving myself, maximize my productivity
              and quickly respond to changes.
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
