"use client";
import React, { useCallback, useEffect } from "react";
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
    alt: "Artisan coffee",
    label: "Artisan coffee",
  },
  {
    src: "/Le-Péché-Mignon.3.jpg",
    alt: "Carousel Image 3",
    label: "Taste of local producers in Highbury",
  },
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

  useEffect(() => {
    if (!embla) return;
    const autoScroll = setInterval(() => {
      embla.scrollNext();
    }, 6000);
    return () => clearInterval(autoScroll);
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    embla.selectedScrollSnap();
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className="relative flex flex-col w-full px-4 sm:px-8 lg:px-32 xl:px-80">
      {/* Carousel viewport */}
      <div
        className="embla__viewport overflow-hidden rounded-none lg:rounded-3xl"
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
                className="w-full h-full object-cover rounded-none lg:rounded-3xl"
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
          className="w-12 h-12 flex items-center justify-center text-white bg-black rounded-full hover:bg-black/70 transition"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          aria-label="button next"
          onClick={scrollNext}
          className="w-12 h-12 flex items-center justify-center text-white bg-black rounded-full hover:bg-black/70 transition"
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
