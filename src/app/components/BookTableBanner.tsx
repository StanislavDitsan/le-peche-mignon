"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimationObserver from "./AnimationObserver";
import OpenTableWidget from "./OpenTableWidget";

const BookTable = () => {
  const [showBookModal, setShowBookModal] = useState(false);

  return (
    <AnimationObserver>
      <section className="dark:bg-gray-900 " id="booktable">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-5 text-3xl font-bold md:text-6xl lg:mb-4 dark:text-white text-center md:text-left"
          >
            Make a Reservation
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="300"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg text-center md:text-left"
          >
            Whether it&apos;s a special occasion or a casual night out, reserve
            your spot for an unforgettable dining experience.
          </p>

          {/* Content Grid */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Text Block (Moved to the right side) */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20 bg-white/70 dark:bg-gray-900/70 shadow-lg lg:order-2"
            >
              <h3
                data-aos="zoom-in"
                data-aos-delay="200"
                className="text-3xl font-bold md:text-5xl dark:text-white"
              >
                Your Table Awaits
              </h3>
              <p
                data-aos="fade-in"
                data-aos-delay="200"
                className="text-sm text-gray-500 sm:text-base"
              >
                Indulge in delectable dishes made from the finest ingredients in
                a cozy, welcoming environment. Our team is eager to make your
                evening memorable.
              </p>
              <div data-aos="zoom-in" data-aos-delay="500" className="mt-6">
                <button
                  onClick={() => setShowBookModal(true)}
                  aria-label="Book a Table"
                  className="button2 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold dark:text-white"
                >
                  Reserve Now
                </button>
              </div>
            </div>

            {/* Image Block (Left side) */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex items-center"
            >
              <Image
                src="/la-peche_fine_dining.avif"
                alt="Cozy dining table setting"
                className="inline-block h-full w-full rounded-2xl object-cover shadow-xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        {/* Book a Table Modal */}
        <OpenTableWidget
          isOpen={showBookModal}
          onClose={() => setShowBookModal(false)}
        />
      </section>
    </AnimationObserver>
  );
};

export default BookTable;
