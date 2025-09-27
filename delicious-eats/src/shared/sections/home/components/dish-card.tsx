"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsClock, BsStar } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

interface Dish {
  name: string;
  description: string;
  image: string;
  price?: string;
  rating?: number;
  prepTime?: string;
  servings?: number;
  category: "main" | "starter" | "dessert";
  isPopular?: boolean;
}

interface DishCardProps {
  dish: Dish;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "main":
      return "bg-blue-100 text-blue-800";
    case "starter":
      return "bg-green-100 text-green-800";
    case "dessert":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const DishCard = ({ dish }: DishCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {dish.isPopular && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          <BsStar className="inline w-4 h-4 mr-1" fill="currentColor" />
          Popular
        </div>
      )}

      {/* Category Badge */}
      <div
        className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
          dish.category
        )}`}
      >
        {dish.category === "main"
          ? "Main Course"
          : dish.category === "starter"
          ? "Starter"
          : "Dessert"}
      </div>

      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={dish.image}
          alt={`${dish.name} - ${dish.description}`}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Rating */}
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {dish.name}
          </h3>
          {dish.rating && (
            <div className="flex items-center space-x-1 text-yellow-500">
              <BsStar className="w-5 h-5" fill="currentColor" />
              <span className="text-gray-700 font-semibold">{dish.rating}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{dish.description}</p>

        {/* Details */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {dish.prepTime && (
              <div className="flex items-center space-x-1">
                <BsClock className="w-4 h-4" />
                <span>{dish.prepTime}</span>
              </div>
            )}
            {dish.servings && (
              <div className="flex items-center space-x-1">
                <FaUser className="w-4 h-4" />
                <span>{dish.servings} person(s)</span>
              </div>
            )}
          </div>
          {dish.price && (
            <div className="text-2xl font-bold text-primary">{dish.price}</div>
          )}
        </div>

        {/* Action Button */}
        <button
          className="w-full mt-4 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02]"
          aria-label={`Order ${dish.name}`}
        >
          Order Now
        </button>
      </div>
    </article>
  );
};

export default DishCard;
