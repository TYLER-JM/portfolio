
interface ProjectCardProps {
  title: string
  tech: string
  desc: string
  source: string
  live?: string
}
const ProjectCard = function (
  { title, tech, desc, source, live}: ProjectCardProps
) {

  return (

      <div className="card">

        <div className="card__content">
          <div className="card__title">
          {live && 
              <a className='card__link card__link--live' href={live}>
                Live
              </a>
            }
            <span>{title}</span>
          </div>
          <p className="card__tech">{tech}</p>
          <p className="card__text">{desc}</p>
          <a className="card__link source-code" href={source} target="blank">
            Source
          </a>
        </div>
      </div>
    
  )

}

export default ProjectCard;