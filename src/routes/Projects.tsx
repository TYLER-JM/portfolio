import ProjectCard from "../components/ProjectCard.tsx";

const Projects = function() {
  const projects = [
    {
      title: "Team Fantasy",
      tech: "React, NextJS, Prisma, SupaBase",
      desc: "A platform to track and manage a team-based fantasy sports league. Using NextJS, and deployed with Vercel",
      source: "https://github.com/TYLER-JM/team-fantasy-v2",
      live: "https://team-fantasy-v2.vercel.app/"
    },
    {
      title: "MoCalc",
      tech: "Typescript, React, React Router",
      desc: "a Mortgage calculator that lets you easily compare multiple mortgage scenarios.",
      source: "https://github.com/TYLER-JM/mocalc",
      live: "https://mocalc.vercel.app/"
    }
  ]

  const allProjectCards = projects.map(project => {
    return (
      <ProjectCard
        title={project.title}
        tech={project.tech}
        desc={project.desc}
        source={project.source}
        key={project.title.replace(/ /g, "-")}
        live={project.live}
      />
    )
  })

  return (
    <article className="section projects" id="projects">

      <div className="projects__container">
          {allProjectCards}
      </div>
    </article>
  );
}

export default Projects;