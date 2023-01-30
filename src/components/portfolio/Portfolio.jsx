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
    demo: 'https://ovedstore.herokuapp.com',
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
    demo: 'https://task-manager-danielevi.herokuapp.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Daniel Levi Protfolio',
    details: 'React',
    github: 'https://github.com/Daniel3Levi/daniel-protfolio',
    demo: '',
  },
  {
    image: IMG4,
    id: 4,
    title: 'InBalance Website',
    details: 'React | Node | Express | MongoDB',
    github: 'https://github.com/Daniel3Levi/InBalance',
    demo: '',
  },
  {
    id: 5,
    image: IMG4,
    title: 'LeetCode',
    details: 'Java Script',
    github: 'https://github.com/Daniel3Levi/leetcode_easy',
    demo: '',
  },
  {
    id: 6,
    image: IMG4,
    title: 'Function - JavaScript Part1',
    details: 'Java Script',
    github: 'https://github.com/Daniel3Levi/function_javascript',
    demo: '',
  },
  {
    id: 7,
    image: IMG4,
    title: 'Function - JavaScript Part2',
    details: 'Java Script',
    github: 'https://github.com/Daniel3Levi/function_javascript1',
    demo: '',
  },
  {
    id: 8,
    image: IMG4,
    title: 'Dictionary',
    details: 'Java Script',
    github: 'https://github.com/Daniel3Levi/dictionary',
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
