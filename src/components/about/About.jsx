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
          <GiBrain className="about__icon" />
          <h5>Logical & Creative Thinking</h5>
          <small>Skills to study any problem and find the solution.</small>
        </article>
        <article className="about__card">
          <FaAward className="about__icon" />
          <h5>Experience</h5>
          <small>
            In-depth understanding of development concepts, ideas and
            technologies.
          </small>
        </article>

        <article className="about__card">
          <FaBookReader className="about__icon" />
          <h5>Self Learning</h5>
          <small>
            Positive self-criticism and a desire for self-development.
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
            <h2>My Journey in Programming</h2>
            <p>
              At the core of my being lies an insatiable passion for problem
              solving. <br /> Whether it's in programming or any other domain,
              unraveling complexities and finding solutions energizes me. <br />{' '}
              I've found programming to be an incredibly efficient avenue for
              this pursuit, blending my love for challenges with tangible
              outcomes.
            </p>
            <p>
              Programming, to me, is more than a profession, it's a journey of
              personal growth. <br /> I firmly believe in the power of problem
              solving skills, not just as a technical ability, but as a life
              skill. <br /> This belief drives me to inspire and instill a
              similar mindset in everyone around me.
            </p>
            <p>
              As a programmer, I bring more than just technical expertise.
              <br /> My comprehensive understanding of programming consepts,
              coupled with a deep grasp of development principles and
              technologies, positions me uniquely.
              <br /> I'm dynamic, creatively inclined, and excel in
              collaborative environments. <br /> My strong listening skills
              enable me to truly understand and align with the needs of my
              colleagues and projects.
            </p>

            <p>
              I'm committed to continuous self improvement, adapting swiftly to
              new challenges, and maximizing productivity. <br /> I believe that
              my attitude, skills, and approach to problem solving can be a
              significant asset to any company.
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
