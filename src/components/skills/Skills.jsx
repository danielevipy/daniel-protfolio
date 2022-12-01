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
              <p>SQLite</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Dotenv</p>
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
              <p>Mongoose</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>bcrypt.js</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Nodemon</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>uuid</p>
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
              <p>React Hooks</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Redux</p>
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
              <p>Asynchronous programming</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Functional programming</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Memory management</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Jest</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Mocha</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>REST</p>
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
              <p>CRUD</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>OOP</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>DOM</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Error handling</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>MongoDB</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Heroku</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>HTTP status codes</p>
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
