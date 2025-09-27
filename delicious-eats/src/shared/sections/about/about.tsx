"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { BiChevronRight, BiAward } from "react-icons/bi";
import { BsClock, BsStar, BsPeople } from "react-icons/bs";
import Team from "./components/team";

const About = () => {
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

  const stats = [
    { icon: BsClock, label: "Years of Excellence", value: "15+" },
    { icon: BsPeople, label: "Happy Customers", value: "10K+" },
    { icon: BiAward, label: "Awards Won", value: "25+" },
    { icon: BsStar, label: "Average Rating", value: "4.9" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/restaurant.webp"
            alt="Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
            A culinary journey that began with a simple dream: to create
            extraordinary dining experiences that bring people together.
          </p>
          <div className="animate-fade-in-up animation-delay-600">
            <Link
              href="#story"
              className="inline-flex items-center bg-white hover:bg-primary-dark text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Discover Our Journey
              <BiChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" ref={sectionRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
                A Legacy of Flavor
              </h2>
              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  Founded in 2009 by the Valentino family, our restaurant began
                  as a small bistro with a big dream: bringing exceptional food
                  and warm hospitality together. Guided by fresh seasonal
                  ingredients, a balance of tradition and innovation, and
                  genuine care for every guest, we’ve grown into one of the
                  city’s most beloved dining spots.
                </p>
                <p>
                  Today, we welcome over 500 guests each week—serving not just
                  delicious meals, but lasting memories.
                </p>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative">
                <Image
                  src="/images/restaurant-history.webp"
                  alt="Restaurant History"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
                  <div className="flex items-center space-x-3">
                    <BiAward className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-bold text-gray-900">Award Winner</p>
                      <p className="text-sm text-gray-600">
                        Best Local Restaurant 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center text-white transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Experience Our Story?
          </h2>
          <p className="text-xl text-primary-light mb-8 leading-relaxed">
            Join us for an unforgettable dining experience where every meal
            tells a story and every guest becomes part of our family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              Make a Reservation
              <BiChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="/menu.pdf"
              download="DeliciousEats-Menu.pdf"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
