"use client";
import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import AnimationObserver from "./AnimationObserver";

const reviews = [
  "Found this little gem totally by chance. Very small 'day' bistrot. Breakfast/brunch menu as well as a basic lunch menu (delicious sandwiches). Excellent coffee, great wine selection. I had the salt beef sandwich. Freshly made to order.",
  "This is a hidden gem in Bishops Stortford. We’ve been many times with our friends and were so lucky to host my husband’s 65th birthday celebrations here — it was a magical evening with amazing food, wine, and care for our guests' allergies.",
  "Perfect independent place for a coffee and pastry. The mushroom fricasse was divine! Service was friendly and efficient. Sure to become a Stortford institution.",
  "Extremely delicious food and the best flat white in town. Service is efficient and polite. French breakfast is amazing, highly recommended!",
  "Best coffee in town. I haven’t had lunch here yet but the coffees, cakes, and pantry treats are top-notch. I get my fix of Torres crisps and fancy spreads every time.",
  "Great breakfast — I had the full French breakfast, which was excellent. A great place to have a relaxing brunch.",
  "Always excellent. Warm welcomes, great coffee, and delicious food. Fantastic deli and wine selection. The quality is first class. Dog friendly too!",
  "A fantastic addition to Bishop's Stortford. The food is very tasty, the service is fantastic and I look forward to returning to sample the delicious food from the deli.",
  "Just exceptional! From the coffee to the service! My first visit and I know this will be my go to place from now on… definitely the best coffee house in bishop Stortford.",
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimationObserver>
      <section
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"
        id="reviews"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20 relative">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-5 text-3xl font-bold md:text-6xl lg:mb-4 dark:text-white text-center md:text-left"
          >
            What People Say
          </h2>
          {/* <p
            data-aos="fade-in"
            data-aos-delay="300"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg text-center md:text-left"
          >
            Real words from guests who made our café part of their day.
          </p> */}

          {/* Scroll buttons (desktop only) */}
          <div className="hidden lg:flex absolute bottom-4 right-4 z-10 space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white dark:bg-gray-800 shadow-md rounded-full hover:scale-110 transition dark:text-white"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <IoChevronBack size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white dark:bg-gray-800 shadow-md rounded-full hover:scale-110 transition dark:text-white"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <IoChevronForward size={24} />
            </button>
          </div>

          {/* Scrollable Review Cards */}
          <div
            ref={scrollRef}
            data-aos="fade-in"
            data-aos-delay="500"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 lg:pt-10 px-1 md:px-4 scrollbar-hide scroll-smooth"
          >
            {/* Spacer to center first card */}
            <div className="shrink-0 w-4 md:w-8" />
            {reviews.map((text, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-white/70 dark:bg-gray-900/70 border border-[#c18a52] shadow-md rounded-2xl p-6 sm:p-8 transition-all duration-300 justify-center items-center flex flex-col"
              >
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic">
                  “{text}”
                </p>
              </div>
            ))}
            {/* Spacer to center last card */}
            <div className="shrink-0 w-4 md:w-8" />
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
}
