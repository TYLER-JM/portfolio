import {Link} from "react-router";

interface ProjectCardProps {
  title: string
  slug: string
  tech: string
  desc: string
  source: string
  live?: string
}
const ProjectCard = function (
  { title, slug, tech, desc, source, live}: ProjectCardProps
) {

  return (

      <div className="card">
        <div className="card__content">
          <div className="card__title">
            <span>{title}</span>
            {live &&
              <a title="open project in new tab" className='card__link card__link--live' href={live} target="_blank"
                 rel="noopener noreferrer">
                <svg>
                  <use xlinkHref="images/sprite.svg#icon-new-tab"></use>
                </svg>
              </a>
            }
          </div>
          <p className="card__tech">{tech}</p>
          <p className="card__text">{desc}</p>
          <p className="card__tech">
            <Link to={`${slug}`} className="card__detail-link">
              Read more <span className="icon">&rarr;</span>
            </Link>
          </p>
          <a title="view project repository" className="card__link source-code" href={source} target="blank">
            <svg>
              <use xlinkHref="images/sprite.svg#icon-code"></use>
            </svg>
          </a>
        </div>
      </div>

  )

}

export default ProjectCard;