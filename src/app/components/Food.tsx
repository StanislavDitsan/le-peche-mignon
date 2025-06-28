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
              href="https://maps.app.goo.gl/srWBG56Em3oGgUbs5"
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
                src="/le-peche-best-food2.avif"
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
                src="/le-peche-best-food4.avif"
                alt="Soups and Stews"
                className="inline-block h-72 w-full object-cover rounded"
              />
              <div>
                <p className="text-xl font-semibold dark:text-white">
                  Seasonal Quiche & Savouries
                </p>
                <p className="mb-4 font-semibold text-gray-500">
                  Golden, Flaky, Delicious
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Freshly baked with market vegetables and buttery pastry.
                  Perfect for a light lunch or to enjoy with a salad at our
                  communal table or on the go.
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
                src="/le-peche-mignon-food-store.avif"
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
          {/* Foodstore Section */}
          <div id="foodstore" className="mt-16">
            <h3
              data-aos="fade-down"
              data-aos-delay="700"
              className="text-center text-4xl font-bold md:text-6xl dark:text-white"
            >
              More Than Just a Menu
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
              Europe's gourmet food offerings: <br /> <br />
              Chorizo from Brindisa, coffee from Monmouth, chocolate from
              Meurice, artisanal cheese from Mons Fromager, the best of Italy
              from Seggiano, and last but not least, jams from La Trinquelinette
              in France.
            </p>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              {/* Left Content */}
              <ul className="mx-auto max-w-4xl space-y-6 text-sm text-gray-500 sm:text-base md:space-y-8 lg:text-lg">
                <li
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="flex items-start gap-4"
                >
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1624772398066-98584aa2f214?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Chorizo"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <strong>Chorizo from Brindisa</strong>
                    <p>Aged to perfection, rich, and full of flavor.</p>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="flex items-start gap-4"
                >
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1609607285694-e283bd2ea9a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Teas"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <strong>Teas from Kusmi</strong>
                    <p>A world-renowned collection of aromatic blends.</p>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  className="flex items-start gap-4"
                >
                  <Image
                    width={500}
                    height={500}
                    src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Coffee"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <strong>Coffee from Monmouth</strong>
                    <p>Rich, bold flavors from the finest beans.</p>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  className="flex items-start gap-4"
                >
                  <Image
                    width={500}
                    height={500}
                    src="https://plus.unsplash.com/premium_photo-1691939610797-aba18030c15f?q=80&w=2822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cheese"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <strong>Cheese from Mons Fromager</strong>
                    <p>Artisanal selections for every palate.</p>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="1300"
                  className="flex items-start gap-4"
                >
                  <Image
                    width={500}
                    height={500}
                    src="https://plus.unsplash.com/premium_photo-1666920429649-7562049bb713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Yoghurt"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <strong>La Fermiere Yoghurts</strong>
                    <p>Luxurious creamy yoghurts, perfect for any time.</p>
                  </div>
                </li>
              </ul>
              {/* Right Content */}
              <div className="space-y-12 text-center lg:text-right">
                <div
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="border-[#294ebc] pl-4 border-r-4 border-l-0 pr-4"
                >
                  <p className="text-lg font-semibold text-gray-700">
                    Natural and Biodynamic Wines
                  </p>
                  <p className="text-sm text-gray-500 sm:text-base">
                    From Les Caves de Pyrene, curated to complement every meal.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="border-[#dad1d1] pl-4 border-r-4 border-l-0 pr-4"
                >
                  <p className="text-lg font-semibold text-gray-700">
                    Craft Beers
                  </p>
                  <p className="text-sm text-gray-500 sm:text-base">
                    From The Kernel, London&apos;s celebrated microbrewery.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  className="border-[#ba2323] pl-4 border-r-4 border-l-0 pr-4"
                >
                  <p className="text-lg font-semibold text-gray-700">
                    Catering Services
                  </p>
                  <p className="text-sm text-gray-500 sm:text-base">
                    Hosting a party or event?{" "}
                    <a
                      className="no-underline text-[#ac6936] font-semibold hover:text-[#8a552b] transition-colors"
                      href="tel:+442076071826"
                      aria-label="Call Le Peche Mignon"
                    >
                      Call
                    </a>{" "}
                    or{" "}
                    <a
                      className="no-underline text-[#ac6936] font-semibold hover:text-[#8a552b] transition-colors"
                      href="mailto:bookings@lepechemignon.co.uk"
                      target="_blank"
                      aria-label="Email Le Peche Mignon"
                    >
                      email{" "}
                    </a>
                    us to see how we can help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
};

export default Food;
