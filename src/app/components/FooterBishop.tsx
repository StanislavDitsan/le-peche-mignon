import React from "react";
import { CiCoffeeCup } from "react-icons/ci";
import {
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
// import AnimationObserver from "./AnimationObserver";

const FooterBishop = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="block dark:bg-gray-900">
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="sm:flex-row flex justify-between flex-col">
          <h2 className="font-bold text-3xl md:text-5xl w-full max-w-xl inline-flex items-center dark:text-white">
            Le Péché Mignon{" "}
            <CiCoffeeCup
              className="text-black ml-2 dark:text-white transition-transform duration-300 hover:scale-110"
              style={{ fontSize: "1em" }}
            />
          </h2>
          <div className="mt-8 md:mt-0 space-y-4">
            <div className="flex items-center">
              <FaClock className="text-gray-500 mr-3 transition-transform duration-300 hover:scale-110" />
              <span className="text-gray-500 text-sm sm:text-base">
                Open everyday 8:00 &mdash; 4pm <br /> Friday and Saturday
                6&mdash;11pm
              </span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-500 mr-3 transition-transform duration-300 hover:scale-110" />
              <a
                href="https://maps.app.goo.gl/ugWVvKbhbvi3irsf9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 text-gray-500 text-sm sm:text-base transition-colors"
                aria-label="google location 3A High St, Bishop's Stortford, London"
              >
                3A High St, Bishop&apos;s Stortford, London
              </a>
            </div>

            <div className="flex items-center">
              <FaPhone className="text-gray-500 mr-3 transition-transform duration-300 hover:scale-110" />
              <a
                aria-label="phone number +441279654004"
                href="tel:+441279654004"
                className="hover:text-blue-600 text-gray-500 text-sm sm:text-base transition-colors"
              >
                +44 1279 654 004
              </a>
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-gray-500 mr-3 transition-transform duration-300 hover:scale-110" />
              <a
                href="https://www.instagram.com/lepechemignonuk/"
                target="_blank"
                aria-label="Instagram lepechemignonuk"
                rel="noopener noreferrer"
                className="hover:text-blue-600 text-gray-500 text-sm sm:text-base transition-colors"
              >
                @lepechemignonuk
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-3 transition-transform duration-300 hover:scale-110" />
              <a
                href="mailto:feedback@lepechemignon.co.uk"
                aria-label="email Address feedback@lepechemignon.co.uk"
                className="hover:text-blue-600 text-gray-500 text-sm sm:text-base transition-colors"
              >
                feedback@lepechemignon.co.uk
              </a>
            </div>
          </div>
        </div>
        <div className="mb-14 w-full border-b border-black mt-16"></div>
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <p className="text-gray-500 text-sm sm:text-base text-center">
            © le peche mignon {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBishop;
