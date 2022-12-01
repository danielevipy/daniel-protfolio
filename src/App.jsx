import React from 'react';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Skills from './components/skills/Skills.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

//rafce shortcut

const App = () => {
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
