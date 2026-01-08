import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projects from "./projects.json";
import placeholder from "/placeholder.png";
import TechStack from "./utility/scrolling-tech.jsx";

function Projects() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    // Base URL is needed for GitHub Pages or localized relative paths
    const baseUrl = import.meta.env.BASE_URL || "/";

    const imageUrls = projects.map(project =>
      project.image ? `${baseUrl}${project.image}`.replace(/\/+/g, '/') : placeholder
    );

    const loadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(true); // Resolve anyway so we don't block content if an image fails
      });
    };

    Promise.all(imageUrls.map(loadImage)).then(() => {
      if (mounted) {
        // Subtle delay for smoother transition from loader to content
        setTimeout(() => setImagesLoaded(true), 400);
      }
    });

    return () => { mounted = false; };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  if (!imagesLoaded) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-6">
        <div className="relative w-20 h-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-2 border-t-accent-primary border-r-transparent border-b-accent-secondary border-l-transparent rounded-full shadow-[0_0_15px_rgba(var(--accent-primary-rgb),0.3)]"
          />
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-10 h-10 bg-accent-primary rounded-full blur-2xl"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-bright-text font-semibold tracking-widest text-sm uppercase">Curating Showcase</p>
          <div className="flex gap-1.5 h-1 items-center justify-center">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col rounded-2xl bg-card-bg glass-card overflow-hidden shadow-lg"
          >
            {/* Image Section */}
            <div className="w-full aspect-video overflow-hidden relative">
              <img
                src={project.image ? `${import.meta.env.BASE_URL}${project.image}`.replace(/\/+/g, '/') : placeholder}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col grow">
              <h2 className="text-xl font-bold mb-3 text-bright-text">
                {project.title}
              </h2>
              <p className="text-gray-text mb-6 line-clamp-3 text-[13px] leading-relaxed font-light">
                {project.description}
              </p>

              <div className="mt-auto">
                <TechStack project={project} />

                <div className="mt-6 flex gap-6 items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] font-bold text-accent-secondary hover:text-accent-primary transition-colors duration-300 group/link"
                  >
                    <span className="relative">
                      GitHub
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-primary transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] font-bold text-green-400 hover:text-green-300 transition-colors duration-300 group/link"
                    >
                      <span className="relative">
                        Live Demo
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-400 transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
