import React from "react";
import "../skills/skills.css";
import { ImCheckmark2 } from "react-icons/im";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h5>Some of the technologies I've been working with lately</h5>
        <h2>My Toolkit</h2>
        <div className="container skills__container">
          <article className="skills">
            <div className="skills__head">
              <h3>Backend Technologies</h3>
            </div>
            <ul className="skills__list">
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Node JS</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Express</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Koa</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Django</p>
              </li>
            </ul>
          </article>
          {/*  END - Backend Technologies  */}
          <article className="skills">
            <div className="skills__head">
              <h3>Frontend Technologies</h3>
            </div>
            <ul className="skills__list">
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>HTML</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>CSS</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>React</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Redux</p>
              </li>
            </ul>
          </article>
          {/* END - Frontend Technologies */}
          <article className="skills">
            <div className="skills__head">
              <h3>Database</h3>
            </div>
            <ul className="skills__list">
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
          {/* END OF Database */}
          <article className="skills">
            <div className="skills__head">
              <h3>Development Tools</h3>
            </div>
            <ul className="skills__list">
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Git</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Postman</p>
              </li>
            </ul>
          </article>
          {/* END - Development Tools */}
        </div>
      </section>
    </>
  );
};

export default Skills;
