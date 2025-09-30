import About from "@/shared/sections/about/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

const Page = () => {
  return (
    <div className="pt-[80px]">
      <About />
    </div>
  );
};

export default Page;
