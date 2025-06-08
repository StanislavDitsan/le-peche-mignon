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

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 3-second image transition

    return () => clearInterval(interval);
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
              <p className="text-sm text-gray-500 sm:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur auctor nunc at nunc congue, ac feugiat sapien
                sollicitudin. Sed tincidunt sem at dui efficitur, id facilisis
                lorem tincidunt.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur auctor nunc at nunc congue, ac feugiat sapien
                sollicitudin. Sed tincidunt sem at dui efficitur, id facilisis
                lorem tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
}
