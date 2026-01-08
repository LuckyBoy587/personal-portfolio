import { useRef } from "react";

const Branding = () => {
  const brandingRef = useRef(null); // Create a ref

  return (
    <div
      ref={brandingRef}
      className={`flex flex-col md:flex-row items-center gap-8 w-fit mx-auto h-fit p-5 rounded-2xl animate-right-to-left transition-all duration-300 glass-card max-h-none border border-card-border/40 shadow-xl`}>

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-2 pr-2">
        <div className="relative group">
          <div className="flex rounded-full overflow-hidden w-24 h-24 md:w-28 md:h-28 mx-auto border-2 border-accent-primary/20 p-1 bg-secondary-bg/30">
            <img className="w-full h-full object-cover rounded-full" src="./me.jpg" alt="Me" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-[var(--primary-text)] text-lg font-bold tracking-tight heading-font leading-tight">
            Kowshik Baskaran
          </h1>
          <div className="mt-1 text-[var(--primary-text)] bg-accent-primary/10 border border-accent-primary/20 w-fit mx-auto px-2 py-0.5 rounded-md text-[10px] uppercase tracking-widest font-medium">
            Under Graduate
          </div>
        </div>

        {/* Social Icons integrated here for compactness */}
        <div className="flex gap-3 text-lg text-gray-text mt-1">
          {[
            { icon: "fa-github", url: "https://github.com/LuckyBoy587" },
            { icon: "fa-linkedin", url: "https://www.linkedin.com/in/kowshi587/" },
            { icon: "fa-instagram", url: "https://www.instagram.com/luckyboy_587" },
            { icon: "fa-x-twitter", url: "https://x.com/luckyboy_587" }
          ].map(({ icon, url }) => (
            <a href={url} key={url} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors duration-200">
              <i className={`fa-brands ${icon}`} />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-card-border to-transparent opcity-50" />
      <div className="md:hidden w-full h-px bg-card-border my-1" />

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 py-1">
        {[
          { icon: "fa-regular fa-envelope", label: "Email", value: "kowshi587@gmail.com" },
          { icon: "fa-solid fa-mobile", label: "Phone", value: "8778987449" },
          { icon: "fa-regular fa-calendar-days", label: "Birthday", value: "04 May 2006" },
          { icon: "fa-solid fa-location-dot", label: "Location", value: "Tamil Nadu, India" }
        ].map(({ icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 text-accent-secondary text-base bg-secondary-bg/30 border border-card-border/50 rounded-lg">
              <i className={icon} />
            </div>
            <div className="min-w-0">
              <p className="text-gray-text text-[9px] uppercase tracking-wider font-semibold opacity-70">{label}</p>
              <p className="text-bright-text font-medium text-sm">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branding;
