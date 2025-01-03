import React from "react";
import { CiCoffeeCup } from "react-icons/ci";

import {
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="block dark:bg-gray-900">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="sm:flex-row flex justify-between flex-col">
          <h2 className="font-bold text-3xl md:text-5xl w-full max-w-xl inline-flex items-center dark:text-white">
            Your Cozy Coffee Spot{" "}
            <CiCoffeeCup
              className="text-black ml-2 dark:text-white"
              style={{ fontSize: "1em" }}
            />
          </h2>

          <div className="mt-8 md:mt-0">
            {/* Address with clickable Google directions link */}
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />
              <p className="text-gray-500 text-sm sm:text-base">
                <span className="group relative">
                  <a
                    href="https://www.google.com/maps?q=6+Ronalds+Road,+Highbury,+LONDON+N5+1XH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                    aria-label="google location 6 Ronalds Road, Highbury, London"
                  >
                    6 Ronalds Road, Highbury, London
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />
              <p className="text-gray-500 text-sm sm:text-base">
                <span className="group relative">
                  <a
                    href="https://maps.app.goo.gl/ugWVvKbhbvi3irsf9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                    aria-label="google location 3A High St, Bishop's Stortford, Londond"
                  >
                    3A High St, Bishop&apos;s Stortford, London
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </p>
            </div>
            {/* Phone number with clickable link */}
            <div className="mb-4 flex items-center">
              <FaPhone className="text-gray-500 mr-3" />
              <p className="text-gray-500 text-sm sm:text-base">
                <span className="group relative">
                  <a
                    aria-label="phone number +441279654004"
                    href="tel:+441279654004"
                    className="hover:text-blue-600"
                  >
                    +44 1279 654 004
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </p>
            </div>
            {/* Instagram */}
            <div className="mb-4 flex items-center">
              <FaInstagram className="text-gray-500 mr-3" />
              <p className="text-gray-500 text-sm sm:text-base">
                <span className="group relative">
                  <a
                    href="https://www.instagram.com/lepechemignonuk/"
                    target="_blank"
                    aria-label="ING lepechemignonuk"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    @peche_mignon
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </p>
            </div>
            {/* Email with clickable mailto link */}
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-gray-500 mr-3" />
              <p className="text-gray-500 text-sm sm:text-base">
                <span className="group relative">
                  <a
                    href="mailto:feedback@lepechemignon.co.uk"
                    aria-label="email Address feedback@lepechemignon.co.uk"
                    className="hover:text-blue-600"
                  >
                    feedback@lepechemignon.co.uk
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-14 w-full border-b border-black mt-16"></div>
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <p className="text-gray-500 text-sm sm:text-base text-center">
            © le peche mignon {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
