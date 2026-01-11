// components/Navbar.tsx
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets";

interface NavbarProps {
  activeSection: string;
  smoothScrollTo: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  smoothScrollTo,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Removed "contact" from the navItems array
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "team", label: "Team" },
    { id: "authors", label: "Authors" },
    { id: "reviews", label: "Reviews" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleConsultationClick = () => {
    smoothScrollTo("contact");
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => {
              smoothScrollTo("home");
              setIsMenuOpen(false);
            }}
            className="flex items-center cursor-pointer"
          >
            <img src={logo} alt="" className="w-10 h-10 rounded" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  smoothScrollTo(item.id);
                }}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? activeSection === item.id
                      ? "text-[#d4af37] font-semibold"
                      : "text-[#213448] hover:text-[#d4af37]"
                    : activeSection === item.id
                    ? "text-white font-semibold"
                    : "text-white/90 hover:text-[#d4af37] transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
                } cursor-pointer`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleConsultationClick}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? "hidden lg:block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-white px-8 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
                  : "hidden lg:block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-white px-8 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset cursor-pointer ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-yellow-500"
                  : "text-white hover:text-white/80 hover:bg-white/10 focus:ring-white"
              }`}
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden absolute left-0 right-0 top-16 bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
          >
            <motion.div className="px-2 py-2 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    smoothScrollTo(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    activeSection === item.id
                      ? "bg-yellow-50 text-yellow-600"
                      : "text-gray-700 hover:bg-gray-50"
                  } block w-full px-4 py-3 text-left rounded-md text-sm font-medium transition-colors duration-150`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConsultationClick}
                className="block w-full px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-white text-left rounded-md text-sm font-medium transition-colors duration-150 hover:from-[#c19b2e] hover:to-[#e5c03c]"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;