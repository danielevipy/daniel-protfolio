import React from 'react';
import '../skills/skills.css';
import { ImCheckmark2 } from 'react-icons/im';
const Skills = () => {
  return (
    <section id="skills">
      <h5>Some of the technologies I've been working with lately</h5>
      <h2>Skills Overview</h2>

      <div className="container skills__container">
        <article className="skills">
          <div className="skills__head">
            <h3>BackEnd</h3>
          </div>
          <ul className="skills__list">
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Node JS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Express JS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>SQL</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>MongoDB</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Mongoose</p>
            </li>
          </ul>
        </article>
        {/* END OF BackEnd */}
        <article className="skills">
          <div className="skills__head">
            <h3>FrontEnd</h3>
          </div>
          <ul className="skills__list">
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>React JS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Vite JS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Next JS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>React Hooks</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Redux, react-redux, redux toolkit</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Zustand</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Three JS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>HTML Canvas Graphics</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Material UI</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>React-Bootstrap</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Styled-Components</p>
            </li>
          </ul>
        </article>
        {/* END OF FrontEnd */}
        <article className="skills">
          <div className="skills__head">
            <h3>Fundamentals, APIs & Frameworks</h3>
          </div>
          <ul className="skills__list">
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Data structures & Algorithms</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Asynchronous programming</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Big O</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>OOP</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Design Pattern</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>MVC</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Docker</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Git</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>AWS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Heroku</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Jest & Error handling</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Web API</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>DOM</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Fetch API</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Axios</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>REST API</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>JSON</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Api */}
      </div>
    </section>
  );
};

export default Skills;
