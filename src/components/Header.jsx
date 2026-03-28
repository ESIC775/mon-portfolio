import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
            MDev
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-blue-400" : "text-gray-300"
            } hover:text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group`}
          >
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/apropos"
            className={`${
              isActive("/apropos") ? "text-blue-400" : "text-gray-300"
            } hover:text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group`}
          >
            A propos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/formation"
            className={`${
              isActive("/formation") ? "text-blue-400" : "text-gray-300"
            } hover:text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group`}
          >
            Formation
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/experiences"
            className={`${
              isActive("/experiences") ? "text-blue-400" : "text-gray-300"
            } hover:text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group`}
          >
            Experiences
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/projets"
            className={`${
              isActive("/projets") ? "text-blue-400" : "text-gray-300"
            } hover:text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group`}
          >
            Projets
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className={`${
              isActive("/contact") ? "text-blue-400" : "text-gray-300"
            } hover:text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group`}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 animate-fadeInUp">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/") ? "text-blue-400 bg-gray-800/50" : "text-gray-300"
              } hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50`}
            >
              Accueil
            </Link>
            <Link
              to="/apropos"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/apropos")
                  ? "text-blue-400 bg-gray-800/50"
                  : "text-gray-300"
              } hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50`}
            >
              A propos
            </Link>
            <Link
              to="/resumer"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/resumer")
                  ? "text-blue-400 bg-gray-800/50"
                  : "text-gray-300"
              } hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50`}
            >
              Resumer
            </Link>
            <Link
              to="/experiences"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/experiences")
                  ? "text-blue-400 bg-gray-800/50"
                  : "text-gray-300"
              } hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50`}
            >
              Experiences
            </Link>
            <Link
              to="/projets"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/projets")
                  ? "text-blue-400 bg-gray-800/50"
                  : "text-gray-300"
              } hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50`}
            >
              Projets
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/contact")
                  ? "text-blue-400 bg-gray-800/50"
                  : "text-gray-300"
              } hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
