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
              className="flex flex-col gap-5 rounded-2xl border border-solid border-[#c18a52] p-10 sm:p-20"
            >
              <h2
                data-aos="zoom-in"
                className="text-3xl font-bold md:text-6xl dark:text-white"
              >
                About Us
              </h2>
              <p className="text-sm text-gray-500 sm:text-base lg:text-lg">
                It all started back in late 2006. After many scooter runs around
                London looking at sites the stars aligned, and we found our spot
                on Ronalds Rd. We fell in love with the neighbourhood on first
                sight and not much has changed since!
                <br />
                <br />
                We&apos;re open every day from 7:30 to 4pm and we hope we have
                every base covered. Pop in for a morning coffee (or takeaway if
                you&apos;re against the clock), leisurely breakfast at the
                weekend or stock up on store cupboard essentials — we hope we
                live up to our name!
                <br />
                <br />
                We have since branched out and opened our second site in
                Bishop&apos;s Stortford in Hertfordshire in 2023. Come and{" "}
                <a
                  target="_blank"
                  aria-label="Bishop Stortford "
                  rel="noopener noreferrer"
                  className="text-[#ac6936] font-semibold no-underline hover:text-[#8a552b] transition-colors"
                  href="/bishopsstortford"
                >
                  visit us.
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationObserver>
  );
}
