import { useRef, useState, useEffect } from 'react';

const TechStack = ({ project }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll function for arrow buttons
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 100; // Adjust as needed
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Check if content overflows and update scroll states
  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const isOverflowing = container.scrollWidth > container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      isOverflowing &&
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  // Run checkScroll on mount and when scrolling
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScroll(); // Initial check
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll); // Handle window resize

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [project.tech]); // Re-run if tech array changes

  return (
    <div className="relative flex items-center">
      {/* Left Arrow - Conditionally Rendered */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 p-2 bg-[var(--arrow-bg)] hover:bg-[var(--arrow-hover-bg)] opacity-50 hover:opacity-100 text-white rounded-full transition-all duration-300"
          aria-label="Scroll left"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Scrollable Tech Stack Container */}
      <div
        ref={scrollRef}
        className="flex text-nowrap overflow-x-auto gap-2 text-sm scroll-smooth hide-scrollbar"
      >
        {project.tech.map((tech, i) => (
          <p
            key={i}
            className="bg-[var(--secondary-bg)] px-3 py-2 rounded-full border border-[var(--gray-text)] group-hover:border-blue-400 transition-colors duration-300"
          >
            {tech}
          </p>
        ))}
      </div>

      {/* Right Arrow - Conditionally Rendered */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 p-2 bg-[var(--arrow-bg)] hover:bg-[var(--arrow-hover-bg)] opacity-50 hover:opacity-100 text-white rounded-full transition-all duration-300"
          aria-label="Scroll right"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TechStack;