"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type VehicleGalleryProps = {
  images: string[];
  vehicleName: string;
};

export function VehicleGallery({
  images,
  vehicleName,
}: VehicleGalleryProps) {
  const validImages = images.filter(Boolean);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage =
    validImages[selectedIndex] || "/vehicles/placeholder.jpg";

  function showPreviousImage() {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0
        ? validImages.length - 1
        : currentIndex - 1,
    );
  }

  function showNextImage() {
    setSelectedIndex((currentIndex) =>
      currentIndex === validImages.length - 1
        ? 0
        : currentIndex + 1,
    );
  }

  return (
    <div>
      <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-slate-200 shadow-sm">
        <Image
          src={selectedImage}
          alt={`${vehicleName} image ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />

        {validImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Show previous image"
              className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-slate-950/75 text-white shadow-lg transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={showNextImage}
              aria-label="Show next image"
              className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-slate-950/75 text-white shadow-lg transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>

            <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/80 px-3 py-1.5 text-sm font-bold text-white">
              {selectedIndex + 1} / {validImages.length}
            </span>
          </>
        )}
      </div>

      {validImages.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {validImages.map((image, index) => {
            const selected = index === selectedIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Show ${vehicleName} image ${index + 1}`}
                aria-current={selected ? "true" : undefined}
                className={`relative aspect-4/3 overflow-hidden rounded-xl border-2 bg-slate-200 transition ${
                  selected
                    ? "border-cyan-500 ring-2 ring-cyan-200"
                    : "border-transparent hover:border-slate-400"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 33vw, 150px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}