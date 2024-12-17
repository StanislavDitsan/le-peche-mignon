import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-14 lg:py-24 dark:bg-gray-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <div className="img-box">
            <Image
              src="/pechemignon_home_pic.jpg"
              alt="About Us tailwind page"
              className="max-lg:mx-auto object-cover lg:mt-10 rounded"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:pl-[100px] flex items-center">
            <div className="data w-full">
              <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black dark:text-white mb-16 max-lg:text-center relative mt-4 lg:mt-0">
                About Us{" "}
              </h2>
              <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto mt-2">
                Le Péché Mignon is an independent French café and fine food
                store nestled in a surprising location on Highbury&apos;s
                Ronalds Road within walking distance of Highbury Fields and
                Arsenal's Emirates Stadium. It's a very tiny space with lots
                going on. Enjoy browsing the morning papers over a coffee and a
                croissant, a quick sandwich at lunchtime or one of our delicious
                salads with friends across our communal table or simply stock up
                your cupboards with the exciting array of products, from wine
                and cheese to charcuterie and olive oil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
