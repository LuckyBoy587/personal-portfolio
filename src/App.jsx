import './App.css'
import Branding from "./Branding.jsx";
import AboutMe from "./AboutMe.jsx";
import Resume from "./Resume.jsx";
import Navbar from "./navbar.jsx";
import { useState } from "react";
import Projects from "./projects.jsx";
import { AnimatedThemeToggler } from "./components/ui/animated-theme-toggler.jsx";


function App() {
  const navTabs = [
    { name: "About", element: <AboutMe /> },
    { name: "Resume", element: <Resume /> },
    { name: "Projects", element: <Projects /> },
  ]

  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <div className={`flex flex-col gap-8 lg:flex-row min-h-screen transition-all duration-500 px-6 sm:px-12 md:px-16 lg:px-6`}>
      {/* Animated Theme Toggler */}
      <AnimatedThemeToggler />


      <div className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:justify-center py-4 sm:py-8">
        <Branding />
      </div>
      <div className={"flex flex-col gap-8 w-full py-8"}>
        <div className={"flex w-full flex-col gap-4"}>
          <Navbar navTabs={navTabs} setActiveTabIndex={setActiveTabIndex} selectedIndex={activeTabIndex} />
        </div>
        <div>
          {navTabs[activeTabIndex].element}
        </div>
      </div>
    </div>
  )
}

export default App
