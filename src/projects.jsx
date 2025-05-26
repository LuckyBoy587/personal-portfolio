import projects from "../public/projects.json";
import placeholder from "/placeholder.png";
import TechStack from "./utility/scrolling-tech.jsx";

function Projects() {

  const baseGithubUrl = "https://github.com/LuckyBoy587/";
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 grid-auto-rows-fr blur-fade-in origin-top">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative h-full bg-[var(--primary-bg)] rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="w-full rounded-t-2xl overflow-hidden aspect-video">
            <img
              width={"100%"}
              src={project.image || placeholder}
              alt={project.title}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col p-4 justify-between text-[var(--gray-text)]">
            <h2 className="text-xl font-bold text-[var(--bright-text)] group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h2>
            <p className="mb-4 line-clamp-3 min-h-[4.5rem]">{project.description}</p>
            <TechStack project={project} />
            <div className="mt-3 flex gap-3">
              <p
                className="text-[var(--secondary-text)] hover:underline hover:cursor-pointer transition-colors duration-300"
                onClick={() => window.open(project.github || baseGithubUrl, "_blank")}
              >
                GitHub
              </p>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline group-hover:text-green-300 transition-colors duration-300"
                >
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
