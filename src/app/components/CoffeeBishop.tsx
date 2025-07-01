"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AnimationObserver from "./AnimationObserver";

const coffeeImages = [
  "/la-peche-coffee.webp",
  "/la-peche-coffee-time.avif",
  "/la-peche-monmouth.avif",
];

const momentsImages = [
  "/lepeche_dining.webp",
  "/wine_at_la-peche-uk.avif",
  "/la-peche-good-food_good_company.avif",
];

const Coffee = () => {
  const [coffeeImageIndex, setCoffeeImageIndex] = useState(0);
  const [momentsImageIndex, setMomentsImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoffeeImageIndex((prev) => (prev + 1) % coffeeImages.length);
      setMomentsImageIndex((prev) => (prev + 1) % momentsImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationObserver>
      <section className="dark:bg-gray-900" id="coffee">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-5 text-3xl font-bold md:text-6xl lg:mb-4 dark:text-white text-center md:text-left"
          >
            Our Coffee
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="300"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg text-center md:text-left"
          >
            Monmouth beans, the unbeatable Marzocco machine and talented
            baristas.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20 bg-white/70 dark:bg-gray-900/70 shadow-lg"
            >
              <h2
                data-aos="zoom-in"
                data-aos-delay="400"
                className="text-3xl font-bold md:text-5xl dark:text-white"
              >
                Brewed with Love
              </h2>
              <p
                data-aos="fade-in"
                data-aos-delay="600"
                className="text-sm text-gray-500 sm:text-base"
              >
                Our baristas are truly passionate and are trained to pour a
                great cup every time. We&apos;re always open to what you want so
                shout up and let us know how you like your coffee. We take pride
                in using the best Monmouth beans and the trusted Marzocco
                machine to brew the perfect cup.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="relative flex items-center h-[400px] w-full overflow-hidden rounded-2xl shadow-xl"
            >
              {coffeeImages.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={500}
                  height={500}
                  quality={90}
                  className={`absolute h-full w-full rounded-2xl object-cover transition-opacity duration-1000 ease-in-out ${
                    i === coffeeImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-900 bg-white lg:mt-0 mt-10" id="moments">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-5 text-3xl font-bold md:text-6xl lg:mb-4 dark:text-white text-center md:text-left"
          >
            Moments That Matter
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="300"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg text-center md:text-left"
          >
            From hand-poured coffee to curated wines and fresh seasonal plates —
            every visit is a reason to linger.
          </p>

          {/* Content Grid */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Image Block (first on large screens) */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="relative flex items-center h-[400px] w-full overflow-hidden rounded-2xl shadow-xl order-1 lg:order-none"
            >
              {momentsImages.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt="Cozy coffee shop interior"
                  width={500}
                  height={500}
                  quality={90}
                  className={`absolute h-full w-full rounded-2xl object-cover transition-opacity duration-1000 ease-in-out ${
                    i === momentsImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Text Block (second on large screens) */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20 bg-white/70 dark:bg-gray-900/70 shadow-lg"
            >
              <h3
                data-aos="zoom-in"
                data-aos-delay="400"
                className="text-3xl font-bold md:text-5xl dark:text-white"
              >
                Fresh, Seasonal Ingredients
              </h3>
              <p
                data-aos="fade-in"
                data-aos-delay="500"
                className="text-sm text-gray-500 sm:text-base"
              >
                Some days it&apos;s full of chatter and clinking glasses, others
                it&apos;s slower, softer. But no matter the mood, there&apos;s
                always a table, a smile, and something good on the plate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
};

export default Coffee;
