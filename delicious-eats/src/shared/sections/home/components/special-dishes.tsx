"use client";

import Image from "next/image";
import React from "react";

const specialDishes = [
  {
    name: "Grilled Salmon",
    description: "Fresh salmon fillet with a lemon butter glaze.",
    image: "/images/main/grilled-salmon.webp",
  },
  {
    name: "Bruschetta",
    description: "Grilled bread topped with fresh tomatoes, garlic, and basil",
    image: "/images/starters/bruschetta.webp",
  },
  {
    name: "Chocolate Crepe",
    description: "Delicate crepe filled with rich chocolate and fresh berries.",
    image: "/images/desserts/crepes.webp",
  },
];

const SpecialDishes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Our Special Dishes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Carefully crafted meals to delight your senses. Each dish is made with
          fresh ingredients and presented beautifully.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="relative w-full h-64">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="/menu"
          className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
        >
          See More
          <span className="ml-2 text-xl">→</span>
        </a>
      </div>
    </section>
  );
};

export default SpecialDishes;
