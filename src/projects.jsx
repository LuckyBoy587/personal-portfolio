import projects from "./projects.json";
import placeholder from "/placeholder.png";
import TechStack from "./utility/scrolling-tech.jsx";

function Projects() {
  return (
    <div className="px-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            /* Removed backdrop-blur-md for GPU performance */
            className="relative flex flex-col rounded-2xl bg-[var(--card-bg)] glass-card overflow-hidden">
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={project.image ? `${import.meta.env.BASE_URL}${project.image}` : placeholder}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2 text-[var(--bright-text)]">
                {project.title}
              </h2>
              <p className="text-[var(--gray-text)] mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-auto">
                <TechStack project={project} />
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-secondary)]"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;