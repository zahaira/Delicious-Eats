import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <FaSearch className="text-white text-6xl mb-6 animate-bounce" />
      <p className="text-gray-500 mb-6">
        Oups ! Cette page n’existe pas, mais vous pouvez explorer notre menu 🍽️
      </p>
      <Link
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFound;
