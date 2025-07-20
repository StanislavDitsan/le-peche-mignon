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
      href="https://maps.app.goo.gl/khimeTcTtJeGmJaRA"
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
  const [textManuallyChanged, setTextManuallyChanged] = useState(false);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    let textInterval: NodeJS.Timeout | null = null;

    if (!textManuallyChanged) {
      textInterval = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % aboutTexts.length);
      }, 6000);
    }

    return () => {
      clearInterval(imgInterval);
      if (textInterval) clearInterval(textInterval);
    };
  }, [textManuallyChanged]); // <-- track the flag in the effect

  // Remove text auto-switching, add manual arrow
  const handleNextText = () => {
    setTextManuallyChanged(true); // stop auto switching
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
              className="relative flex items-center h-[400px] w-full overflow-hidden rounded-2xl shadow-xl order-1 lg:order-none"
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
              className="flex flex-col justify-center gap-5 rounded-2xl border border-[#c18a52] p-10 sm:p-20 h-full min-h-[320px] bg-white/70 dark:bg-gray-900/70 relative"
            >
              <h2
                data-aos="zoom-in"
                className="text-3xl font-bold md:text-6xl dark:text-white"
              >
                About Us
              </h2>
              <p className="text-sm text-gray-500 sm:text-base lg:text-lg transition-opacity duration-1000 ease-in-out ">
                {aboutTexts[currentText]}
              </p>
              <button
                aria-label="Next About Text"
                onClick={handleNextText}
                className="absolute bottom-6 right-6 p-3 rounded-full text-[#c18a52]  hover:bg-[#e6ddd6ab] dark:hover:bg-[#1a1410e9] transition shadow-lg"
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
