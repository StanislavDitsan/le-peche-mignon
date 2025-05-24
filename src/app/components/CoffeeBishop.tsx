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
            Crafting Perfect Coffee
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="300"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg"
          >
            Every sip is a little moment of joy
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div
              data-aos="fade-up"
              data-aos-delay="700" // Delay changed for the text container
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20 bg-white/70 dark:bg-gray-900/70 shadow-lg"
            >
              <h2
                data-aos="zoom-in"
                data-aos-delay="900"
                className="text-3xl font-bold md:text-5xl dark:text-white"
              >
                Brewed with Love
              </h2>
              <p
                data-aos="fade-in"
                data-aos-delay="1100"
                className="text-sm text-gray-500 sm:text-base"
              >
                We take pride in using the best Monmouth beans and the trusted
                Marzocco machine to brew the perfect cup. Rich, smooth, and full
                of flavor. It&rsquo;s not just about coffee; it&rsquo;s about
                the experience &mdash; from the first sip to the last. Our
                baristas are passionate about what they do, and it shows in
                every pour.
                <br />
                <br />
                Come for the coffee, stay for the warmth.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500" // Delay changed for the image container
              className="flex items-center"
            >
              <Image
                src="/la-peche-coffee.webp"
                alt=""
                className="inline-block h-full w-full rounded-2xl object-cover shadow-xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
};

export default Coffee;
