import './App.css'
import Branding from "./Branding.jsx";
import AboutMe from "./AboutMe.jsx";

function App() {
  return (
    <div className="relative flex my-auto w-full font-mono p-8 min-h-screen bg-[var(--window-bg)] gap-8">
      <Branding/>
      <AboutMe/>
    </div>
  )
}

export default App
