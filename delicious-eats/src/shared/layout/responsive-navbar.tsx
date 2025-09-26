"use client";

import React, { useState } from "react";
import Navbar from "./navbar";
import MobileNav from "./mobile-navbar";

const ResponsiveNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <MobileNav closeMenu={closeMenu} menuOpen={menuOpen} />
    </div>
  );
};

export default ResponsiveNavbar;
