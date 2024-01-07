import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5> Programming languages</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-green">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-green">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-green">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of frontend */}

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-green">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-green">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="experience_text">
          <b>
            My Python Passion - Embracing OOP, Algorithms, and Data Structures
          </b>
          <p>
            My love for Python programming is more than professional; it's a
            passion. <br /> This elegant and simple language is my tool for
            crafting innovative solutions to complex challenges. <br /> I am
            particularly drawn to the clarity and efficiency Python brings to
            object oriented programming. <br />
            It allows me to create code that is not only functional but also
            beautifully structured.
          </p>
          <p>
            Algorithms and data structures fascinate me, as they are essential
            for writing efficient and effective Python code. <br /> They sharpen
            my problem solving skills, enabling me to tackle real world
            challenges with precision and creativity. <br /> For me, Python is
            not just coding, it's a way of thinking and innovating.
          </p>

          <b>Backend Development Expertise with a Data Driven Edge</b>
          <p>
            I possess a profound understanding of backend development, with a
            specialization in Node.js, Django, and the Django REST Framework.
            <br />
            This expertise is complemented by a robust foundation in SQL,
            enabling me to build and maintain efficient, scalable, and reliable
            database driven applications.
          </p>

          <b>Passion for Data and Frontend Technologies</b>
          <p>
            My fascination doesn't stop at backend technologies. <br /> I have a
            profound interest in working with and manipulating data. <br /> The
            field of data science, especially data manipulation, captivates me,
            fueling my desire to delve deeper into this area.
          </p>
          <p>
            In addition to backend development, I am skilled in frontend
            technologies. <br /> My experience with React, HTML, and CSS allows
            me to have a holistic view of web development, ensuring seamless
            integration and functionality from the server to the user interface.
          </p>
          <b>Machine Learning and Computer Vision Enthusiast</b>
          <p>
            My passion extends into the realms of machine learning and computer
            vision. <br /> I explore and innovate in these cutting edge areas.
            This experience not only enhances my development skills but also
            aligns with my interest in data and its endless possibilities.
          </p>
          <b>A Foundation Rooted in Physics and Mathematics</b>
          <p>
            My enthusiasm for physics and mathematics; it's a cornerstone of my
            approach to problem solving and technology. This background empowers
            me to tackle complex challenges with logical precision and creative
            insight, especially in areas like algorithm development and data
            analysis.
          </p>
          <b>Bringing It All Together</b>
          <p>
            As a software developer with a passion for algorithms & data
            structures, data, web technologies, machine learning, and computer
            vision, I offer a unique blend of skills and interests. <br /> My
            journey is about be the best in what i do, to be professional.
          </p>
          <p>
            If you're seeking a developer like me, I'd love to connect. <br />{' '}
            Let's explore how my expertise and passions can contribute to your
            next project and drive technological innovation.
          </p>
        </div>
        <a
          href="https://github.com/Daniel3Levi/messaging_system/tree/dev"
          className="btn btn-primary"
        >
          Check out my last project!
        </a>
      </div>
    </section>
  );
};

export default Experience;
