import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-white dark:bg-gray-900 bg-cover bg-center lg:h-screen"
      style={{ backgroundImage: "url('/Le-Péché-Mignon.1.jpg')" }}
    >
      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-8 lg:grid lg:max-w-screen-xl lg:mx-auto lg:gap-8 lg:grid-cols-12 lg:text-left lg:items-start lg:px-6 lg:py-16">
        {/* Glass effect container */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-white lg:mt-32 backdrop-blur-sm bg-white/30 p-10 rounded-xl shadow-xl dark:bg-gray-900">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Welcome to <br />{" "}
            <span className="text-[#431500]">Le Péché Mignon</span>
          </h1>
          <p className="max-w-2xl text-gray-200 md:text-lg lg:text-xl">
            A cozy French café offering artisan coffee, buttery croissants, and
            fine food products. Nestled on Highbury&apos;s Ronalds Road, we
            invite you to relax, unwind, and savor the moment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <Link
              href="/#findus"
              aria-label="Visit us navigation"
              className="inline-flex button items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-full transition-all duration-300"
            >
              Visit Us
            </Link>
            <Link
              href="/#menu"
              aria-label="Explore Our Menu"
              className="inline-flex button items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-full transition-all duration-300"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
