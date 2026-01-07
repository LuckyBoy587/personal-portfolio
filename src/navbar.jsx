import ContextBox from "./utility/context-box.jsx";
import PropTypes from "prop-types";
import TextType from './components/TextType';
import { useState, useEffect } from "react";


const Navbar = ({ navTabs, selectedIndex, setActiveTabIndex }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up or at the top
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`flex flex-col h-fit w-full p-4 pl-8 gap-4 rounded-2xl solid-card animate-glow-emergence transition-all duration-500 ease-in-out transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"}`}>
      <div className={"flex items-center justify-between px-8 text-bright-text"}>
        <div className="text-xl font-bold heading-font text-secondary-text">
          <TextType
            text={["@LuckyBoy587"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="flex gap-8">
          {navTabs.map(({ name }, index) => (
            <p key={index} onClick={() => setActiveTabIndex(index)} className={`cursor-pointer heading-font font-semibold ${selectedIndex === index ? "text-secondary-text border-b-2 border-secondary-text" : "text-bright-text"}`}>
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