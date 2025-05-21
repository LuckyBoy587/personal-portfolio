const AboutMe = () => {
  return (
    <div className={"flex flex-col gap-8"}>
      <div
        className={"flex flex-col h-fit w-full bg-[var(--primary-bg)] p-8 gap-4 rounded-2xl border-2 border-[var(--secondary-bg)]"}>
        <div className="flex items-center gap-4 group transition-all duration-300">
          <div
            className="flex items-center justify-center w-12 h-12 text-[var(--secondary-text)] text-2xl p-2 border border-[var(--secondary-bg)] rounded-2xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform group-hover:scale-110">
            <i className="fa-regular fa-address-card font-light"></i>
          </div>
          <p className="text-[var(--bright-text)] text-4xl">About Me</p>
        </div>
        <section className={"flex flex-col gap-4"}>
          <p className={"text-[var(--gray-text)]"}>Hey there! I'm Kowshik Baskaran, a curious and passionate Information
            Technology student who's always chasing that next line of code and the thrill of building something
            impactful.</p>

          <p className={"text-[var(--gray-text)]"}>Currently in my second year of B.Tech IT, I spend my days diving deep
            into Data Structures & Algorithms, exploring the vast world of AI and Machine Learning, and crafting
            projects with ReactJS, Kotlin, and Spring Boot. Whether it's a chatbot that understands sarcasm or a music
            player coded from scratch, I love bringing ideas to life through code.</p>

          <p className={"text-[var(--gray-text)]"}>Beyond my academic and technical interests, I'm passionate about
            anime, always keeping up with the latest series. In my free time, you'll often find me diving into Genshin
            Impact, and occasionally engaging in some competitive fun in Free Fire.</p>
        </section>
      </div>
      <div
        className={"flex flex-col h-fit w-full bg-[var(--primary-bg)] p-8 gap-4 rounded-2xl border-2 border-[var(--secondary-bg)]"}>
        <div className="flex items-center gap-4 group transition-all duration-300">
          <div
            className="flex items-center justify-center w-12 h-12 text-[var(--secondary-text)] text-2xl p-2 border border-[var(--secondary-bg)] rounded-2xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform group-hover:scale-110">
            <i className="fa-solid fa-file-pen"></i>
          </div>
          <p className="text-[var(--bright-text)] text-4xl">Tech Stack</p>
        </div>
        <div className={"grid grid-cols-3 text-[var(--gray-text)] min-w-min"}>
          <div className={"flex flex-col gap-4"}>{
            [
              {icon: "fa-brands fa-java", label: "Java"},
              {icon: "fa-solid fa-leaf", label: "Spring Boot"},
              {icon: "fa-solid fa-mountain-sun fa-rotate-90", label: "Kotlin"},
            ].map(({icon, label}) => (
              <div key={label} className="flex items-center gap-4 group transition-all duration-300">
                <div
                  className="flex items-center justify-center w-12 h-12 text-[var(--secondary-text)] text-2xl p-2 border border-[var(--secondary-bg)] rounded-2xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform group-hover:scale-110">
                  <i className={`${icon}`}></i>
                </div>
                <p>{label}</p>
              </div>
            ))
          }</div>
          <div className={"flex flex-col gap-4"}>{
            [
              {icon: "fa-brands fa-python", label: "Python"},
              {icon: "fa-solid fa-brain", label: "Tensorflow"},
              {icon: "fa-solid fa-code-branch", label: "VCS"},
            ].map(({icon, label}) => (
              <div key={label} className="flex items-center gap-4 group transition-all duration-300">
                <div
                  className="flex items-center justify-center w-12 h-12 text-[var(--secondary-text)] text-2xl p-2 border border-[var(--secondary-bg)] rounded-2xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform group-hover:scale-110">
                  <i className={`${icon}`}></i>
                </div>
                <p>{label}</p>
              </div>
            ))
          }</div><div className={"flex flex-col gap-4"}>{
            [
              {icon: "fa-brands fa-react", label: "ReactJS"},
              {icon: "fa-solid fa-database", label: "MongoDB"},
              {icon: "fa-solid fa-wind", label: "Tailwind CSS"},
            ].map(({icon, label}) => (
              <div key={label} className="flex items-center gap-4 group transition-all duration-300">
                <div
                  className="flex items-center justify-center w-12 h-12 text-[var(--secondary-text)] text-2xl p-2 border border-[var(--secondary-bg)] rounded-2xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform group-hover:scale-110">
                  <i className={`${icon}`}></i>
                </div>
                <p>{label}</p>
              </div>
            ))
          }</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;