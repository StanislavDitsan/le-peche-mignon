"use client";
import Image from "next/image";
import React from "react";
import AnimationObserver from "./AnimationObserver";

const FoodStore = () => {
  return (
    <AnimationObserver>
      <section className="dark:bg-gray-900 mt-10" id="foodstore">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-5  text-3xl font-bold md:text-6xl lg:mb-4 dark:text-white text-center md:text-left"
          >
            Our Food Store
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="300"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg text-center md:text-left"
          >
            Discover a curated selection of Europe’s finest gourmet foods and
            natural wines.
          </p>

          {/* Content Grid */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Text Block (Right side) */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20 bg-white/70 dark:bg-gray-900/70 shadow-lg lg:order-2"
            >
              <h3
                data-aos="zoom-in"
                data-aos-delay="200"
                className="text-3xl font-bold md:text-5xl dark:text-white"
              >
                The Best of Europe, in One Place
              </h3>
              <p
                data-aos="fade-in"
                data-aos-delay="300"
                className="text-sm text-gray-500 sm:text-base"
              >
                As our name in French suggests, we are packed to the rafters
                with good things. Highlights include chorizo from Brindisa,
                coffee from Monmouth, chocolate from Meurice, artisanal cheese
                from Mons Fromager, the best of Italy from Seggiano, and jams
                from La Trinquelinette in France.
              </p>
              <p
                data-aos="fade-in"
                data-aos-delay="400"
                className="text-sm text-gray-500 sm:text-base"
              >
                We also offer a beautiful selection of natural and biodynamic
                wines from Les Caves de Pyrene — perfect to enjoy here or at
                home.
              </p>
              <p
                data-aos="fade-in"
                data-aos-delay="500"
                className="text-sm text-gray-500 sm:text-base"
              >
                Follow us on Instagram for regular updates and seasonal finds.
              </p>
            </div>

            {/* Image Block (Left side) */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex items-center"
            >
              <Image
                src="/la-peche_gourmet_store.avif" // Replace with your actual image path
                alt="Gourmet food store shelves"
                className="inline-block h-full w-full rounded-2xl object-cover shadow-xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full max-w-4xl mx-auto  bg-white/70 dark:bg-gray-900/70 p-10 sm:p-16 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold dark:text-white mb-6">
            Catering & Private Events
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            A full catering service is also available — so if you're having a
            party at home or an event at work, get in touch to see how we can
            help.
            <br className="hidden sm:block" />
            <br />
            The space can be hired for private events — for more details, reach
            out to us via email or phone.
          </p>
        </div>
      </section>
    </AnimationObserver>
  );
};

export default FoodStore;
