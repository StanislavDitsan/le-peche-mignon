import Image from "next/image";

export default function Carousel() {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative mt-4 h-56 overflow-hidden dark:bg-gray-900 md:h-96">
        {/* Carousel Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-full">
            <Image
              src="/pechemignon_home_pic.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Carousel Image 1"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/50">
              <span>Family friendly outdoor space</span>
            </div>
          </div>
        </div>

        {/* Carousel Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-full">
            <Image
              src="/pechemignon_home_pic.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Carousel Image 2"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/50">
              <span>Slide 2 Text</span>
            </div>
          </div>
        </div>

        {/* Carousel Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-full">
            <Image
              src="/pechemignon_home_pic.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Carousel Image 3"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/50">
              <span>Slide 3 Text</span>
            </div>
          </div>
        </div>

        {/* Carousel Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-full">
            <Image
              src="/pechemignon_home_pic.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Carousel Image 4"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/50">
              <span>Slide 4 Text</span>
            </div>
          </div>
        </div>

        {/* Carousel Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-full">
            <Image
              src="/pechemignon_home_pic.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Carousel Image 5"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/50">
              <span>Slide 5 Text</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
