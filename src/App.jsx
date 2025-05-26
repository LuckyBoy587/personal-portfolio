import './App.css'
import Branding from "./Branding.jsx";
import AboutMe from "./AboutMe.jsx";
import Resume from "./Resume.jsx";
import Navbar from "./navbar.jsx";
import {useState} from "react";
import Projects from "./projects.jsx";

function App() {
  const isTesting = false;
  const navTabs = [
    {name: "About", element: <AboutMe/>},
    {name: "Resume", element: <Resume/>},
    {name: "Projects", element: <Projects/>},
  ]

  const [activeTabIndex, setActiveTabIndex] = useState(2)

  return (
    <>
      {!isTesting ?
        <div className="flex flex-col font-mono p-8 gap-8 lg:flex-row">
          <Branding/>
          <div className={"flex flex-col gap-8 w-full"}>
            <div className={"flex"}>
              <Navbar navTabs={navTabs} setActiveTabIndex={setActiveTabIndex} selectedIndex={activeTabIndex}/>
            </div>
            <div>
              {navTabs[activeTabIndex].element}
            </div>
          </div>
        </div> : (
          <>
            <Projects/>
          </>
        )}
    </>
  )
}

export default App
