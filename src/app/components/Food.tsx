import Image from "next/image";
import React from "react";
import AnimationObserver from "./AnimationObserver";

const Food = () => {
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
            {/* <br />
            <br />
            And to top things off, on Friday and Saturday evenings we light the
            candles, change the playlist, and move the room around to open our
            restaurant with a very French feel to the food and wine. See the
            menu for more details. Bookings recommended, but walk-ins welcome!
            <br />
            <br />
            You can read what our guests have to say about us{" "}
            <a
              href="https://maps.app.goo.gl/srWBG56Em3oGgUbs5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ac6936] font-semibold hover:text-[#8a552b] transition-colors no-underline"
            >
              here
            </a>
            . */}
          </p>

          {/* Foodstore Section */}
          <div id="foodstore" className="mt-16">
            <h3
              data-aos="fade-down"
              data-aos-delay="700"
              className="text-center text-4xl font-bold md:text-6xl dark:text-white"
            >
              Quel est votre péché mignon?
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
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
      </section>
    </AnimationObserver>
  );
};

export default Food;
