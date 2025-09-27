import Image from "next/image";
import React from "react";

const RestaurantAtmosphere = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2
            className="font-bold text-center mb-2 uppercase text-black"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3.3rem)" }}
          >
            restaurant atmosphere
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Experience a unique dining atmosphere, where delicious dishes and
            attentive service come together for an unforgettable experience{" "}
          </p>
        </div>

        <div className="w-full">
          {/* Images Grid - Mobile First Approach */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:hidden">
            <div
              className="relative w-full max-w-ms aspect-[3/2]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/images/restaurant2.webp"
                alt="Restaurant Atmosphere - Main View"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
            <div className="flex gap-3 sm:gap-4 w-full max-w-ms justify-center">
              <div
                className="relative w-1/2 aspect-square"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  src="/images/restaurant1.webp"
                  alt="Restaurant Atmosphere - Detail 1"
                  fill
                  className="rounded-lg object-cover shadow-md"
                />
              </div>
              <div
                className="relative w-1/2 aspect-square"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image
                  src="/images/restaurant3.webp"
                  alt="Restaurant Atmosphere - Detail 2"
                  fill
                  className="rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Tablet & Desktop Layout - Side by side */}
          <div className="hidden md:flex justify-center items-center gap-4 lg:gap-6 xl:gap-8">
            <div
              className="relative w-80 h-80 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/images/restaurant1.webp"
                alt="Restaurant Atmosphere 1"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div
              className="relative w-100 h-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/images/restaurant2.webp"
                alt="Restaurant Atmosphere 2"
                fill
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </div>

            <div
              className="relative w-80 h-80"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/images/restaurant3.webp"
                alt="Restaurant Atmosphere 3"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantAtmosphere;
