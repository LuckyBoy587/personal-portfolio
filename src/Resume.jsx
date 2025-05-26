import * as React from 'react';
import ContextBox from "./utility/context-box.jsx";

const Resume = () => {
  return (
    <div className={"flex flex-col gap-8 min-w-[min(600px, 100vw)] w-full blur-fade-in origin-top"}>
      <ContextBox>
        <ul className={"flex flex-col gap-6 border-l-2 border-[var(--secondary-bg)] pl-10"}>
          <li className={"relative h-15"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-book"></i>
            </div>
            <div className={"flex items-center h-fit"}>
              <p className={"text-[var(--bright-text)] text-4xl"}>Education</p>
            </div>
          </li>
          <li className={"relative"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--bright-text)] text-2xl"}>B.Tech in Information Technology</p>
              <p className={"text-[var(--gray-text)]"}>Sri Krishna College of Engineering and Technology, Coimbatore</p>
              <p className={"text-[var(--gray-text)]"}>2023 - 2027</p>
              <p className={"text-[var(--gray-text)]"}>CGPA: 8.29</p>
            </div>
          </li>
          <li className={"relative"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-school-flag"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--bright-text)] text-2xl"}>Senior Secondary (Class XII), CBSE</p>
              <p className={"text-[var(--gray-text)]"}>Everest KenBridge Senior Secondary School (EKBS),
                Mayiladuthurai</p>
              <p className={"text-[var(--gray-text)]"}>2022 - 2023</p>
              <p className={"text-[var(--gray-text)]"}>Percentage: 95%</p>
            </div>
          </li>
          <li className={"relative"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-school-flag"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--bright-text)] text-2xl"}>Secondary (Class X), CBSE</p>
              <p className={"text-[var(--gray-text)]"}>Everest KenBridge Senior Secondary School (EKBS),
                Mayiladuthurai</p>
              <p className={"text-[var(--gray-text)]"}>2020 - 2021</p>
              <p className={"text-[var(--gray-text)]"}>Percentage: 95%</p>
            </div>
          </li>
        </ul>
      </ContextBox>
      <ContextBox>
        <ul className={"flex flex-col gap-6 border-l-2 border-[var(--secondary-bg)] pl-10"}>
          <li className={"relative"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-terminal"></i>
            </div>
            <div className={"flex items-center h-fit"}>
              <p className={"text-[var(--bright-text)] text-4xl"}>Technical Skills</p>
            </div>
          </li>
          <li className={"relative"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--bright-text)] text-2xl"}>Languages</p>
              <div className={"grid grid-cols-2"}>
                <div>
                  <p className={"text-[var(--gray-text)]"}>C++</p>
                  <p className={"text-[var(--gray-text)]"}>Python</p>
                  <p className={"text-[var(--gray-text)]"}>Java</p>
                  <p className={"text-[var(--gray-text)]"}>Kotlin</p>
                </div>
                <div>
                  <p className={"text-[var(--gray-text)]"}>HTML</p>
                  <p className={"text-[var(--gray-text)]"}>CSS</p>
                  <p className={"text-[var(--gray-text)]"}>JavaScript</p>
                </div>
              </div>
            </div>
          </li>
          <li className={"relative"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-folder-tree"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--bright-text)] text-2xl"}>Frameworks / Libraries</p>
              <div className={"grid grid-cols-2"}>
                <div>
                  <p className={"text-[var(--gray-text)]"}>React</p>
                  <p className={"text-[var(--gray-text)]"}>Spring Boot</p>
                  <p className={"text-[var(--gray-text)]"}>Tailwind CSS</p>
                </div><div>
                  <p className={"text-[var(--gray-text)]"}>Tensorflow</p>
                  <p className={"text-[var(--gray-text)]"}>Keras</p>
                  <p className={"text-[var(--gray-text)]"}>OpenCV</p>
                </div>
              </div>
            </div>
          </li>
          <li className={"relative"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-database"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--bright-text)] text-2xl"}>Databases</p>
              <p className={"text-[var(--gray-text)]"}>MySQL</p>
              <p className={"text-[var(--gray-text)]"}>Mongo DB</p>
            </div>
          </li>
        </ul>
      </ContextBox>
      <ContextBox>
        <ul className={"flex flex-col gap-6 border-l-2 border-[var(--secondary-bg)] pl-10"}>
          <li className={"relative h-15"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-book"></i>
            </div>
            <div className={"flex items-center h-fit"}>
              <p className={"text-[var(--bright-text)] text-4xl"}>Achievements</p>
            </div>
          </li>
          <li className={"relative flex items-center"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-fire-flame-curved"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--gray-text)] text-xl"}>Solved 800+ problems on Leetcode</p>
            </div>
          </li>
          <li className={"relative flex items-center"}>
            <div
              className={"absolute w-10 h-10 flex items-center justify-center -left-10 -translate-x-1/2 bg-[var(--primary-bg)] text-[var(--secondary-text)] text-xl  border border-[var(--secondary-bg)] rounded-xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110"}>
              <i className="fa-solid fa-school-flag"></i>
            </div>
            <div className={"flex flex-col"}>
              <p className={"text-[var(--gray-text)] text-xl"}>Built 20+ coding projects across web, AI, and app development.</p>
            </div>
          </li>
        </ul>
      </ContextBox>

    </div>
  )
}

export default Resume;