import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';

import '../portfolio/portfolio.css';

const data = [
  {
    id: 0,
    image: IMG1,
    title: 'Ecommerce Website',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/oved_store_eco',
    demo: '',
  },
  {
    id: 1,
    image: IMG4,
    title: 'Store API',
    details: 'Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/Store-API',
    demo: '',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Task Manager',
    details: 'Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/TaskManager',
    demo: '',
  },
  {
    id: 3,
    image: IMG4,
    title: 'Notes',
    details: 'TypeScript | Vite | React',
    github: 'https://github.com/Daniel3Levi/notes',
    demo: 'http://notes.danielevi.co.il/',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Daniel Levi Protfolio',
    details: 'React',
    github: 'https://github.com/Daniel3Levi/daniel-protfolio',
    demo: 'http://danielevi.co.il/',
  },
  {
    image: IMG4,
    id: 5,
    title: 'InBalance Website',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/InBalance',
    demo: '',
  },
  {
    image: IMG4,
    id: 6,
    title: 'Earth',
    details: 'Three JS | React',
    github: 'https://github.com/Daniel3Levi/earth',
    demo: '',
  },
  {
    image: IMG4,
    id: 7,
    title: 'Game Of Life',
    details: 'Vite | React',
    github: 'https://github.com/Daniel3Levi/earth',
    demo: 'https://gameoflife.danielevi.co.il/',
  },
  {
    image: IMG4,
    id: 8,
    title: 'Blog',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/InBalance',
    demo: '',
  },
  {
    image: IMG4,
    id: 9,
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
