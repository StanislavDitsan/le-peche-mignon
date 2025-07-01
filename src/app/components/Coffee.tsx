import Image from "next/image";
import React from "react";
import AnimationObserver from "./AnimationObserver";

const Coffee = () => {
  return (
    <AnimationObserver>
      <section className="dark:bg-gray-900" id="coffee">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-5 text-3xl font-bold md:text-6xl lg:mb-4 dark:text-white"
          >
            Our Coffee
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="300"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg"
          >
            Our approach is simple: Monmouth beans, the unbeatable Marzocco
            machine and talented baristas
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center"
            >
              <Image
                src="/le-peche-our-coffee.avif"
                alt="le-peche-our-coffee"
                className="inline-block h-96 w-full rounded-2xl object-cover shadow-xl"
                width={500}
                height={500}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20 bg-white/70 dark:bg-gray-900/70 shadow-lg"
            >
              <h2
                data-aos="zoom-in"
                data-aos-delay="900"
                className="text-3xl font-bold md:text-5xl dark:text-white text-nowrap"
              >
                A Simple Approach
              </h2>
              <p
                data-aos="fade-in"
                data-aos-delay="1100"
                className="text-sm text-gray-500 sm:text-base"
              >
                Our baristas are truly passionate and are trained to pour a
                great cup every time. We&apos;re always open to what you want so
                don&apos;t be shy and let us know how you like your coffee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
};

export default Coffee;
