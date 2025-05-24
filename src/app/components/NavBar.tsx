"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lora } from "next/font/google";
import AnimationObserver from "./AnimationObserver";
const lora = Lora({ subsets: ["latin"] });

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // Ensure the dark mode class is applied only after the component is mounted
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

  // Function to toggle dark mode
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

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hide/show navbar on scroll (desktop only)
  useEffect(() => {
    if (!isMounted) return;
    // Only enable scroll effect if screen is at least 768px wide (md breakpoint)
    const isDesktop = () => window.innerWidth >= 768;
    let lastY = window.scrollY;
    const threshold = 24;

    const handleScroll = () => {
      if (!isDesktop()) return; // Do nothing on mobile
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

  if (!isMounted) return null; // Avoid rendering on the server side

  return (
    <AnimationObserver>
      <nav
        className={`bg-white border-gray-200 dark:bg-gray-900 sticky z-50 top-0 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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

          {/* Hamburger menu toggle button */}
          <button
            data-aos="fade-left"
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-label="Hamburger menu toggle button"
            aria-expanded={isMenuOpen ? "true" : "false"}
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

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <div className={lora.className}>
              <ul
                data-aos="fade-down"
                className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 "
              >
                <li>
                  <Link
                    href="/"
                    className="relative block py-2 px-3 text-black text-lg rounded md:bg-transparent md:p-0 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500"
                    aria-current="page"
                    aria-label="Home page"
                  >
                    Main
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/highbury"
                    className="relative block py-2 px-3 text-black text-lg rounded md:bg-transparent md:p-0 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500"
                    aria-current="page"
                    aria-label="Home page"
                  >
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="highbury/#coffee"
                    aria-label="coffee section"
                    className="relative block py-2 px-3 text-gray-900 text-lg rounded hover:text-gray-500 md:bg-transparent md:p-0 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500"
                  >
                    Coffee
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="menu section"
                    href="highbury/#menu"
                    className="relative block py-2 px-3 text-gray-900 text-lg rounded hover:text-gray-500 md:bg-transparent md:p-0 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500"
                  >
                    Menu
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="foodstore section"
                    href="highbury/#foodstore"
                    className="relative block py-2 px-3 text-gray-900 text-lg rounded hover:text-gray-500 md:bg-transparent md:p-0 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500"
                  >
                    Food Store
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="highbury/#findus"
                    aria-label="find us section"
                    className="relative block py-2 px-3 text-gray-900 text-lg rounded hover:text-gray-500 md:bg-transparent md:p-0 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500"
                  >
                    Find Us
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    aria-label="gallery section"
                    className="relative block py-2 px-3 text-gray-900 text-lg rounded hover:text-gray-500 md:bg-transparent md:p-0 dark:text-white dark:hover:text-gray-300 group md:hover:text-gray-500"
                  >
                    Gallery
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 md:group-hover:w-full"></span>
                  </Link>
                </li>

                {/* Dark mode toggle */}
                <li>
                  <div>
                    <label className="switch" htmlFor="switch">
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
      </nav>
    </AnimationObserver>
  );
}
