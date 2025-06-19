"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimationObserver from "./AnimationObserver";
import { FaArrowRight } from "react-icons/fa"; // Add this import

const images = [
  "/la-peche-foodie.avif",
  "/la-peche-cafe-uk.avif",
  "/pechemignon_coffee.webp",
  "/la-peche-best-coffee.avif",
];

const aboutTexts = [
  `After 18 years in Highbury, we decided to branch out. The decision was easy for our second site: our new home as a family: Bishop’s Stortford. We’re open every day from 8am to 4pm and we hope we have every base covered.`,
  <>
    Pop in for a morning coffee (or takeaway if you&apos;re against the clock),
    leisurely breakfast at the weekend, or stock up on store cupboard
    essentials, we hope we live up to our name! (Did you work it out?){" "}
    <a
      href="https://www.google.com/maps?q=6+Ronalds+Road,+Highbury,+LONDON+N5+1XH"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c18a52] hover:text-blue-800"
    >
      Our Highbury branch
    </a>
    <br />
    is still going strong if you are ever in the area.
  </>,
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Image changes every 3 seconds

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % aboutTexts.length);
    }, 6000); // Text changes every 10 seconds

    return () => {
      clearInterval(imgInterval);
      clearInterval(textInterval);
    };
  }, []);

  // Remove text auto-switching, add manual arrow
  const handleNextText = () => {
    setCurrentText((prev) => (prev + 1) % aboutTexts.length);
  };

  return (
    <AnimationObserver>
      <section className="lg:py-14 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-stretch">
            {/* Image Slideshow */}
            <div
              data-aos="fade-up"
              className="relative w-full h-[300px] sm:h-[400px] lg:h-auto overflow-hidden rounded-2xl"
            >
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt="About Us"
                  width={500}
                  height={500}
                  quality={100}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out rounded-2xl ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Content Block */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col justify-center gap-5 rounded-2xl border border-[#c18a52] p-10 sm:p-20 h-full bg-white/70 dark:bg-gray-900/70 relative"
            >
              <h2
                data-aos="zoom-in"
                data-aos-delay="400"
                className="text-3xl font-bold md:text-6xl dark:text-white"
              >
                About Us
              </h2>
              <p className="text-sm text-gray-500 sm:text-base lg:text-lg transition-opacity duration-1000 ease-in-out">
                {aboutTexts[currentText]}
              </p>
              <button
                aria-label="Next About Text"
                onClick={handleNextText}
                className="absolute bottom-6 right-6 p-3 rounded-full text-[#c18a52]  hover:bg-[#e6ddd6ab] transition shadow-lg"
                type="button"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
}
