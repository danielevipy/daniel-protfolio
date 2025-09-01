import CODE_IMG from "../../assets/code.svg";
import React from "react";

import "../portfolio/portfolio.css";

const data = [
  {
    id: 15,
    image: CODE_IMG,
    title: "Hangman Game",
    stack: "Python",
    github: "https://github.com/danielevipy/HangmanGame",
    demo: "",
  },
  {
    id: 14,
    image: CODE_IMG,
    title: "Hand Tracking",
    stack: "ML | CV | Python",
    github: "https://github.com/danielevipy/HandTracking",
    demo: "",
  },
  {
    id: 13,
    image: CODE_IMG,
    title: "Motions Counter",
    stack: "ML | CV | Python",
    github: "https://github.com/danielevipy/MotionsCounter",
    demo: "",
  },
  {
    id: 12,
    image: CODE_IMG,
    title: "Messaging System",
    stack: "Django, DRF | SQL",
    github: "https://github.com/danielevipy/messaging_system/tree/dev",
    demo: "",
  },
  {
    id: 11,
    image: CODE_IMG,
    title: "Card Game",
    stack: "Python",
    github: "https://github.com/danielevipy/maxHandWins",
    demo: "",
  },
  {
    id: 10,
    image: CODE_IMG,
    title: "CRM System",
    stack: "Django | SQL",
    github: "https://github.com/danielevipy/Django-CRM",
    demo: "",
  },
  {
    id: 9,
    image: CODE_IMG,
    title: "Ecommerce Website",
    stack: "React | Node | Express | MongoDB",
    github: "https://github.com/danielevipy/oved_store_eco",
    demo: "",
  },
  {
    id: 8,
    image: CODE_IMG,
    title: "Gallery",
    stack: "React | Node | Express",
    github: "https://github.com/danielevipy/ms_app_daniel_levi",
    demo: "",
  },
  {
    id: 7,
    image: CODE_IMG,
    title: "Store API",
    stack: "Node | Express | MongoDB",
    github: "https://github.com/danielevipy/Store-API",
    demo: "",
  },
  {
    id: 6,
    image: CODE_IMG,
    title: "Task Manager",
    stack: "Node | Express | MongoDB",
    github: "https://github.com/danielevipy/TaskManager",
    demo: "",
  },
  {
    id: 5,
    image: CODE_IMG,
    title: "Notes",
    stack: "TypeScript | Vite | React",
    github: "https://github.com/danielevipy/notes",
    demo: "http://notes.danielevi.co.il/",
  },
  {
    id: 4,
    image: CODE_IMG,
    title: "Daniel Levi Protfolio",
    stack: "React",
    github: "https://github.com/danielevipy/daniel-protfolio",
    demo: "http://danielevi.co.il/",
  },
  {
    image: CODE_IMG,
    id: 3,
    title: "Blog",
    stack: "React | Node | Express | MongoDB",
    github: "https://github.com/danielevipy/InBalance",
    demo: "",
  },
  {
    image: CODE_IMG,
    id: 2,
    title: "Earth",
    stack: "Three JS | React",
    github: "https://github.com/danielevipy/earth",
    demo: "",
  },
  {
    image: CODE_IMG,
    id: 1,
    title: "Game Of Life",
    stack: "Vite | React",
    github: "https://github.com/Daniel3Levi/earth",
    demo: "https://gameoflife.danielevi.co.il/",
  },
  {
    image: CODE_IMG,
    id: 0,
    title: "Personal-Trainer Website",
    stack: "React",
    github: "https://github.com/danielevipy/client",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>

        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {data.map(({ id, image, title, stack, github, demo }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={demo} rel="noreferrer">
                  <img src={image} alt={title} />
                </a>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" rel="noreferrer">
                  Github
                </a>
                {demo !== "" ? (
                  <a href={demo} className="btn btn-primary" rel="noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <button disabled className="disable_btn">
                    Live Demo
                  </button>
                )}
              </div>
              <p>{stack}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default Portfolio;
