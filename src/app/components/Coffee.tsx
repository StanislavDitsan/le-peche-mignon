import React from "react";

const Coffee = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:text-6xl lg:mb-4">
          Crafting Perfect Coffee
        </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24">
          Our approach is simple: Monmouth beans, the unbeatable Marzocco
          machine and talented baristasPhoto GalleryOur approach is simple:
          Monmouth beans, the unbeatable Marzocco machine and talented
          baristasPhoto GalleryOur approach is simple: Monmouth beans, the
          unbeatable Marzocco machine and talented baristas.
        </p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <img
            src="/coffee.jpg"
            alt=""
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-gray-300 p-10 sm:p-20">
            <h2 className="text-3xl font-bold md:text-5xl">
              A French Twist on Artisan Coffee
            </h2>
            <p className="text-sm text-gray-500 sm:text-base">
              Inspired by the emergence of London's artisan coffee scene we now
              enjoy being part of it, albeit with a French touch. After all it's
              not only the Antipodeans who know how to make a good cup of
              coffee!
              <br />
              <br />
              Our baristas are truly passionate and are trained to pour a great
              cup every time. Our approach is simple: Monmouth beans, the
              unbeatable Marzocco machine and talented baristas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;
