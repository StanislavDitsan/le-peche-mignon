"use client";
import React, { useState } from "react";

const Gallery = () => {
  // An array of image data for the gallery
  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1666920429649-7562049bb713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
      projectName: "Project 1",
      client: "Client 1",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1666920429649-7562049bb713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 2",
      projectName: "Project 2",
      client: "Client 2",
    },
    {
      src: "/pechemignon_home_pic1.jpg",
      alt: "Image 3",
      projectName: "Project 3",
      client: "Client 3",
    },
    // Add more images here
  ];

  // State to manage the modal visibility and the selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    projectName: string;
    client: string;
  } | null>(null);

  // Function to open the modal with the selected image
  const openModal = (image: {
    src: string;
    alt: string;
    projectName: string;
    client: string;
  }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-3xl font-bold md:text-5xl text-center">Gallery</h2>
        <p className="mt-4 mb-8 text-sm text-gray-500 md:mb-12 lg:mb-16 text-center">
          Explore our amazing cafe.
        </p>
        {/* Content */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {/* Map over the images array and render each item */}
          {images.map((image, index) => (
            <a
              href="#"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                openModal(image);
              }}
              className="relative flex h-[300px] items-end group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="inline-block h-full w-full rounded-lg object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-gray-800">
                  {image.projectName}
                </p>
                <p className="text-sm text-gray-500">{image.client}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center sm:px-10 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-5 rounded-lg max-w-4xl"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl rounded-full bg-gray-100 px-2"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                {selectedImage.projectName}
              </h3>
              <p className="text-sm text-gray-500">{selectedImage.client}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
