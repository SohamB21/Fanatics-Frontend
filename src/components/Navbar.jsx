import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiList, PiX, PiSignIn } from "react-icons/pi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsSticky(window.innerWidth > window.innerHeight);
  }, []);

  // Nav items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Shop", path: "/shop" },
    { label: "Sell Jersey", path: "/sell-jerseys" },
  ];

  return (
    <header
      className={`w-full top-0 left-0 right-0 shadow-md z-50 ${isSticky ? "sticky" : ""}`}
    >
      <nav
        className={`py-4 lg:px-8 px-4 flex justify-between items-center bg-navy ${isSticky ? "sticky" : ""}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2">
          <span className="antialiased pt-1 text-xl text-orange text-center font-russoOne">
            FANATICS.
          </span>
        </Link>

        {/* Responsive Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <PiX className="antialiased w-6 h-6 text-orange hover:text-lightBlue" />
            ) : (
              <PiList className="antialiased w-6 h-6 text-orange hover:text-lightBlue" />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`md:hidden top-16 left-0 right-0 bg-navy shadow-md transition duration-500 ${isMenuOpen ? "absolute" : "hidden"}`}
        >
          <ul className="py-2">
            {navItems.map(({ label, path }, index) => (
              <li key={path} className="mb-2">
                <Link
                  to={path}
                  className="antialiased block text-base uppercase transition-colors duration-300 px-4 py-2 font-fredoka text-cream"
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <Link
              to="/signin"
              className="text-base uppercase transition-colors duration-300 flex items-center text-orange hover:text-lightBlue px-4 mb-2 font-fredoka"
            >
              <span className="mr-2">Sign In</span>
              <PiSignIn className="w-6 h-6" />
            </Link>
          </ul>
        </div>

        {/* Nav Items */}
        <ul className="flex-grow flex justify-center space-x-6 hidden md:flex">
          {navItems.map(({ label, path }, index) => (
            <li key={path}>
              <Link
                to={path}
                className="antialiased text-base uppercase transition-colors duration-300 font-fredoka text-cream hover:text-lightBlue"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In Option */}
        <div className="hidden md:flex items-center">
          <Link
            to="/signin"
            className="antialiased text-base uppercase transition-colors duration-300 flex items-center text-orange hover:text-lightBlue font-fredoka"
          >
            <PiSignIn className="w-6 h-6" />
            <span className="ml-2">Sign In</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
