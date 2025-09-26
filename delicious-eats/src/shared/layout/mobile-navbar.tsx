import { paths } from "@/constant/paths";
import Link from "next/link";
import React from "react";

interface props {
  menuOpen: boolean;
  closeMenu: () => void;
}

const MobileNav = ({ menuOpen, closeMenu }: props) => {
  return (
    <div
      className={`md:hidden fixed top-[12vh] left-0 w-full bg-primary px-6 py-6 flex flex-col gap-4 ${
        menuOpen ? "mobile-slide-down" : "mobile-slide-up"
      } z-50`}
    >
      {paths.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className="nav_link_dark relative text-white"
          onClick={closeMenu}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
