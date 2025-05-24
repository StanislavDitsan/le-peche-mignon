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
                src="/pechemignon_coffee.webp"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur auctor nunc at nunc congue, ac feugiat sapien
                sollicitudin. Sed tincidunt sem at dui efficitur, id facilisis
                lorem tincidunt.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur auctor nunc at nunc congue, ac feugiat sapien
                sollicitudin. Sed tincidunt sem at dui efficitur, id facilisis
                lorem tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
}
