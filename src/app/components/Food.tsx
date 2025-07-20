"use client";
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
            className="mx-auto mb-8 mt-4 text-left text-pretty text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 p-8 md:text-lg"
          >
            Our food is made using high-quality ingredients sourced as
            seasonally and as ethically as possible. Our eggs and meat are
            free-range. Our salads, soups, and stews change daily and are
            available to take away or eat in. We also have an extensive list of
            made-to-order toasted sandwiches, baguettes, quiches, and other
            savoury and sweet snacks.
          </p>

          <div className="flex justify-center mb-12">
            <button
              data-aos="fade-down"
              onClick={() => setShowModal(true)}
              aria-label="View Menu"
              className="inline-flex button2 items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-full transition-all duration-300"
            >
              View Full Menu
            </button>
          </div>

          {/* Foodstore Section */}
          <div id="foodstore" className="mt-16">
            <h3
              data-aos="fade-down"
              className="text-center text-4xl font-bold md:text-6xl dark:text-white"
            >
              Quel est votre péché mignon?
            </h3>
            <p
              data-aos="fade-up"
              className="mx-auto mt-4 mb-8 max-w-3xl px-4 text-center text-sm leading-relaxed tracking-tight text-gray-500 sm:text-base md:mb-12 lg:mb-16"
            >
              As our name in French suggests, we are packed to the rafters with
              good things.
              <br />
              <br />
              Here are some of our highlights of what we consider the best of
              Europe&apos;s gourmet food offerings: <br /> <br />
              Chorizo from Brindisa, coffee from Monmouth, chocolate from
              Meurice, artisanal cheese from Mons Fromager, the best of Italy
              from Seggiano, and last but not least, jams from La Trinquelinette
              in France.
            </p>
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
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white text-3xl font-bold z-10"
                aria-label="Close modal"
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
                  src="https://www.canva.com/design/DAGr_uEfmHk/_s2BT__5b712ce9J-gJBWw/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  title="PDF Menu"
                ></iframe>
              </div>
              <a
                href="https://www.canva.com/design/DAGr_uEfmHk/_s2BT__5b712ce9J-gJBWw/view"
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
