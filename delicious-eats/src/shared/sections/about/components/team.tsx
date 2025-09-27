import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Talented Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-100 leading-tight">
            Meet Our
            <span className="text-transparent bg-gradient-to-r from-white to-yellow-400 bg-clip-text pl-2">
              Culinary Artists
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            The passionate professionals who bring our culinary vision to life
            every day, creating unforgettable experiences with every dish.
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-12 sm:space-y-16">
          {/* Chef Marco - Left Layout */}
          <div className="group grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <Image
                  src="/images/team/chef-marco.webp"
                  alt="Chef Marco Valentino"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-primary/90 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Executive Chef
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:pl-6 xl:pl-8">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                  Chef Marco Valentino
                </h3>
                <p className="text-primary text-base sm:text-lg font-medium">
                  Executive Chef & Founder
                </p>
              </div>

              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-yellow-400 rounded-full"></div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With 20 years of experience in Michelin-starred restaurants
                across Europe, Chef Marco brings passion and innovation to every
                dish. His culinary journey began in the hills of Tuscany and has
                taken him through the finest kitchens of Paris and London.
              </p>

              {/* Small gallery */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
                <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/team/chef.webp"
                    alt="Chef Marco cooking"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                      20+
                    </div>
                    <div className="text-xs text-gray-400">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chef Antonio - Right Layout */}
          <div className="group grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 lg:pr-6 xl:pr-8">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                  Chef Antonio Rossi
                </h3>
                <p className="text-primary text-base sm:text-lg font-medium">
                  Sous Chef & Creative Director
                </p>
              </div>

              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-yellow-400 to-primary rounded-full"></div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                A culinary artist specializing in fusion cuisine, Antonio
                creates beautiful presentations that are as delicious as they
                are stunning. His innovative approach combines traditional
                techniques with modern aesthetics.
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-primary/20 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                  Fusion Cuisine
                </span>
                <span className="bg-primary/20 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                  Plating Artist
                </span>
                <span className="bg-primary/20 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                  Innovation
                </span>
              </div>

              {/* Small gallery */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
                <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden bg-yellow-500/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                      15+
                    </div>
                    <div className="text-xs text-gray-400">Awards Won</div>
                  </div>
                </div>
                <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/team/chef1.webp"
                    alt="Chef Antonio plating"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <Image
                  src="/images/team/chef-antonio.webp"
                  alt="Chef Antonio Rossi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-yellow-500/90 backdrop-blur-sm text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Sous Chef
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
