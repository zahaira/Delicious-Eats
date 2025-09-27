import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <h1
        className="font-bold text-center mb-8"
        style={{ fontSize: "clamp(1.5rem, 5vw, 3.3rem)" }}
      >
        CONTACT US
      </h1>

      {/* Top row: Opening hours + Contact */}
      <div className="flex flex-wrap justify-between gap-7 mb-8">
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center mb-2">
            <FaRegClock className="w-6 h-6 text-white mr-2" />
            <h1 className="text-3xl">Opening hours</h1>
          </div>
          <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 11:00 AM - 11:00 PM</p>
        </div>
        <div className="flex-1 min-w-[150px]">
          <div className="flex items-center mb-2">
            <LuPhone className="w-6 h-6 text-white mr-2" />
            <h1 className="text-3xl">Contact</h1>
          </div>
          <p>+212 00 00 00 00</p>
        </div>
      </div>

      {/* Location row: full width */}
      <div className="w-full">
        <div className="flex items-center mb-2">
          <IoLocationOutline className="w-6 h-6 text-white mr-2" />
          <h1 className="text-3xl">Location</h1>
        </div>
        <p className="mb-3">456 Elmwood Avenue, Springfield, IL 62704, USA</p>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.996486669206!2d-7.618019084805287!3d33.59537978072916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaefef8c3a7b9a7%3A0x123456789abcdef0!2sMorocco!5e0!3m2!1sen!2sma!4v1690000000000!5m2!1sen!2sma"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
