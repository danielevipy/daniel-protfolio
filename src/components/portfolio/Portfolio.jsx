import IMG4 from '../../assets/portfolio4.jpg';
import React from 'react';

import '../portfolio/portfolio.css';

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Messaging System',
    details: 'Django, DRF',
    github: 'https://github.com/Daniel3Levi/messaging_system/tree/temp',
    demo: '',
  },
  {
    id: 2,
    image: IMG4,
    title: 'CRM System',
    details: 'Django',
    github: 'https://github.com/Daniel3Levi/Django-CRM',
    demo: '',
  },
  {
    id: 3,
    image: IMG4,
    title: 'Ecommerce Website',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/oved_store_eco',
    demo: '',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Gallery',
    details: 'React | Node | Express',
    github: 'https://github.com/Daniel3Levi/ms_app_daniel_levi',
    demo: '',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Store API',
    details: 'Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/Store-API',
    demo: '',
  },
  {
    id: 6,
    image: IMG4,
    title: 'Task Manager',
    details: 'Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/TaskManager',
    demo: '',
  },
  {
    id: 7,
    image: IMG4,
    title: 'Notes',
    details: 'TypeScript | Vite | React',
    github: 'https://github.com/Daniel3Levi/notes',
    demo: 'http://notes.danielevi.co.il/',
  },
  {
    id: 8,
    image: IMG4,
    title: 'Daniel Levi Protfolio',
    details: 'React',
    github: 'https://github.com/Daniel3Levi/daniel-protfolio',
    demo: 'http://danielevi.co.il/',
  },
  {
    image: IMG4,
    id: 9,
    title: 'Blog',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/InBalance',
    demo: '',
  },
  {
    image: IMG4,
    id: 10,
    title: 'Earth',
    details: 'Three JS | React',
    github: 'https://github.com/Daniel3Levi/earth',
    demo: '',
  },
  {
    image: IMG4,
    id: 11,
    title: 'Game Of Life',
    details: 'Vite | React',
    github: 'https://github.com/Daniel3Levi/earth',
    demo: 'https://gameoflife.danielevi.co.il/',
  },
  {
    image: IMG4,
    id: 12,
    title: 'Personal-Trainer Website',
    details: 'React',
    github: 'https://github.com/Daniel3Levi/client',
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
                <a href={demo} target="_blank" rel="noreferrer">
                  <img src={image} alt={title} />
                </a>
              </div>
              <div>
                <h3>{title}</h3>
              </div>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Github
                </a>
                {demo !== '' ? (
                  <a
                    href={demo}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
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
