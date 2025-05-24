"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCoffee } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { BiCoffeeTogo } from "react-icons/bi";
import { motion } from "framer-motion";

// Use only static variants, and control delay via transition prop
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Landing = () => {
  return (
    <div className="relative flex flex-col min-h-screen justify-center items-center overflow-auto">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/testvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      <main className="flex flex-col flex-1 justify-center items-center py-10 z-20 w-full">
        <motion.div
          className="mb-8 justify-items-center text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo */}
          <Image
            src="/peche_mignon_logo.png"
            alt="Le Péché Mignon Logo"
            width={240}
            height={96}
            className="w-40 md:w-60 h-auto mb-4 mx-auto"
            priority
          />
          <p className="font-semibold uppercase mt-6 mb-8 text-gray-300">
            Select your preferred location
          </p>
        </motion.div>

        <div className="flex flex-row gap-8 flex-wrap justify-center ">
          {/* Location Card 1 */}
          <motion.div
            className="bg-white shadow-lg p-6 text-center mb-5 rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-xl backdrop-blur-sm bg-white/20 relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl font-semibold mb-5 text-[#fff] lg:text-2xl">
              <CiCoffeeCup className="inline-block mr-2 text-[#fff]" /> Highbury
            </h2>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="/highbury">
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Our Website
                </button>
              </Link>
              <Link href="/location1/menu">
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Get Directions
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Location Card 2 */}
          <motion.div
            className="bg-white shadow-lg p-6 text-center mb-5 rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-xl relative backdrop-blur-sm bg-white/20"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl font-semibold mb-5 text-[#fff] lg:text-2xl">
              <BiCoffeeTogo className="inline-block mr-2 text-[#fff]" />{" "}
              Bishop&apos;s Stortford
            </h2>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="/bishopsstortford">
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Our Website
                </button>
              </Link>
              <Link href="/location2/menu">
                <button className="button px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  Get Directions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <motion.footer
        className="flex justify-center items-center w-full py-4 mt-4 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <p className="text-white flex items-center gap-2">
          <FaCoffee className="text-[#ac6936]" /> Powered by Le Péché Mignon
        </p>
      </motion.footer>
    </div>
  );
};

export default Landing;
