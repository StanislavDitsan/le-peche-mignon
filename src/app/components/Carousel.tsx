"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const lora = Lora({ subsets: ["latin"] });

const carouselItems = [
  {
    src: "/la-peche.jpg",
    alt: "Carousel Image 0",
    label: "New Location!",
  },
  {
    src: "/Le-Péché-Mignon.2.jpg",
    alt: "Carousel Image 1",
    label: "Family friendly outdoor space",
  },
  {
    src: "/Artisan-coffee.jpg",
    alt: "Artisan coffee",
    label: "Artisan coffee",
  },
  {
    src: "/Le-Péché-Mignon.3.jpg",
    alt: "Carousel Image 3",
    label: "Taste of local producers in Highbury",
  },
  {
    src: "/pechemignon_home_pic1.jpg",
    alt: "Carousel Image 4",
    label: "Delicious food and more to savor",
  },
];

export default function EmblaCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  // Auto-slide logic
  useEffect(() => {
    if (!embla) return;
    const autoScroll = setInterval(() => {
      embla.scrollNext(); // Scroll to the next slide
    }, 3000); // Adjust the interval (e.g., 3000ms for 3 seconds)

    return () => clearInterval(autoScroll); // Cleanup on unmount
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    embla.selectedScrollSnap(); // This was updating `selectedIndex`, but it's no longer needed
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselItems.map((item, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`${lora.className} embla__label`}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Rounded Previous Button */}
      <button
        aria-label="button previous"
        className="hidden md:flex absolute top-1/2 left-4 z-10 items-center justify-center w-12 h-12 text-white bg-black rounded-full transform -translate-y-1/2 hover:bg-black/70"
        onClick={scrollPrev}
      >
        <FaArrowLeft className="text-xl" />
      </button>
      {/* Rounded Next Button */}
      <button
        aria-label="button next"
        className="hidden md:flex absolute top-1/2 right-4 z-10 items-center justify-center w-12 h-12 text-white bg-black rounded-full transform -translate-y-1/2 hover:bg-black/70"
        onClick={scrollNext}
      >
        <FaArrowRight className="text-xl" />
      </button>
    </div>
  );
}
