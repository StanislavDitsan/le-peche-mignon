import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Welcome to <span className="text-[#C17A5D]">Le Péché Mignon</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            A cozy French café offering artisan coffee, buttery croissants, and
            fine food products. Nestled on Highbury&apos;s Ronalds Road, we
            invite you to relax, unwind, and savor the moment.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white focus:ring-gray-100"
          >
            Visit Us
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white focus:ring-gray-100"
          >
            Explore Our Menu
          </Link>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex lg:mt-0 mt-4">
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
