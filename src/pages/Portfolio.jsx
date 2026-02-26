import portfolio from "../data/portfolio";

export default function Portfolio() {
  return (
    <div className="portfolio-main">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p>
          Welcome to my portfolio! Here you can find some of my projects and
          work experience.
        </p>
      </div>
      <div className="portfolio-projects">
        <ul className="portfolio-list">
          {portfolio.map((card) => (
            <li key={card.id} className="portfolio-card">
              <h5>{card.title}</h5>
              <a href={card.link} target="_blank">
                <img src={"./images/" + card.image} alt={card.title} />
              </a>
              <p>{card.description}</p>
              <p>
                <a href={card.repo} target="_blank">
                  Github Repository
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
