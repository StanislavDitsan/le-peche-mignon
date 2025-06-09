"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimationObserver from "./AnimationObserver";

const images = [
  "/la-peche-foodie.avif",
  "/la-peche-cafe-uk.avif",
  "/pechemignon_coffee.webp",
  "/la-peche-best-coffee.avif",
];

const aboutTexts = [
  `Tucked away in the heart of Bishop's Stortford, Le Péché Mignon is a hidden gem where French-inspired comfort meets genuine hospitality. Whether you're stopping by for the best flat white in town, a soul-warming Tartiflette, or a slice of something sweet, every visit feels like a special occasion.`,
  `From intimate birthday celebrations to relaxed weekend brunches, our guests come back for the warm welcome, impeccable service, and first-class food and wine. We're proud to cater for all dietary needs and love creating memorable experiences—whether it's your first visit or your fiftieth.`,
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
    }, 8000); // Text changes every 8 seconds

    return () => {
      clearInterval(imgInterval);
      clearInterval(textInterval);
    };
  }, []);

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
              className="flex flex-col justify-center gap-5 rounded-2xl border border-[#c18a52] p-10 sm:p-20 h-full bg-white/70 dark:bg-gray-900/70"
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
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
}
