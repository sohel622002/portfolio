"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProjectImageCarousel({
  images,
  alt,
  imageFit = "cover",
  width,
  height,
}: {
  images: string[];
  alt: string;
  imageFit?: "cover" | "contain";
  width: number;
  height: number;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goPrev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative h-full w-full">
      <Image
        src={images[index]}
        alt={alt}
        width={width}
        height={height}
        priority
        className={`h-full w-full ${
          imageFit === "contain" ? "object-contain" : "object-cover"
        }`}
      />

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-foreground shadow-soft transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-foreground shadow-soft transition-transform hover:scale-105"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-foreground" : "w-1.5 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
