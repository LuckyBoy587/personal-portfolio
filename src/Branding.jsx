import {useEffect, useRef, useState} from "react";

const Branding = () => {
  const brandingRef = useRef(null); // Create a ref
  const [topValue, setTopValue] = useState("8px"); // Default top value

  useEffect(() => {
    const updateTopValue = () => {
      if (brandingRef.current) {
        const componentHeight = brandingRef.current.offsetHeight;
        const newTopValue = `calc((min(100vh, 100%) - ${componentHeight}px) / 2)`;
        setTopValue(newTopValue);
      }
    };

    updateTopValue();
    window.addEventListener("resize", updateTopValue);
    window.addEventListener("scroll", updateTopValue);

    return () => {
      window.removeEventListener("resize", updateTopValue);
      window.removeEventListener("scroll", updateTopValue);
    };
  }, []);

  return (
    <div
      ref={brandingRef}
      className={`flex flex-col md:flex-row lg:flex-col lg:self-start self-center justify-center items-center gap-4 w-full lg:max-w-[300px] h-fit border border-[var(--secondary-bg)] p-8 bg-[var(--primary-bg)] min-w-[min(600px, 100vw)] lg:min-w-min rounded-2xl animate-right-to-left lg:sticky transition-all duration-300`}
      style={{top: topValue}}>
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="flex rounded-full overflow-hidden w-3/4 aspect-square mx-auto">
          <img className="w-full h-full object-cover" src="./me.jpg" alt="Me"/>
        </div>
        <p className="text-[var(--primary-text)] mt-3 text-2xl text-center font-semibold tracking-wide">Kowshik
          Baskaran</p>
        <div
          className="flex justify-center items-center mt-2 text-[var(--primary-text)] bg-[var(--secondary-bg)] w-fit px-3.5 py-1.5 rounded-lg animate-fade-in">
          <span>Under Graduate</span>
        </div>
      </div>

      <div className="w-full h-6 lg:visible lg:flex items-center">
        <div className="w-full h-0.5 bg-[var(--secondary-bg)]"/>
      </div>

      <div className="flex flex-col gap-4">
        {[
          {icon: "fa-regular fa-envelope", label: "Email", value: "kowshi587@gmail.com"},
          {icon: "fa-solid fa-mobile", label: "Phone", value: "8778987449"},
          {icon: "fa-regular fa-calendar-days", label: "Birthday", value: "04 May 2006"}
        ].map(({icon, label, value}) => (
          <div key={label} className="flex gap-4 group transition-all duration-300">
            <div
              className="flex items-center justify-center w-12 h-12 text-[var(--secondary-text)] text-2xl p-2 border border-[var(--secondary-bg)] rounded-2xl shadow-[0_0_10px_var(--secondary-bg)] transition-transform hover:scale-110">
              <i className={`${icon}`}/>
            </div>
            <div>
              <p className="text-[var(--gray-text)]">{label}</p>
              <p className="text-[var(--bright-text)]">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row md:flex-col lg:flex-row gap-6 mt-4 text-2xl text-[var(--gray-text)]">
        {[
          {icon: "fa-github", url: "https://github.com/LuckyBoy587"},
          {icon: "fa-linkedin", url: "https://www.linkedin.com/in/kowshi587/"},
          {icon: "fa-instagram", url: "https://www.instagram.com/luckyboy_587"},
          {icon: "fa-x-twitter", url: "https://x.com/luckyboy_587"}
        ].map(({icon, url}, i) => (
          <a href={url} key={url} target={"_blank"}>
            <i
              key={i}
              className={`fa-brands ${icon} hover:text-[var(--bright-text)] transition duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_6px_var(--secondary-bg)] cursor-pointer`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Branding;
