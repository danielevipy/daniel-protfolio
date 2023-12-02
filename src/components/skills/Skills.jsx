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
              <p>Django</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Django REST Framework</p>
            </li>
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
              <p>Redux</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>CSS</p>
            </li>
          </ul>
        </article>
        {/* END OF FrontEnd */}
        <article className="skills">
          <div className="skills__head">
            <h3>General</h3>
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
              <p>MVC</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Git</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Web API</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <ImCheckmark2 className="skills__list-icon" />
              <p>Jupyter Notebook</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Api */}
      </div>
    </section>
  );
};

export default Skills;
