"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const lora = Lora({ subsets: ["latin"] });

const carouselItems = [
  {
    src: "/la-peche-cafe-uk.avif",
    alt: "Carousel Image 0",
    label: "New Location!",
  },
  {
    src: "/Le-Péché-Mignon.2.jpg",
    alt: "Carousel Image 1",
    label: "Family friendly outdoor space",
  },
  {
    src: "/la-peche-coffee.webp",
    alt: "Artisan coffee & fresh pastries",
    label: "Artisan coffee & fresh pastries",
  },
  // {
  //   src: "/Le-Péché-Mignon.3.jpg",
  //   alt: "Carousel Image 3",
  //   label: "Taste of local producers in Highbury",
  // },
  {
    src: "/catering-service.avif",
    alt: "Delicious food and more to savor",
    label: "Delicious food and more to savor",
  },
  {
    src: "/le-peche-mignon-food-store2.avif",
    alt: "Gourmet food offerings",
    label: "Gourmet food offerings",
  },
  {
    src: "/le-peche-best-wine.avif",
    alt: "Carousel Image 4",
    label: "Beautiful selection of natural and biodynamic wines",
  },
];

export default function EmblaCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      embla?.scrollNext();
    }, 6000);
  }, [embla]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  }, []);

  useEffect(() => {
    if (!embla) return;

    startAutoScroll();

    embla.on("pointerDown", stopAutoScroll);
    embla.on("pointerUp", startAutoScroll);

    return () => {
      stopAutoScroll();
      embla.off("pointerDown", stopAutoScroll);
      embla.off("pointerUp", startAutoScroll);
    };
  }, [embla, startAutoScroll, stopAutoScroll]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div className="relative flex flex-col w-full px-4 sm:px-8 lg:px-32 xl:px-80">
      {/* Carousel viewport */}
      <div
        className="embla__viewport overflow-hidden rounded-3xl"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {carouselItems.map((item, index) => (
            <div className="embla__slide relative min-w-full" key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={1900}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-6 px-4 text-center">
                <span
                  className={`${lora.className} text-white text-sm sm:text-base lg:text-xl bg-black/60 px-4 py-2 rounded-md backdrop-blur-sm`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons below the carousel, right-aligned (desktop only) */}
      <div className="hidden lg:flex justify-end mt-4 pr-4 space-x-4">
        <button
          aria-label="button previous"
          onClick={scrollPrev}
          className="p-2 bg-white dark:bg-gray-800 shadow-md rounded-full dark:text-white"
          data-aos="zoom-in"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          aria-label="button next"
          onClick={scrollNext}
          className="p-2 bg-white dark:bg-gray-800 shadow-md rounded-full dark:text-white"
          data-aos="zoom-in"
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
