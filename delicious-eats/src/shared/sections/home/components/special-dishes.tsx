"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import DishCard from "./dish-card";

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

const specialDishes: Dish[] = [
  {
    name: "Grilled Salmon",
    description:
      "Fresh salmon fillet with a lemon butter glaze, served with seasonal vegetables.",
    image: "/images/main/grilled-salmon.webp",
    price: "€24.99",
    rating: 4.8,
    prepTime: "20 min",
    servings: 1,
    category: "main",
    isPopular: true,
  },
  {
    name: "Bruschetta",
    description:
      "Grilled artisanal bread topped with fresh tomatoes, garlic, and basil.",
    image: "/images/starters/bruschetta.webp",
    price: "€12.99",
    rating: 4.6,
    prepTime: "10 min",
    servings: 2,
    category: "starter",
  },
  {
    name: "Chocolate Crêpe",
    description:
      "Delicate crêpe filled with rich Belgian chocolate and fresh seasonal berries.",
    image: "/images/desserts/crepes.webp",
    price: "€9.99",
    rating: 4.9,
    prepTime: "15 min",
    servings: 1,
    category: "dessert",
    isPopular: true,
  },
];

const SpecialDishes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      aria-labelledby="special-dishes-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2
              id="special-dishes-title"
              className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Our Special Dishes
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
              Carefully crafted meals to delight your senses. Each dish is made
              with fresh ingredients and presented beautifully.
            </p>
            <a
              href="/menu.pdf"
              download="DeliciousEats-Menu.pdf"
              className="group inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Menu
            </a>
          </div>
        </div>

        {/* Dishes Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {specialDishes.map((dish, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <DishCard dish={dish} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="/reservation"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-lg group transition-colors duration-300"
          >
            Book a Table
            <BiChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
