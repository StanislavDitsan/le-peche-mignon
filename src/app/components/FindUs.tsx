import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import AnimationObserver from "./AnimationObserver";

const FindUs = () => {
  return (
    <AnimationObserver>
      <section className="dark:bg-gray-900" id="findus">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div data-aos="fade-in" data-aos-delay="100">
              <Image
                width={500}
                height={500}
                src="/peche_mignon_map.png"
                alt=""
                className="mx-auto inline-block h-full w-full max-w-2xl object-cover bg-black/90 backdrop-blur-md rounded-2xl"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl dark:text-white">
                Find Us
              </h1>
              <p
                className="max-w-lg text-sm text-gray-500 sm:text-base mb-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Le Péché Mignon is a 5-minute walk from either Highbury and
                Islington or Holloway Road station.
              </p>
              <p
                className="max-w-lg text-sm text-gray-500 sm:text-base mb-2"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                We don&apos;t take reservations, but please don&apos;t let this
                put you off. Come along and we will seat you as quickly as we
                can. <br /> All our tables are for sharing.
              </p>
              <p
                className="max-w-lg text-sm text-gray-500 sm:text-base mb-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                We&apos;ve got a beautifully secluded garden to the rear. <br />{" "}
                If the weather is good, it&apos;s a great place to relax.
              </p>
              <p
                className="max-w-lg text-sm text-gray-500 sm:text-base mb-2"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                We&apos;re always trying to improve - we&apos;d love to hear
                what you think about Le Péché Mignon. <br /> <br /> Drop us a
                line at:{" "}
                <a
                  href="mailto:feedback@lepechemignon.co.uk"
                  aria-label="feedback email"
                  className="no-underline text-[#ac6936] font-semibold hover:text-[#8a552b] transition-colors"
                >
                  feedback@lepechemignon.co.uk
                </a>
              </p>
              <a
                href="https://www.google.com/maps?q=6+Ronalds+Road,+Highbury,+LONDON+N5+1XH"
                target="_blank"
                aria-label="get directions link"
                className="button2 inline-block items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white dark:text-white mt-2"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div
            className="flex items-center justify-center mt-5 rounded-2xl p-10 bg-black/90 "
            data-aos="fade-up"
            data-aos-delay="600"
            style={{
              backgroundImage: "url('/la-peche-cafe-uk.avif')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 shadow-md rounded-lg p-10 max-w-[1024px] gap-10 md:gap-20 flex flex-col md:flex-row items-center justify-between">
              <div
                className="w-full md:w-4/5"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <p className="text-4xl font-bold md:text-6xl dark:text-white mb-4 inline-flex">
                  New Location{" "}
                  <span className="lg:ml-2">
                    <CiLocationOn />
                  </span>
                </p>
                <p className="text-sm text-gray-500 sm:text-base mb-2">
                  Our Bishop&apos;s Stortford location is now open! <br />{" "}
                  <br />
                  Come by for breakfast, lunch or dinner and enjoy our cozy new
                  space.
                </p>
                <br />
                <p className="text-sm text-gray-500 sm:text-base mb-2">
                  À bientôt &ndash; see you soon!
                </p>
              </div>
              <div
                className="w-full md:w-1/5 flex justify-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <a
                  target="_blank"
                  aria-label="directions"
                  href="https://maps.app.goo.gl/ugWVvKbhbvi3irsf9"
                  className="button2 bg-black text-white dark:text-white px-8 py-4 rounded-lg"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
};

export default FindUs;
