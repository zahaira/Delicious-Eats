"use client";

import React, { useEffect } from "react";
import Hero from "./components/hero";
import RestaurantAtmosphere from "./components/restaurant-atmosphere";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div>
      <Hero />
      <RestaurantAtmosphere />
    </div>
  );
};

export default HomePage;
