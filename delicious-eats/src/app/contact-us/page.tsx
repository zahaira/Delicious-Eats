import Contact from "@/shared/sections/contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
};

const Page = () => {
  return (
    <div className="pt-[80px]">
      <Contact />
    </div>
  );
};

export default Page;
