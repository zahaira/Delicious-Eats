"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const slides = [
  {
    id: 1,
    src: "/images/hero/hero1.webp",
    alt: "Delicious food 1",
  },
  {
    id: 4,
    src: "/images/hero/restaurant.webp",
    alt: "Delicious food restaurant",
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
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-4 animate-fadeIn">
          Welcome to Delicious Eats
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 max-w-xl drop-shadow-md animate-fadeIn delay-200">
          We impress with unique combinations of flavors that have no analogues.
          Once you try it, you can’t forget the taste!
        </p>

        <div className="animate-fade-in-up animation-delay-600">
          <Link
            href="/reservation"
            className="inline-flex items-center bg-white hover:bg-primary-dark text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve a table
            <BiChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
