import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-10 md:p-20">
      <div className="flex flex-wrap gap-8 items-center">
        {/* logo */}
        <div className="flex-1 min-w-[160px]">
          <Image
            src="/logo-white.png"
            alt="Delicious Eats"
            width={160}
            height={70}
            className="cursor-pointer object-contain"
          />
        </div>

        {/* Opening hours */}
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-3xl mb-2">Opening hours</h1>
          <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 11:00 AM - 11:00 PM</p>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[100px]">
          <h1 className="text-3xl mb-2">Contact</h1>
          <p>+212 00 00 00 00</p>
        </div>

        {/* Location */}
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-3xl mb-2">Location</h1>
          <p>456 Elmwood Avenue, Springfield, IL 62704, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
