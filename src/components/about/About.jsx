import React from 'react';
import './about.css';
import ME from '../../assets/about-me.jpeg';
import { FaAward } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__cards">
        <article className="about__card">
          <FaBookReader className="about__icon" />
          <h5>My Knowledge</h5>
          <small>
            In depth understanding of development concepts, ideas and
            technologies.
          </small>
        </article>
        <article className="about__card">
          <GiBrain className="about__icon" />
          <h5>My Logical & Creative Thinking</h5>
          <small>Skills to study any problem and find the solution.</small>
        </article>
        <article className="about__card">
          <FaAward className="about__icon" />
          <h5>My Personality</h5>
          <small>
            Loyalty and integrity are the cornerstones of my personal and
            professional ethos.
          </small>
        </article>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>
        <div className="about__content">
          <div>
            <p>
              As an aspiring developer with a strong foundation in computer
              science fundamentals, <br />I am passionately committed to a
              career in software development.
              <br />I am known for my ability to learn quickly and
              independently, i have got a growth mindset that drives me to
              continuously seek self improvement.
              <br /> My curiosity and willingness to experiment have often led
              me to innovative solutions.
              <br />
              As a team player with strong interpersonal and communication
              skills, I excel in collaborative environments, where I can share
              ideas and contribute to business growth.
              <br />
              My creativity, reliability, and effective task management skills
              are complemented by my ability to define scopes, manage risks,
              changes and oversee projects.
              <br />I am not daunted by challenges; rather, I am highly
              motivated and adept at problem solving.
              <br />
              I am firmly convinced that each challenge I overcome not only
              contributes to my personal development but also molds me into a
              better version of myself.
              <br />
              My decision making ability, commitment, and sense of
              responsibility are key strengths that I bring to any team.
              <br />I am open minded and value the importance of giving and
              receiving feedback respectfully.
              <br />
              This open mindedness, combined with my technical skills and
              eagerness to contribute to a dynamic organization, positions me
              well for a rewarding career in development.
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
