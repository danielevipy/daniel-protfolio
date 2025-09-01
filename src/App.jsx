import React from "react";
import { useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Skills from "./components/skills/Skills.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="popup">
            <h2>
              <span role="img" aria-label="star">
                🌟
              </span>
              Seeking New Opportunities!
              <span role="img" aria-label="star">
                🌟
              </span>
            </h2>
            <h3>
              Hi, How are you?
              <span role="img" aria-label="smile">
                🙂
              </span>
            </h3>
            <p>
              My Name is <b style={{ color: "#1a73e8" }}>Daniel Levi</b>,
            </p>
            <p>
              I'm a passionate Software Developer, deeply committed to crafting
              exceptional software solutions.
            </p>
            <p>I love what I do and always put my heart into my work.</p>
            <p>
              Currently, I'm exploring new opportunities where I can contribute,
              grow, and make a significant impact.
            </p>
            <p>
              If you're looking for someone dedicated and enthusiastic to join
              your team, let's talk!
            </p>

            <button
              style={{ margin: "0.5rem" }}
              className="btn btn-primary"
              onClick={onClose}
            >
              Learn More
            </button>
          </div>
        );
      },
    });
  };

  useEffect(() => {
    const firstTime = localStorage.getItem("first_time");
    if (firstTime !== "1") {
      submit();
      localStorage.setItem("first_time", "1");
    }
  });

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
