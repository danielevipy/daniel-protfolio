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
          <h2>Backend Development Expertise with a Data-Driven Edge</h2>
          <p>
            I'm a dedicated backend developer specializing in Node.js, Django,
            and the Django REST Framework, paired with a strong foundation in
            SQL. My goal is simple: to excel and become a leader in the field of
            backend development.
          </p>

          <b>Passion for Data and Frontend Technologies</b>
          <p>
            My fascination doesn't stop at backend technologies. I have a
            profound interest in working with and manipulating data. The field
            of data science, especially data manipulation, captivates me,
            fueling my desire to delve deeper into this area.
          </p>
          <p>
            In addition to backend development, I am skilled in frontend
            technologies. My experience with React, HTML, and CSS allows me to
            have a holistic view of web development, ensuring seamless
            integration and functionality from the server to the user interface.
          </p>
          <b>Machine Learning and Computer Vision Enthusiast</b>
          <p>
            My passion extends into the realms of machine learning and computer
            vision. Utilizing technologies like TensorFlow, PyTorch, and Jupyter
            Notebook, I explore and innovate in these cutting-edge areas. This
            experience not only enhances my backend development skills but also
            aligns with my interest in data and its endless possibilities.
          </p>
          <b>A Foundation Rooted in Physics and Mathematics</b>
          <p>
            My enthusiasm for physics and mathematics is not just academic; it's
            a cornerstone of my approach to problem-solving and technology. This
            background empowers me to tackle complex challenges with logical
            precision and creative insight, especially in areas like algorithm
            development and data analysis.
          </p>
          <b>Bringing It All Together</b>
          <p>
            As a backend developer with a passion for data, front-end
            technologies, machine learning, and computer vision, I offer a
            unique blend of skills and interests. My journey is about mastering
            the backend while embracing the interconnectedness of technology -
            from data science to user experience.
          </p>
          <p>
            If you're seeking a developer with a deep backend focus, a
            data-driven mindset, and a broad skill set spanning from machine
            learning to frontend development, I'd love to connect. Let's explore
            how my expertise and passions can contribute to your next project
            and drive technological innovation.
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
