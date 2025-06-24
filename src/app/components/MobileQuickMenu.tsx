"use client";
import { useEffect, useState } from "react";
import { FaBars, FaChevronUp, FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";

export default function MobileQuickMenu() {
  const [showButton, setShowButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const actions = [
    {
      label: "Top",
      icon: <FaChevronUp />,
      onClick: () => scrollTo("html"),
    },
    {
      label: "Menu",
      icon: <PiForkKnifeFill />,
      onClick: () => scrollTo("#menu"),
    },
    {
      label: "Map",
      icon: "📍",
      onClick: () => scrollTo("#footer"),
    },
    {
      label: "Call",
      icon: <FaPhone />,
      href: "tel:+1234567890",
    },
  ];

  return (
    <div className="md:hidden">
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative w-[180px] h-[180px]">
            {/* Animated radial buttons */}
            {actions.map((action, i) => {
              const radius = 95;
              const angle = (Math.PI / 2 / (actions.length - 1)) * i;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={action.label}
                  className={`absolute transition-all duration-500 ease-out`}
                  style={{
                    right: menuOpen ? `${x + 6}px` : `24px`,
                    bottom: menuOpen ? `${y + 6}px` : `24px`,
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "scale(1)" : "scale(0.5)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {action.href ? (
                    <a
                      href={action.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full 
            text-black dark:text-white bg-white/30 dark:bg-black/30 
            border border-white/20 shadow-md backdrop-blur-md 
            hover:scale-110 transition-transform"
                      aria-label={action.label}
                    >
                      {action.icon}
                    </a>
                  ) : (
                    <button
                      onClick={action.onClick}
                      className="w-10 h-10 flex items-center justify-center rounded-full 
            text-black dark:text-white bg-white/30 dark:bg-black/30 
            border border-white/20 shadow-md backdrop-blur-md 
            hover:scale-110 transition-transform"
                      aria-label={action.label}
                    >
                      {action.icon}
                    </button>
                  )}
                </div>
              );
            })}

            {/* FAB Toggle */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Quick Menu Toggle"
              className={`absolute bottom-0 right-0 w-10 h-10 flex items-center justify-center 
    rounded-full text-black dark:text-white bg-white/30 dark:bg-black/30 
    border border-white/20 shadow-md backdrop-blur-md 
    hover:scale-110 transition-transform 
    ${menuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`}
            >
              {menuOpen ? <IoClose size={20} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
