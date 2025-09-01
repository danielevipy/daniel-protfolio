import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const inputs = [
  {
    title: "Object Oriented Programming",
    points: [
      "I write code in a way that's organized and easy to expand.",
      "I use OOP to make my projects easier to maintain and improve over time.",
    ],
  },
  {
    title: "Data Structures",
    points: [
      "I know how to organize and manage data efficiently.",
      "I choose the right data structures to make programs run better.",
    ],
  },
  {
    title: "Web APIs",
    points: [
      "I build and connect Web APIs so different software can talk to each other.",
      "I make sure data flows smoothly and systems work well together.",
    ],
  },
  {
    title: "Software Testing",
    points: [
      "I carefully test my code to make sure it works correctly and reliably.",
    ],
  },
  {
    title: "Parallel Computing",
    points: [
      "I work with asynchronous code, threads, and multiple processes.",
      "This helps me run several tasks at the same time efficiently.",
    ],
  },
  {
    title: "Computer Systems & Architecture",
    points: [
      "I understand how software and hardware work together.",
      "I look for ways to make systems faster and more efficient.",
    ],
  },
  {
    title: "Networking",
    points: [
      "I understand basic networking and how data moves through networks.",
      "I know how to keep networks running smoothly and reliably.",
    ],
  },
  {
    title: "Command Line & Bash Scripting",
    points: [
      "I use the command line to navigate systems and automate tasks.",
      "I write scripts to make repetitive work faster and easier.",
    ],
  },
  {
    title: "Unix Operating Systems",
    points: [
      "I am comfortable using Unix systems and can handle common tasks on them.",
    ],
  },
  {
    title: "Machine Learning & Computer Vision",
    points: [
      "I have some experience with Machine Learning and Computer Vision projects.",
      "I can use tools like Mediapipe for real time gesture, face, and object recognition.",
    ],
  },
  {
    title: "Robotics & Electronics",
    points: [
      "I am interested in robotics and electronics and spend my free time learning and experimenting with them.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5> Programming languages</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* End of frontend */}

        <div className="experience__lang">
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-green">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-green">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-green">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="professional_skills__grid">
        {inputs.map((skill, idx) => (
          <div key={idx} className="professional_skill_card">
            <h4>{skill.title}</h4>
            <ul>
              {skill.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
