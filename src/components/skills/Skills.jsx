import React from 'react';
import '../skills/skills.css';
import { ImCheckmark2 } from 'react-icons/im';
const Skills = () => {
  return (
    <>
      <section className="professional_skills">
        <h5>Overview</h5>
        <h2>Professional skills</h2>

        <div className="container ">
          <ul>
            <li>
              <h4>Object Oriented Programming:</h4>
              <ul>
                <li>
                  Expertise in designing modular and scalable code structures.
                </li>
                <li>
                  Proficient in applying OOP principles to enhance software
                  design and maintenance.
                </li>
              </ul>
            </li>
            <li>
              <h4>Design Patterns:</h4>
              <ul>
                <li>
                  Strategic application of design patterns to solve common
                  design issues.
                </li>
                <li>
                  Enhancing code maintainability and operational efficiency.
                </li>
              </ul>
            </li>
            <li>
              <h4>Data Structures:</h4>
              <ul>
                <li>
                  Proficient in optimal data organization and manipulation.
                </li>
                <li>
                  Supporting advanced algorithmic solutions with appropriate
                  data structures.
                </li>
              </ul>
            </li>
            <li>
              <h4>Software Testing:</h4>
              <ul>
                <li>
                  Rigorous approach to testing, ensuring software robustness and
                  reliability.
                </li>
                <li>
                  Commitment to delivering user satisfaction through high
                  quality software.
                </li>
              </ul>
            </li>
            <li>
              <h4>Parallel Computing:</h4>
              <ul>
                <li>
                  Strong expertise in asynchronous programming, threading, and
                  multiprocessing, <br /> allowing for advanced management of
                  concurrent processes in software development
                </li>
              </ul>
            </li>
            <li>
              <h4>Computer Systems and Architecture:</h4>
              <ul>
                <li>
                  Deep understanding of the interplay between software and
                  hardware.
                </li>
                <li>
                  Capability to enhance and innovate in the areas of system
                  design and performance, <br /> constantly seeking ways to
                  improve efficiency and effectiveness
                </li>
              </ul>
            </li>
            <li>
              <h4>Web APIs:</h4>
              <ul>
                <li>
                  Development and integration of Web APIs for seamless software
                  communication.
                </li>
                <li>
                  Ensuring efficient data exchange and system interoperability.
                </li>
              </ul>
            </li>
            <li>
              <h4>Networking:</h4>
              <ul>
                <li>
                  Solid foundation in networking principles and data
                  communication.
                </li>
                <li>Ensuring reliable and efficient network operations.</li>
              </ul>
            </li>
            <li>
              <h4>Command Line and Bash Scripting:</h4>
              <ul>
                <li>
                  Proficient in commandline usage for system navigation and task
                  automation.
                </li>
                <li>
                  Writing efficient bash scripts to streamline operations and
                  enhance productivity.
                </li>
              </ul>
            </li>
            <li>
              <h4>Unix Operating Systems:</h4>
              <ul>
                <li>
                  Thorough familiarity with and ability to operate Unix systems.
                </li>
              </ul>
            </li>
            <li>
              <h4>Machine Learning and Computer Vision:</h4>
              <ul>
                <li>
                  Possess basic experience and understanding in Machine
                  Learning, <br /> particularly in the area of Computer Vision
                  applications.
                </li>
                <li>
                  Skilled in using Mediapipe for real time gesture, face, and
                  object recognition.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section id="skills">
        <h5>Some of the technologies I've been working with lately</h5>
        <h2>My Toolkit</h2>
        <div className="container skills__container">
          <article className="skills">
            <div className="skills__head">
              <h3>Frameworks and Libraries</h3>
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
                <p>React JS</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Redux</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>MediaPipe</p>
              </li>
            </ul>
          </article>
          {/*  END - Frameworks and Libraries  */}
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
                <p>Jupyter Notebook</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Postman</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Docker</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Wireshark</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>AWS</p>
              </li>
              <li>
                <ImCheckmark2 className="skills__list-icon" />
                <p>Swagger</p>
              </li>
            </ul>
          </article>
          {/* END - Development Tools */}
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
            </ul>
          </article>
          {/* END - Frontend Technologies */}
        </div>
      </section>
    </>
  );
};

export default Skills;
