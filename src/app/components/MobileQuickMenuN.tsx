"use client";
import { useEffect, useState } from "react";
import { FaBars, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";
import OpenTableWidget from "./OpenTableWidget"; // Make sure this is imported

export default function MobileQuickMenu() {
  const [showButton, setShowButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = [
    {
      label: "Menu",
      icon: <PiForkKnifeFill className="text-[20px]" />,
      onClick: () => setShowPdfModal(true),
    },
    // {
    //   label: "Booking",
    //   icon: <MdEditCalendar className="text-[20px]" />,
    //   onClick: () => setIsBookingOpen(true),
    // },
    {
      label: "Map",
      icon: <FaMapMarkerAlt className="text-[20px]" />,
      href: "https://maps.app.goo.gl/srWBG56Em3oGgUbs5",
      target: "_blank",
      ariaLabel: "Open Google Maps",
    },
    {
      label: "Call",
      icon: <FaPhone className="text-[20px]" />,
      href: "tel:020 7607 1826",
    },
  ];

  return (
    <div>
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative w-[180px] h-[180px]">
            {actions.map((action, i) => {
              const radius = 95;
              const angle = (Math.PI / 2 / (actions.length - 1)) * i;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={action.label}
                  className="absolute transition-all duration-500 ease-out"
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
                      target={action.target}
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full 
                        text-black dark:text-white bg-white/30 dark:bg-black/30 
                        border border-white/20 shadow-md backdrop-blur-md 
                        hover:scale-110 transition-transform"
                      aria-label={action.ariaLabel || action.label}
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

      {/* PDF Menu Modal */}
      {showPdfModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowPdfModal(false)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-xl mx-4 p-4"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPdfModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white text-3xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "141.4286%",
                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                marginTop: "1.6em",
                marginBottom: "0.9em",
                overflow: "hidden",
                borderRadius: "8px",
                willChange: "transform",
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none",
                }}
                src="https://www.canva.com/design/DAGnuOE99P4/naUQTqLdy_FZK28iAzitQw/view?embed"
                allowFullScreen
                title="PDF Menu"
              ></iframe>
            </div>
            <a
              href="https://www.canva.com/design/DAGnuOE99P4/naUQTqLdy_FZK28iAzitQw/view"
              target="_blank"
              rel="noopener"
              className="block text-center text-[#ac6936] font-semibold underline mt-2"
            >
              Open in new tab
            </a>
          </div>
        </div>
      )}

      {/* Booking Modal (OpenTableWidget) */}
      <OpenTableWidget
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
