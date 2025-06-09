"use client";

import { useEffect, useState } from "react";

interface OpenTableWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OpenTableWidget({
  isOpen,
  onClose,
}: OpenTableWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const existingScript = document.getElementById("opentable-widget");
      const container = document.getElementById("opentable-container");

      if (!existingScript && container) {
        const script = document.createElement("script");
        script.src =
          "//www.opentable.co.uk/widget/reservation/loader?rid=387879&type=standard&theme=standard&color=1&dark=false&iframe=true&domain=couk&lang=en-GB&newtab=false&ot_source=Restaurant%20website&cfe=true";
        script.async = true;
        script.id = "opentable-widget";

        script.onload = () => {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        };

        container.appendChild(script);
      } else {
        setIsLoading(false);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white text-3xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-center text-xl font-semibold text-[#431500] mb-4">
          {isLoading ? "Setting up your table..." : "Reserve Your Table"}
        </h2>

        <div className="flex items-center justify-center w-full min-h-[350px]">
          {isLoading && (
            <div className="w-[320px] animate-pulse space-y-4">
              <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="space-y-3">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md" />
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md" />
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md" />
              </div>
              <div className="h-12 bg-red-300 dark:bg-red-500 rounded-md" />
            </div>
          )}

          <div
            id="opentable-container"
            className={`w-[340px] min-h-[350px] flex items-center justify-center ${
              isLoading ? "hidden" : "block"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
