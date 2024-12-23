import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center text-center px-4 py-8 lg:grid lg:max-w-screen-xl lg:mx-auto lg:gap-8 lg:grid-cols-12 lg:text-left lg:items-start lg:px-6 lg:py-16">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Welcome to <span className="text-[#431500]">Le Péché Mignon</span>
          </h1>
          <p className="max-w-2xl text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            A cozy French café offering artisan coffee, buttery croissants, and
            fine food products. Nestled on Highbury&apos;s Ronalds Road, we
            invite you to relax, unwind, and savor the moment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white focus:ring-gray-100"
            >
              Visit Us
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white focus:ring-gray-100"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center px-4">
          <Image
            src="/Le-Péché-Mignon.1.jpg"
            alt="mockup"
            width={400}
            height={400}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
}
