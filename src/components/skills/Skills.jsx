import React from 'react';
import '../skills/skills.css';
import { ImCheckmark2 } from 'react-icons/im';
const Skills = () => {
  return (
    <section id="skills">
      <h5>Technologies, fundamentals, frameworks & APIs I work with</h5>
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
              <p>MongoDB</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Mongoose</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>SQLite</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Firebase</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Nodemon</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>bcrypt.js</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Dotenv</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Uuid</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Express async handler</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Json web token</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Morgan</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Helmet</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Cors</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Body Parser</p>
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
              <p>Class & Functional Components</p>
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
              <p>Angular JS - Basic</p>
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
              <p>Axios</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Next JS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Emotion</p>
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
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>React helmet async</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>React router</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>React router dom</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>React toastify</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Zustand</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>nivo</p>
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
              <p>TypeScript</p>
            </li>
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
              <p>System Design</p>
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
              <p>DOM</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Fetch API</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>REST & CRUD</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Cross Browser code</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>HTTP status codes</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>JSON / XML</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>File parsing</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Paypal Api</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>EmailJS</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Quill Rich Text Editor</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Lodash</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Api */}
      </div>
    </section>
  );
};

export default Skills;
