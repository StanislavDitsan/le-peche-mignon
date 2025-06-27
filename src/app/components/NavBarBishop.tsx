"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lora } from "next/font/google";
import AnimationObserver from "./AnimationObserver";
const lora = Lora({ subsets: ["latin"] });

export default function NavBarBishop() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const theme = localStorage.getItem("color-theme");
    if (theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMounted) return;
    const isDesktop = () => window.innerWidth >= 768;
    let lastY = window.scrollY;
    const threshold = 24;

    const handleScroll = () => {
      if (!isDesktop()) return;
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) > threshold) {
        if (currentY > lastY && currentY > 50) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        lastY = currentY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  if (!isMounted) return null;

  const navLinks = [
    { href: "/", label: "Main" },
    { href: "/bishopsstortford", label: "Home" },
    { href: "bishopsstortford/#coffee", label: "Coffee" },
    { href: "bishopsstortford/#menu", label: "Menu" },
    { href: "bishopsstortford/#booktable", label: "Reservation" },
    { href: "bishopsstortford/#foodstore", label: "Food Store" },

    // { href: "/gallery", label: "Gallery" },
  ];

  return (
    <AnimationObserver>
      <nav
        className={`bg-white border-gray-200 dark:bg-gray-900 sticky z-50 top-0 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              data-aos="fade-right"
              src="/peche_mignon_logo.png"
              className="h-auto w-auto"
              alt="peche_mignon_logo.png"
              aria-label="peche_mignon_logo"
              width={80}
              height={100}
            />
          </Link>

          {/* Hamburger menu toggle button (mobile only) */}
          {!isMenuOpen && (
            <button
              data-aos="fade-down"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-300"
              aria-controls="navbar-default"
              aria-label="Hamburger menu toggle button"
              aria-expanded={isMenuOpen ? "true" : "false"}
              style={{ zIndex: 60 }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          )}

          {/* Desktop Nav */}
          <div className="hidden md:block md:w-auto">
            <div className={lora.className}>
              <ul className="font-medium flex flex-row md:space-x-8 rtl:space-x-reverse items-center">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="relative block py-2 px-3 text-black text-lg rounded md:bg-transparent md:p-0 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500 transition-all"
                      aria-label={item.label}
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
                {/* Dark mode toggle */}
                <li className="flex items-center justify-center ml-2">
                  <label
                    className="switch cursor-pointer flex items-center gap-2"
                    htmlFor="switch"
                  >
                    <input
                      id="switch"
                      type="checkbox"
                      className="circle"
                      aria-label="dark toggle button"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                    />
                    <svg
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="moon svg w-5 h-5"
                    >
                      <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                    </svg>
                    <div className="sun svg">
                      <span className="dot"></span>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Nav Backdrop */}
          <div
            className={`
              fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden
              ${
                isMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }
            `}
            aria-hidden={!isMenuOpen}
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Mobile Nav Menu */}
          <div
            className={`
              ${isMenuOpen ? "flex" : "hidden"}
              flex-col items-center justify-center
              w-full h-screen md:hidden
              transition-all duration-500
              bg-white/95 dark:bg-gray-900/95
              absolute top-0 left-0 shadow-2xl rounded-none
            `}
            id="navbar-default"
            style={{ zIndex: 50 }}
          >
            <div className="w-full flex flex-col items-center">
              {/* Close button for mobile menu */}
              <button
                type="button"
                onClick={toggleMenu}
                className="absolute top-6 right-6 z-50 md:hidden bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg ring-1 ring-black/10 dark:ring-white/10 dark:text-white transition-all duration-300 hover:bg-[#ac6936]/80 hover:text-white dark:hover:bg-[#ac6936]/80 dark:hover:text-white"
                aria-label="Close menu"
              >
                <svg
                  className="w-7 h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className={lora.className + " w-full"}>
                <ul className="font-medium flex flex-col gap-2 p-4 mt-2 ">
                  {navLinks.map((item, idx) => (
                    <li
                      key={item.label}
                      className={`
                        transition-all duration-500 ease-out
                        ${
                          isMenuOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-90 translate-y-8"
                        }
                        ${isMenuOpen ? `delay-[${idx * 80}ms]` : ""}
                      `}
                    >
                      <Link
                        href={item.href}
                        className="relative block py-4 px-6 text-xl rounded-xl text-gray-800 dark:text-white hover:bg-[#ac6936]/10 hover:text-[#ac6936] dark:hover:text-[#ac6936] group transition-all text-center"
                        aria-label={item.label}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                        <span className="absolute left-0 bottom-0 w-0 h-[2px]  transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                  {/* Dark mode toggle */}
                  {/* Dark mode toggle */}
                  <li className="flex items-center justify-center mt-4">
                    <div>
                      <label className="switch" htmlFor="switch">
                        <input
                          id="switch"
                          type="checkbox"
                          className="circle appearance-none w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors border-none shadow-none"
                          aria-label="dark toggle button"
                          checked={isDarkMode}
                          onChange={toggleDarkMode}
                        />
                        <svg
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="moon svg"
                        >
                          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                        </svg>
                        <div className="sun svg">
                          <span className="dot"></span>
                        </div>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </AnimationObserver>
  );
}
