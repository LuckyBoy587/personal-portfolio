import ContextBox from "./utility/context-box.jsx";
import PropTypes from "prop-types";
import TextType from './components/TextType';
import { useState, useEffect } from "react";


const Navbar = ({ navTabs, selectedIndex, setActiveTabIndex }) => {
  const [scrollVisible, setScrollVisible] = useState(true);
  const [hoverVisible, setHoverVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Scrolling down
          setScrollVisible(false);
          setIsMenuOpen(false); // Close menu on scroll
        } else {
          // Scrolling up or at the top
          setScrollVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    const handleMouseMove = (e) => {
      // Show navbar if mouse is at the very top (e.g., top 15px)
      setHoverVisible(() => e.clientY < 50);
      setScrollVisible((prevScrollVisible) => e.clientY < 50 || prevScrollVisible);
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  const isVisible = scrollVisible || hoverVisible;

  return (
    <div
      onMouseEnter={() => setHoverVisible(true)}
      onMouseLeave={() => setHoverVisible(false)}
      className={`relative z-50 flex flex-col h-fit w-full p-2 md:p-4 md:pl-8 rounded-2xl solid-card animate-glow-emergence transition-all duration-500 ease-in-out transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"}`}>
      <div className={"flex items-center justify-between px-2 md:px-8 text-bright-text h-10 md:h-auto"}>
        <div className="text-base md:text-xl font-bold heading-font text-secondary-text truncate">
          <TextType
            text={["@LuckyBoy587"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navTabs.map(({ name }, index) => (
            <p key={index} onClick={() => setActiveTabIndex(index)} className={`cursor-pointer heading-font font-semibold transition-colors duration-200 ${selectedIndex === index ? "text-secondary-text border-b-2 border-secondary-text" : "text-bright-text hover:text-secondary-text"}`}>
              {name}
            </p>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-bright-text text-lg focus:outline-none p-2"
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 p-2 items-center border-t border-card-border/30">
          {navTabs.map(({ name }, index) => (
            <p
              key={index}
              onClick={() => {
                setActiveTabIndex(index);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer heading-font font-semibold w-full text-center py-3 rounded-xl transition-all ${selectedIndex === index ? "text-secondary-text bg-secondary-bg/50" : "text-bright-text hover:bg-secondary-bg/30"}`}
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  navTabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })).isRequired,
  setActiveTabIndex: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
}

export default Navbar;