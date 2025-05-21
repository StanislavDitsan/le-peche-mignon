import Link from "next/link";
import React from "react";
import { FaCoffee, FaDirections, FaCalendarAlt } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { BiCoffeeTogo } from "react-icons/bi";

const Landing = () => {
  return (
    <div className="relative flex flex-col min-h-screen justify-center items-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/testvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      <main className="flex flex-col flex-1 justify-center items-center py-10 z-20">
        <div className="mb-8 justify-items-center text-center">
          {/* Logo */}
          <img
            src="/peche_mignon_logo.png"
            alt="Le Péché Mignon Logo"
            className="w-40 h-auto mb-4"
          />
          <p className="font-semibold uppercase mt-6 mb-8 text-gray-300">
            Select your preferred location
          </p>
        </div>

        <div className="flex flex-row gap-8 flex-wrap justify-center">
          {/* Location Card 1 */}
          <div className="bg-white shadow-lg p-6 text-center mb-5 rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-xl backdrop-blur-sm bg-white/20  relative">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              <CiCoffeeCup className="inline-block mr-2 text-[#fff]" /> Highbury
            </h2>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="/highbury" legacyBehavior>
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Our Website
                </button>
              </Link>
              <Link href="/location1/menu" legacyBehavior>
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Get Directions
                </button>
              </Link>
            </div>
          </div>

          {/* Location Card 2 */}
          <div className="bg-white shadow-lg p-6 text-center mb-5 rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-xl relative backdrop-blur-sm bg-white/20">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              <BiCoffeeTogo className="inline-block mr-2 text-[#fff]" />{" "}
              Bishop's Stortford
            </h2>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="/location2/book" legacyBehavior>
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Our Website
                </button>
              </Link>
              <Link href="/location2/menu" legacyBehavior>
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Get Directions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center w-full py-4 mt-4 z-20">
        <p className="text-white flex items-center gap-2">
          <FaCoffee className="text-[#ac6936]" /> Powered by Le Péché Mignon
        </p>
      </footer>
    </div>
  );
};

export default Landing;
