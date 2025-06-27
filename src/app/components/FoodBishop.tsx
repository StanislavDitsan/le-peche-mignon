"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimationObserver from "./AnimationObserver";

const Food = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AnimationObserver>
      <section className="dark:bg-gray-900" id="menu">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2
            data-aos="fade-in"
            className="text-center text-4xl font-bold md:text-6xl dark:text-white"
          >
            Our Menu
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mb-8 mt-4 text-left text-pretty text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 p-8 md:text-lg"
          >
            Our food is made using high-quality ingredients sourced as
            seasonally and as ethically as possible. Our eggs and meat are
            free-range. Our salads, soups, and stews change daily and are
            available to take away or eat in. We also have an extensive list of
            made-to-order toasted sandwiches, baguettes, quiches, and other
            savoury and sweet snacks.
            <br />
            <br />
            And to top things off, on Friday and Saturday evenings we light the
            candles, change the playlist, and move the room around to open our
            restaurant with a very French feel to the food and wine. See the
            menu for more details. Bookings recommended, but walk-ins welcome!
            <br />
            <br />
            You can read what our guests have to say about us{" "}
            <a
              href="https://www.opentable.co.uk/r/le-peche-mignon-hertfordshire?corrid=bcb71ecd-df5f-4103-82fb-60bc1c7424e5&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2025-06-20T19%3A00%3A00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ac6936] font-semibold hover:text-[#8a552b] transition-colors no-underline"
            >
              here
            </a>
            .
          </p>
          {/* Content */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:justify-center md:grid-cols-1 md:gap-8 lg:grid-cols-2">
            {/* Item 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative grid w-full grid-flow-row justify-center gap-6 rounded-md p-8 md:grid-cols-2"
            >
              <div className="absolute top-0 left-0 h-4 w-4 border-t-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-4 border-r-4 border-gray-100 dark:border-gray-700"></div>
              <Image
                width={500}
                height={500}
                src="/le-peche-best-food.avif"
                alt="Brunch"
                className="inline-block h-72 w-full object-cover rounded"
              />
              <div>
                <p className="text-xl font-semibold dark:text-white">
                  Brunch Special
                </p>
                <p className="mb-4 font-semibold text-gray-500">
                  Eggs Benedict & More
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Our indulgent eggs benedict has earned a loyal following. Get
                  here early for the best experience!
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="relative grid w-full grid-flow-row justify-center gap-6 p-8 md:grid-cols-2"
            >
              <div className="absolute top-0 right-0 h-4 w-4 border-t-4 border-r-4 border-gray-100 dark:border-gray-700"></div>
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
              <Image
                width={500}
                height={500}
                src="/lapeche-sandwiches.avif"
                alt="Toasted Sandwiches"
                className="inline-block h-72 w-full object-cover rounded"
              />
              <div>
                <p className="text-xl font-semibold dark:text-white">
                  Made to Order Sandwiches
                </p>
                <p className="mb-4 font-semibold text-gray-500">
                  Toasted Sandwiches & More
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Choose from an extensive list of toasted sandwiches,
                  baguettes, quiches, and other savory snacks, made fresh to
                  order.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="relative grid w-full grid-flow-row justify-center gap-6 p-8 md:grid-cols-2"
            >
              <div className="absolute top-0 right-0 h-4 w-4 border-t-4 border-r-4 border-gray-100 dark:border-gray-700"></div>
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
              <Image
                width={500}
                height={500}
                src="/Seasonal-Fruit- Pastries-at-le-peche.avif"
                alt="Seasonal Fruit & Pastries"
                className="inline-block h-72 w-full object-cover rounded"
              />
              <div>
                <p className="text-xl font-semibold dark:text-white">
                  Seasonal Fruit & Pastries
                </p>
                <p className="mb-4 font-semibold text-gray-500">
                  Fresh, Colourful & Wholesome
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  A vibrant selection of berries, kiwi, and pastries served with
                  creamy Normandy yogurt. Perfect for a light breakfast or a
                  mid-morning treat.
                </p>
              </div>
            </div>
            {/* Item 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="relative grid w-full grid-flow-row justify-center gap-6 rounded-md p-8 md:grid-cols-2"
            >
              <div className="absolute top-0 left-0 h-4 w-4 border-t-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-4 border-r-4 border-gray-100 dark:border-gray-700"></div>
              <Image
                width={500}
                height={500}
                src="/LaPeche_Quality_Ingredients.avif"
                alt="Fresh Ingredients"
                className="inline-block h-72 w-full object-cover rounded"
              />
              <div>
                <p className="text-xl font-semibold dark:text-white">
                  Quality Ingredients
                </p>
                <p className="mb-4 font-semibold text-gray-500">
                  Sourced Ethically & Seasonally
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  We use high-quality ingredients, from free-range eggs to
                  naturally reared meat sourced from Elwy Valley Farm.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-16">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="w-full relative"
            >
              {/* Background Image */}
              <Image
                src="/catering-service.avif" // <-- Replace with your image path
                alt="Menu Background"
                width={1920}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl"
                priority
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  objectFit: "cover",
                  borderRadius: "1rem",
                  opacity: 0.18, // adjust for desired overlay effect
                }}
              />
              {/* Overlay Content */}
              <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center h-80 sm:h-80 md:h-96 text-center ">
                <h3 className="text-3xl md:text-5xl font-bold dark:text-white mb-6 drop-shadow-lg">
                  On the Menu
                </h3>
                <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow mb-8 px-6">
                  Explore all our food and drink options, including daily
                  specials and seasonal treats. <br /> View our full menu for
                  the latest offerings.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="button2 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#ac6936] text-white font-semibold text-lg shadow-lg hover:bg-[#8a552b] transition-all duration-300 dark:text-white"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  aria-label="Open PDF Menu Modal"
                >
                  View Menu
                </button>
                <p
                  className="mt-6 text-sm text-gray-500"
                  data-aos="fade-in"
                  data-aos-delay="950"
                >
                  Menu subject to change.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-xl mx-4 p-4"
              style={{ maxHeight: "90vh", overflowY: "auto" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white text-3xl font-bold z-10"
                aria-label="Close modal"
                tabIndex={0}
              >
                &times;
              </button>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "141.4286%",
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  marginTop: "1.6em",
                  marginBottom: "0.9em",
                  overflow: "hidden",
                  borderRadius: "8px",
                  willChange: "transform",
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAGrjtKSlnc/nViO8oaSm8mcTYUI0yYtTQ/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  title="PDF Menu"
                ></iframe>
              </div>
              <a
                href="https://www.canva.com/design/DAGrjtKSlnc/nViO8oaSm8mcTYUI0yYtTQ/view"
                target="_blank"
                rel="noopener"
                className="block text-center text-[#ac6936] font-semibold underline mt-2"
              >
                Open in new tab
              </a>
            </div>
          </div>
        )}
      </section>
    </AnimationObserver>
  );
};

export default Food;
