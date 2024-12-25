import Image from "next/image";
import React from "react";

const Food = () => {
  return (
    <section className="dark:bg-gray-900" id="menu">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold md:text-6xl dark:text-white">
          Our Menu
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Indulgent weekend brunch, daily specials, and classic favourites with
          a twist. Freshly made every day using the finest ingredients.
        </p>
        {/* Content */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:justify-center md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          {/* Item */}
          <div className="relative grid w-full grid-flow-row justify-center gap-6 rounded-md p-8 md:grid-cols-2">
            {/* Borders for top-left and bottom-right corners */}
            <div className="absolute top-0 left-0 h-4 w-4 border-t-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-4 border-r-4 border-gray-100 dark:border-gray-700"></div>

            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

          {/* Item */}
          <div className="relative grid w-full grid-flow-row justify-center gap-6 p-8 md:grid-cols-2">
            <div className="absolute top-0 right-0 h-4 w-4 border-t-4 border-r-4 border-gray-100 dark:border-gray-700"></div>
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1630330159773-4b2e6e5b8a56?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Choose from an extensive list of toasted sandwiches, baguettes,
                quiches, and other savory snacks, made fresh to order.
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="relative grid w-full grid-flow-row justify-center gap-6 p-8 md:grid-cols-2">
            <div className="absolute top-0 right-0 h-4 w-4 border-t-4 border-r-4 border-gray-100 dark:border-gray-700"></div>
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Soups and Stews"
              className="inline-block h-72 w-full object-cover rounded"
            />
            <div>
              <p className="text-xl font-semibold dark:text-white">
                Homemade Soups & Stews
              </p>
              <p className="mb-4 font-semibold text-gray-500">Fresh & Hearty</p>
              <p className="text-sm text-gray-500 sm:text-base">
                Our homemade soups and stews change daily. Available to take
                away or enjoy around our communal table.
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="relative grid w-full grid-flow-row justify-center gap-6 rounded-md p-8 md:grid-cols-2">
            {/* Pseudo-elements for borders */}
            <div className="absolute top-0 left-0 h-4 w-4 border-t-4 border-l-4 border-gray-100 dark:border-gray-700"></div>
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-4 border-r-4 border-gray-100 dark:border-gray-700"></div>

            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <div id="foodstore" className="mt-16">
          <h3 className="text-center text-4xl font-bold md:text-6xl dark:text-white">
            More Than Just a Menu
          </h3>
          <p className="mx-auto mt-4 mb-8 max-w-3xl text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            We&apos;ve been called petite, intimate, bijou, and even snug. What
            we do hope is that we&apos;re packed with good things. Here are some
            highlights of the best of Europe&apos;s fine food offerings:
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left Content */}
            <ul className="mx-auto max-w-4xl space-y-6 text-sm text-gray-500 sm:text-base md:space-y-8 lg:text-lg">
              <li className="flex items-start gap-4">
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
              <li className="flex items-start gap-4">
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
              <li className="flex items-start gap-4">
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
              <li className="flex items-start gap-4">
                <Image
                  width={500}
                  height={500}
                  src="https://plus.unsplash.com/premium_photo-1691939610797-aba18030c15f?q=80&w=2822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cheese"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <strong>Cheese from Neals Yard Dairy</strong>
                  <p>Artisanal selections for every palate.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
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
              <div className=" border-[#294ebc] pl-4 lg:border-r-4 lg:border-l-0 lg:pr-4">
                <p className="text-lg font-semibold text-gray-700">
                  Natural and Biodynamic Wines
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  From Les Caves de Pyrene, curated to complement every meal.
                </p>
              </div>
              <div className="border-[#dad1d1] pl-4 lg:border-r-4 lg:border-l-0 lg:pr-4">
                <p className="text-lg font-semibold text-gray-700">
                  Craft Beers
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  From The Kernel, London&apos;s celebrated microbrewery.
                </p>
              </div>
              <div className="border-[#ba2323] pl-4 lg:border-r-4 lg:border-l-0 lg:pr-4">
                <p className="text-lg font-semibold text-gray-700">
                  Catering Services
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Hosting a party or event? Call or email us to see how we can
                  help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
