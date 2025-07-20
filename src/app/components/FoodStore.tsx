"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AnimationObserver from "./AnimationObserver";

const foodStoreImages = [
  "/le-peche-mignon-food-store2.avif",
  "/le-peche-mignon-food-store.avif",
  "/le-peche-mignon-food-store33.avif",
  "/le-peche-best-cheese.avif",
  "/le-peche-mignon-food-store5.avif",
];

const FoodStore = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % foodStoreImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationObserver>
      <section className="dark:bg-gray-900 mt-10" id="foodstore">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
          {/* Title */}
          <h2
            data-aos="fade-down"
            className="mb-5 text-3xl font-bold md:text-6xl lg:mb-4 dark:text-white text-center md:text-left"
          >
            Our Food Store
          </h2>
          <p
            data-aos="fade-in"
            className="mb-8 max-w-lg text-gray-500 text-sm sm:text-base lg:mb-24 lg:text-lg text-center md:text-left"
          >
            Discover a curated selection of Europe&apos;s finest gourmet foods
            and natural wines.
          </p>

          {/* Grid Content */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-stretch">
            {/* Slideshow Image Block */}
            <div
              data-aos="fade-up"
              className="relative flex-1 min-h-[400px] w-full overflow-hidden rounded-2xl shadow-xl"
            >
              {foodStoreImages.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt="Gourmet food store display"
                  width={500}
                  height={500}
                  quality={90}
                  className={`absolute h-full w-full rounded-2xl object-cover transition-opacity duration-1000 ease-in-out ${
                    i === imageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Text Block */}
            <div
              data-aos="fade-up"
              className="flex flex-col gap-5 flex-1 min-h-[400px] rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20 bg-white/70 dark:bg-gray-900/70 shadow-lg"
            >
              <h3
                data-aos="zoom-in"
                className="text-3xl font-bold md:text-5xl dark:text-white"
              >
                Europe&apos;s Finest
                <br />
                In One Place
              </h3>
              <p
                data-aos="fade-in"
                className="text-sm text-gray-500 sm:text-base md:text-lg"
              >
                As our name in French suggests, we are packed to the rafters
                with good things. Highlights include chorizo from Brindisa,
                coffee from Monmouth, chocolate from Meurice, artisanal cheese
                from Mons Fromager, the best of Italy from Seggiano, and jams
                from La Trinquelinette in France.
              </p>
              <p
                data-aos="fade-in"
                className="text-sm text-gray-500 sm:text-base md:text-lg"
              >
                We also offer a beautiful selection of natural and biodynamic
                wines from Les Caves de Pyrene — perfect to enjoy here or at
                home.
              </p>
              <p
                data-aos="fade-in"
                className="text-sm text-gray-500 sm:text-base md:text-lg"
              >
                Follow us on{" "}
                <a
                  target="_blank"
                  aria-label="Instagram link"
                  rel="noopener noreferrer"
                  className="text-[#ac6936] font-semibold no-underline hover:text-[#8a552b] transition-colors"
                  href="https://www.instagram.com/lepechemignonuk/"
                >
                  Instagram
                </a>{" "}
                for regular updates and seasonal finds.
              </p>
            </div>
          </div>
        </div>

        {/* Catering Section */}
        <div className="w-full mt-20">
          <div data-aos="fade-up" className="w-full relative">
            {/* Background Image */}
            <Image
              src="/la-peche-catering-service-london.avif"
              alt="Catering and Private Events"
              width={1920}
              height={800}
              className="w-full h-96 sm:h-[28rem] md:h-[32rem] object-cover"
              priority
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                objectFit: "cover",
                opacity: 0.35, // adjust for desired overlay effect
              }}
            />
            {/* Overlay Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center h-96 sm:h-[28rem] md:h-[32rem] text-center">
              <h3 className="text-3xl md:text-5xl font-bold dark:text-white mb-6 drop-shadow-lg">
                Catering & Private Events
              </h3>
              <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow p-8 lg:text-nowrap">
                A full catering service is also available — so if you&apos;re
                having a party at home or an event at work, get in touch to see
                how we can help.
                <br className="hidden sm:block" />
                <br />
                The space can be hired for private events — for more details,
                reach out to us via email or phone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
};

export default FoodStore;
