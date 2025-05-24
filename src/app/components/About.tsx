import Image from "next/image";
import AnimationObserver from "./AnimationObserver";

export default function About() {
  return (
    <AnimationObserver>
      <section className="lg:py-14 dark:bg-gray-900">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div data-aos="fade-up" className="flex items-center">
              <Image
                src="/pechemignon_home_pic.jpg"
                alt="About Us"
                className="inline-block h-full w-full rounded-2xl object-cover"
                width={500}
                height={500}
              />
            </div>
            {/* Content */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20"
            >
              <h2
                data-aos="zoom-in"
                data-aos-delay="900"
                className="text-3xl font-bold md:text-6xl dark:text-white"
              >
                About Us
              </h2>
              <p className="text-sm text-gray-500 sm:text-base lg:text-lg">
                Le Péché Mignon is an independent French café and fine food
                store nestled in a surprising location on Highbury&apos;s
                Ronalds Road, within walking distance of Highbury Fields and
                Arsenal&apos;s Emirates Stadium.
                <br />
                <br />
                Enjoy browsing the morning papers over a coffee and a croissant,
                a quick sandwich at lunchtime, or one of our delicious salads
                with friends across our communal table. Stock up your cupboards
                with an exciting array of products, from wine and cheese to
                charcuterie and olive oil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
}
