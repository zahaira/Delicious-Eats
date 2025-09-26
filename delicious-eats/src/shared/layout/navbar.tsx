"use client";

import { paths } from "@/constant/paths";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

interface props {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar = ({ toggleMenu, menuOpen }: props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <div
      className={`transition-all ${
        navBg || menuOpen || !isHome ? "bg-[#B07B15]/90 shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex justify-between items-center h-full w-[90%] mx-auto">
        {/* logo */}
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Delicious Eats"
              width={120}
              height={30}
              className="cursor-pointer object-contain"
            />
          </Link>
        </div>
        {/* nav_link */}
        <div className="hidden md:flex w-fit gap-10 mx-auto font-medium text-white">
          {paths.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`${
                  navBg || !isHome ? "nav_link_dark" : "nav_link_light"
                } relative`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Burger menu */}
        <div className="flex items-center space-x-4 md:hidden">
          {menuOpen ? (
            <HiXMark
              onClick={toggleMenu}
              className="w-8 h-8 cursor-pointer text-white "
            />
          ) : (
            <HiBars3BottomRight
              onClick={toggleMenu}
              className="w-8 h-8 cursor-pointer text-white "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
