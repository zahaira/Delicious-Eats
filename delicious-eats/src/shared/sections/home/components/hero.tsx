"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/images/hero/hero1.webp",
    alt: "Delicious food 1",
  },
  {
    id: 2,
    src: "/images/hero/hero2.webp",
    alt: "Delicious food 2",
  },
  {
    id: 3,
    src: "/images/hero/hero3.webp",
    alt: "Delicious food 3",
  },
];
const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
          Welcome to Delicious Eats
        </h1>
      </div>
    </div>
  );
};

export default Hero;
