import projects from "../public/projects.json";
import placeholder from "../public/placeholder.png";

function Projects() {

  const baseGithubUrl = "https://github.com/LuckyBoy587/";
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 grid-auto-rows-fr">
      {projects.map((project, index) => (
        <div key={index} className="relative h-full bg-[var(--primary-bg)] rounded-2xl shadow-lg">
          <div className={"w-full rounded-t-2xl overflow-hidden"}>
            <img width={"100%"} src={project.image || placeholder} alt={project.title} />
          </div>
          <div className={"flex flex-col p-4 justify-between text-[var(--gray-text)]"}>
            <h2 className="text-xl font-bold text-[var(--bright-text)]">{project.title}</h2>
            <p className="mb-4   line-clamp-3 min-h-[4.5rem]">{project.description}</p>
            <div className="flex text-nowrap overflow-x-auto gap-2 text-sm hide-scrollbar scroll-smooth">
              {project.tech.map((tech, i) => (
                <p
                  key={i}
                  className="bg-[var(--secondary-bg)] px-3 py-2 rounded-full border border-[var(--gray-text)]"
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              <p className="text-[var(--secondary-text)] hover:underline hover:cursor-pointer" onClick={() => window.open(project.github || baseGithubUrl, "_blank")}>
                GitHub
              </p>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
