import IMG4 from '../../assets/portfolio4.jpg';
import React from 'react';

import '../portfolio/portfolio.css';

const data = [
  {
    id: 15,
    image: IMG4,
    title: 'Hangman Game',
    details: 'Python',
    github: 'https://github.com/danielevipy/HangmanGame',
    demo: '',
  },
  {
    id: 14,
    image: IMG4,
    title: 'Hand Tracking',
    details: 'ML | CV | Python',
    github: 'https://github.com/danielevipy/HandTracking',
    demo: '',
  },
  {
    id: 13,
    image: IMG4,
    title: 'Motions Counter',
    details: 'ML | CV | Python',
    github: 'https://github.com/danielevipy/MotionsCounter',
    demo: '',
  },
  {
    id: 12,
    image: IMG4,
    title: 'Messaging System',
    details: 'Django, DRF | SQL',
    github: 'https://github.com/danielevipy/messaging_system/tree/dev',
    demo: '',
  },
  {
    id: 11,
    image: IMG4,
    title: 'Card Game',
    details: 'Python',
    github: 'https://github.com/danielevipy/maxHandWins',
    demo: '',
  },
  {
    id: 10,
    image: IMG4,
    title: 'CRM System',
    details: 'Django ֿ| SQL',
    github: 'https://github.com/danielevipy/Django-CRM',
    demo: '',
  },
  {
    id: 9,
    image: IMG4,
    title: 'Ecommerce Website',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/danielevipy/oved_store_eco',
    demo: '',
  },
  {
    id: 8,
    image: IMG4,
    title: 'Gallery',
    details: 'React | Node | Express',
    github: 'https://github.com/danielevipy/ms_app_daniel_levi',
    demo: '',
  },
  {
    id: 7,
    image: IMG4,
    title: 'Store API',
    details: 'Node | Express | MongoDB',
    github: 'https://github.com/danielevipy/Store-API',
    demo: '',
  },
  {
    id: 6,
    image: IMG4,
    title: 'Task Manager',
    details: 'Node | Express | MongoDB',
    github: 'https://github.com/danielevipy/TaskManager',
    demo: '',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Notes',
    details: 'TypeScript | Vite | React',
    github: 'https://github.com/danielevipy/notes',
    demo: 'http://notes.danielevi.co.il/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Daniel Levi Protfolio',
    details: 'React',
    github: 'https://github.com/danielevipy/daniel-protfolio',
    demo: 'http://danielevi.co.il/',
  },
  {
    image: IMG4,
    id: 3,
    title: 'Blog',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/danielevipy/InBalance',
    demo: '',
  },
  {
    image: IMG4,
    id: 2,
    title: 'Earth',
    details: 'Three JS | React',
    github: 'https://github.com/danielevipy/earth',
    demo: '',
  },
  {
    image: IMG4,
    id: 1,
    title: 'Game Of Life',
    details: 'Vite | React',
    github: 'https://github.com/Daniel3Levi/earth',
    demo: 'https://gameoflife.danielevi.co.il/',
  },
  {
    image: IMG4,
    id: 0,
    title: 'Personal-Trainer Website',
    details: 'React',
    github: 'https://github.com/danielevipy/client',
    demo: '',
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>

        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {data.map(({ id, image, title, details, github, demo }) => (
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
                {demo !== '' ? (
                  <a href={demo} className="btn btn-primary" rel="noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <button disabled className="disable_btn">
                    Live Demo
                  </button>
                )}
              </div>
              <p>{details}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default Portfolio;
