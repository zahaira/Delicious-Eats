"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

const reviews = [
  {
    name: "James Smith",
    role: "Food Critic",
    comment:
      "Absolutely fantastic dishes! The flavors and presentation were top-notch. Every bite was a culinary masterpiece that transported me to gastronomic heaven.",
    image: "/images/reviews/james.webp",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Chef Enthusiast",
    comment:
      "I loved the atmosphere and the creativity of the menu. The staff was incredibly knowledgeable and passionate about their craft. An unforgettable experience!",
    image: "/images/reviews/michael.webp",
    rating: 4,
  },
  {
    name: "David Wilson",
    role: "Traveler",
    comment:
      "A wonderful dining experience with great service and delicious food. This place exceeded all my expectations and created memories I'll cherish forever.",
    image: "/images/reviews/david.webp",
    rating: 5,
  },
];

const getRoleIcon = (role: string) => {
  switch (role.toLowerCase()) {
    case "food critic":
      return <MdRateReview className="w-4 h-4 text-amber-400" />;
    case "chef enthusiast":
      return <IoRestaurant className="w-4 h-4 text-amber-400" />;
    case "food blogger":
      return <HiOutlineSparkles className="w-4 h-4 text-amber-400" />;
    default:
      return <FaUserCircle className="w-4 h-4 text-amber-400" />;
  }
};

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Slider Container */}
        <div className="text-center mb-1">
          <h2
            className="font-bold text-center uppercase bg-gradient-to-r from-white via-amber-200 to-yellow-400 bg-clip-text text-transparent tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3.3rem)" }}
          >
            What Our Guests Say
          </h2>
        </div>
        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-[450px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl md:rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12"
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 h-full border border-white/20 shadow-2xl relative overflow-hidden group">
                    {/* Floating elements */}
                    <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 opacity-30">
                      <FaQuoteLeft className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-amber-400/50" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                      {/* Avatar with glow effect */}
                      <div className="relative mb-4 sm:mb-6 md:mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-lg opacity-60 scale-110"></div>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 p-1">
                          <Image
                            src={review.image}
                            alt={review.name}
                            width={96}
                            height={96}
                            className="rounded-full object-cover w-full h-full"
                          />
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8 gap-1 sm:gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 ${
                              i < review.rating
                                ? "text-amber-400 drop-shadow-lg"
                                : "text-gray-600"
                            }`}
                            style={{
                              filter:
                                i < review.rating
                                  ? "drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))"
                                  : "none",
                            }}
                          />
                        ))}
                      </div>

                      {/* Comment */}
                      <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-light leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-4xl italic px-4">
                        {review.comment}
                      </blockquote>

                      {/* Author info */}
                      <div className="flex flex-col items-center">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-2 sm:gap-3 text-amber-300">
                          {getRoleIcon(review.role)}
                          <span className="text-sm sm:text-base md:text-lg font-medium">
                            {review.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-110 z-10"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-110 z-10"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 md:mt-1 gap-2 sm:gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-amber-400 to-yellow-500"
                    : "w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/30 hover:bg-white/50"
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
