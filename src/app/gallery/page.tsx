"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Gallery = () => {
  const images = [
    {
      src: "/peche_mignon-1.jpg",
      alt: "peche_mignon-1",
    },
    {
      src: "/peche_mignon-2.jpg",
      alt: "Image 2",
    },
    {
      src: "/peche_mignon-3.jpg",
      alt: "Image 3",
    },
    {
      src: "/peche_mignon-4.jpg",
      alt: "Image 4",
    },
    {
      src: "/peche_mignon-5.jpg",
      alt: "Image 5",
    },
    {
      src: "/peche_mignon-6.jpg",
      alt: "Image 6",
    },
    {
      src: "/peche_mignon-7.jpg",
      alt: "Image 7",
    },
    {
      src: "/peche_mignon-8.jpg",
      alt: "Image 7",
    },
    {
      src: "/peche_mignon-9.jpg",
      alt: "Image 7",
    },
    {
      src: "/peche_mignon-10.jpg",
      alt: "Image 7",
    },
    {
      src: "/peche_mignon-11.jpg",
      alt: "Image 7",
    },
    {
      src: "/peche_mignon-12.jpg",
      alt: "Image 7",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const showPrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex! > 0 ? prevIndex! - 1 : images.length - 1
      );
    }
  };

  const showNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex! < images.length - 1 ? prevIndex! + 1 : 0
      );
    }
  };

  return (
    <section>
      <NavBar />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-3xl font-bold md:text-5xl dark:text-white text-left">
          Gallery
        </h2>
        <p className="mt-4 mb-8 text-sm text-gray-500 md:mb-12 lg:mb-16 text-left">
          Explore our amazing cafe.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {images.map((image, index) => (
            <a
              href="#"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                openModal(index);
              }}
              className="relative flex h-[300px] items-end group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="inline-block h-full w-full rounded-lg object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      {isModalOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center sm:px-10 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-gray-900 p-5 rounded-lg max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl rounded-full bg-gray-100 px-2"
              onClick={closeModal}
            >
              ×
            </button>
            <Image
              width={900}
              height={900}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="rounded-lg max-w-full max-h-[80vh] object-contain"
            />

            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={showPrevious}
              >
                Previous
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={showNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Gallery;
