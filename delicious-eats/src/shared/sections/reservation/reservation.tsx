"use client";

import React from "react";

const ReservationPage = () => {
  return (
    <div className="flex justify-center px-1 py-0">
      <div className="w-full max-w-6xl p-6 md:p-12">
        <h1
          className="font-bold text-center mb-8"
          style={{ fontSize: "clamp(1.5rem, 5vw, 3.3rem)" }}
        >
          BOOK A TABLE
        </h1>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
            <div className="flex-1 flex flex-col">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
            <div className="flex-1 flex flex-col">
              <input
                type="email"
                placeholder="Email Adress"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 flex-nowrap">
            <div className="flex-1 flex flex-col min-w-0">
              <label className="text-gray-300 mb-1">Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div className="flex-1 flex flex-col min-w-0">
              <label className="text-gray-300 mb-1">Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300">
              Number of people
              <span className="text-gray-400 font-normal ml-1">
                (For groups of 7 people or more, please call us on +212 00 00 00
                00)
              </span>
            </label>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { label: "1 Guest", value: "1" },
                { label: "2 Guests", value: "2" },
                { label: "3 Guests", value: "3" },
                { label: "4 Guests", value: "4" },
                { label: "5 Guests", value: "5" },
                { label: "6 Guests", value: "6" },
                { label: "7 Guests", value: "7" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex items-center gap-2 cursor-pointer text-gray-200"
                >
                  <input
                    type="radio"
                    name="numberOfPeople"
                    value={item.value}
                    className="accent-yellow-500 w-4 h-4"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <p className="text-gray-400 mt-2">
            Please note that your table will be booked for 2 hours. Make sure
            you arrive on time so that you can fully enjoy your experience.
          </p>
          {/* Submit */}
          <button
            type="submit"
            className="bg-secondary text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 hover:bg-primary-dark cursor-pointer"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;
