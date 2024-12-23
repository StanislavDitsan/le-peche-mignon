import React from "react";

const FindUs = () => {
  return (
    <section className="dark:bg-gray-900" id="findus">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            <img
              src="/peche_mignon_map.png"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-2xl object-cover bg-black/90 border border-white/30 backdrop-blur-md rounded-2xl"
            />
          </div>
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl dark:text-white">
              Find Us
            </h1>
            <p className="max-w-lg text-sm text-gray-500 sm:text-xl mb-2">
              Le Péché Mignon is a 5-minute walk from either Highbury and
              Islington or Holloway Road station.
            </p>
            <p className="max-w-lg text-sm text-gray-500 sm:text-xl mb-2">
              We don't take reservations, but please don't let this put you off.
              Come along and we will seat you as quickly as we can. All our
              tables are for sharing.
            </p>
            <p className="max-w-lg text-sm text-gray-500 sm:text-xl mb-2">
              We've got a beautifully secluded garden to the rear. If the
              weather is good, it's a great place to relax.
            </p>
            <p className="max-w-lg text-sm text-gray-500 sm:text-xl mb-2">
              We're always trying to improve - we'd love to hear what you think
              about Le Péché Mignon. Drop us a line at:{" "}
              <a
                href="mailto:feedback@lepechemignon.co.uk"
                className="text-blue-600 hover:underline"
              >
                feedback@lepechemignon.co.uk
              </a>
            </p>

            <a
              href="https://www.google.com/maps?q=6+Ronalds+Road,+Highbury,+LONDON+N5+1XH"
              target="_blank"
              className="button2 inline-block items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white dark:text-white mt-2"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
