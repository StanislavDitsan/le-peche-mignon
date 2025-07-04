"use client";
import Link from "next/link";
import AnimationObserver from "./AnimationObserver";
import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="relative bg-white dark:bg-gray-900 bg-cover bg-center lg:h-screen"
      style={{ backgroundImage: "url('/Le-Péché-Mignon.1.jpg')" }}
    >
      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-8 lg:grid lg:max-w-screen-xl lg:mx-auto lg:gap-8 lg:grid-cols-12 lg:text-left lg:items-start lg:px-6 lg:py-16">
        {/* Glass effect container */}
        <AnimationObserver>
          <div
            data-aos="fade-up"
            className="lg:col-span-7 space-y-6 lg:space-y-8 text-white lg:mt-32 backdrop-blur-lg bg-white/30 p-10 rounded-xl shadow-xl dark:bg-gray-900"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Welcome to <br />{" "}
              <span className="text-[#431500]">Le Péché Mignon</span>
            </h1>
            <p className="max-w-2xl dark:text-white text-black md:text-lg lg:text-xl">
              A welcoming, family run neighbourhood café nestled in a surprising
              location on Highbury&apos;s Ronalds Road within walking distance
              of Highbury Fields and Arsenal&apos;s Emirates Stadium. <br />{" "}
              It&apos;s a very tiny space with lots going on.
            </p>
            <div
              data-aos="zoom-in"
              className="flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              <Link
                href="/highbury#findus"
                aria-label="Visit us navigation"
                className="inline-flex button items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-full transition-all duration-300"
              >
                Visit Us
              </Link>

              <button
                onClick={() => setShowModal(true)}
                aria-label="View Menu"
                className="inline-flex button items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-full transition-all duration-300"
              >
                View Menu
              </button>
            </div>
          </div>
        </AnimationObserver>
      </div>

      {/* Modal for View Menu */}
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
  );
}
