import projects from "./projects.json";
import placeholder from "/placeholder.png";
import TechStack from "./utility/scrolling-tech.jsx";
import { useEffect, useState } from "react";

const POPUP_ID = "PROJECT_POPUP";

const ProjectCard = ({ project, onClick, haveHoverEffect = true }) => {
  const baseGithubUrl = "https://github.com/LuckyBoy587/";
  return (
    <div
      className={`relative h-full bg-[var(--primary-bg)] rounded-2xl shadow-lg ${haveHoverEffect && "hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all duration-150 group"}`}
      onClick={(event) => {
        event.stopPropagation();
        onClick(event);
      }}
    >
      <div className="w-full rounded-t-2xl overflow-hidden aspect-video">
        <img
          width="100%"
          loading="lazy"
          src={project.image || placeholder}
          alt={project.title}
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
  );
};

const PopUpProjectCard = ({ project, onOutOfBoundsClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.id !== POPUP_ID) {
        onOutOfBoundsClick();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onOutOfBoundsClick();
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOutOfBoundsClick]);

  return (
    <div className="fixed inset-0 z-100">
      <div className="fixed w-full h-full bg-[var(--primary-bg)]/50 backdrop-blur-md"></div>
      <div className="fixed h-full w-full">
        <div
          id={POPUP_ID}
          style={{
            position: "absolute",
            top: isOpen ? "50%" : `${project.rect.top}px`,
            left: isOpen ? "25vw" : `${project.rect.left}px`,
            width: isOpen ? "50vw" : `${project.rect.width}px`,
            height: isOpen ? "auto" : `${project.rect.height}px`,
            transform: isOpen ? "translateY(-50%)" : "none",
            opacity: isOpen ? 1 : 0,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <ProjectCard project={project} haveHoverEffect={false} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const [popupProject, setPopupProject] = useState(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setPopupProject(null);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex h-full justify-center items-center">
      {popupProject && (
        <PopUpProjectCard project={popupProject} onOutOfBoundsClick={() => setPopupProject(null)} />
      )}
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 grid-auto-rows-fr blur-fade-in origin-top">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            onClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setPopupProject({ ...project, rect });
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;