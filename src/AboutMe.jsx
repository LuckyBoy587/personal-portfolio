import { motion } from "framer-motion";
import ContextBox from "./utility/context-box.jsx";
import TextType from "./components/TextType.jsx";
import ShinyText from "./components/ShinyText.jsx";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  return (
    <div className={"flex flex-col gap-8 min-w-[min(600px, 100vw)] blur-fade-in origin-top"}>
      <ContextBox>
        <div className="flex items-center gap-5 group mb-4">
          <div
            /* Simplified shadow and removed rotate for GPU performance */
            className="flex items-center justify-center w-14 h-14 text-accent-secondary text-2xl rounded-2xl bg-secondary-bg/50 border border-card-border transition-all duration-300 group-hover:scale-105 group-hover:border-accent-primary/50">
            <i className="fa-regular fa-address-card"></i>
          </div>
          <div>
            <h2 className="text-bright-text text-4xl font-bold tracking-tight heading-font">About Me</h2>
            <div className="h-1 w-0 group-hover:w-full bg-accent-primary transition-all duration-500 rounded-full"></div>
          </div>
        </div>
        <section className={"flex flex-col gap-5"}>
          <p className={"text-gray-text leading-relaxed text-lg"}>
            Hey there! I'm <ShinyText text="Kowshik Baskaran"></ShinyText>, a curious and passionate Information
            Technology student who's always chasing that next line of code and the thrill of building something
            impactful.
          </p>

          <p className={"text-gray-text leading-relaxed text-lg"}>
            Currently in my third year of B.Tech IT, I spend my days diving deep
            into <span className="text-accent-secondary">Data Structures & Algorithms</span>, exploring the vast world of AI and Machine Learning, and crafting
            projects with ReactJS, Kotlin, and Spring Boot.
          </p>

          <p className={"text-gray-text leading-relaxed text-lg"}>
            Beyond code, I'm passionate about anime and gaming. In my free time, you'll often find me in the worlds of <span className="text-accent-primary">Genshin Impact</span> or Minecraft.
          </p>
        </section>
      </ContextBox>

      <ContextBox>
        <div className="flex items-center gap-5 group mb-8">
          <div
            /* Simplified shadow and removed rotate for GPU performance */
            className="flex items-center justify-center w-14 h-14 text-accent-secondary text-2xl rounded-2xl bg-secondary-bg/50 border border-card-border transition-all duration-300 group-hover:scale-105 group-hover:border-accent-primary/50">
            <i className="fa-solid fa-code-branch"></i>
          </div>
          <div>
            <h2 className="text-bright-text text-4xl font-bold tracking-tight heading-font">Tech Stack</h2>
            <div className="h-1 w-0 group-hover:w-full bg-accent-secondary transition-all duration-500 rounded-full"></div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {[
            { icon: "fa-brands fa-java", label: "Java", color: "#f89820" },
            { icon: "fa-solid fa-leaf", label: "Spring Boot", color: "#6db33f" },
            { icon: "fa-solid fa-mountain-sun", label: "Kotlin", color: "#7f52ff" },
            { icon: "fa-brands fa-python", label: "Python", color: "#3776ab" },
            { icon: "fa-solid fa-brain", label: "Tensorflow", color: "#ff6f00" },
            { icon: "fa-solid fa-code-branch", label: "VCS", color: "#f05032" },
            { icon: "fa-brands fa-react", label: "ReactJS", color: "#61dafb" },
            { icon: "fa-solid fa-database", label: "MongoDB", color: "#47a248" },
            { icon: "fa-solid fa-wind", label: "Tailwind CSS", color: "#06b6d4" },
          ].map(({ icon, label, color }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{
                y: -2, /* Reduced distance */
                transition: { duration: 0.2 }
              }}
              className="relative group p-4 flex flex-col items-center justify-center gap-3 rounded-2xl bg-secondary-bg/30 border border-card-border hover:border-accent-primary/30 hover:bg-secondary-bg/50 transition-colors duration-300"
            >
              <div
                className="w-12 h-12 flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-105"
                style={{ color: color }}
              >
                <i className={icon}></i>
              </div>
              <p className="text-sm font-medium text-gray-text group-hover:text-bright-text transition-colors duration-300">{label}</p>

              {/* Removed absolute-positioned blur glow for GPU performance */}
            </motion.div>
          ))}
        </motion.div>
      </ContextBox>
    </div>
  );
};

export default AboutMe;