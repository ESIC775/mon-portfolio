import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 sm:mb-6 py-2 leading-tight">
              Mohamed Daoud
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-2">
              Étudiant
            </p>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10">
              Développeur Fullstack
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-105 text-center"
              >
                Me contacter
              </Link>
              <Link
                to="/projets"
                className="px-6 sm:px-8 py-3 rounded-full border-2 border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white font-medium transition-all hover:bg-purple-500/10 text-center"
              >
                Voir mes projets
              </Link>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div
            className="flex justify-center md:justify-end mt-8 md:mt-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow"></div>

              {/* Image container */}
              <div className="relative">
                <img
                  src="/E43C634E-7B99-4046-8E57-AD8D2E98B7B3_1_105_c.jpeg"
                  alt="Mohamed Daoud"
                  className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-gray-700 shadow-2xl group-hover:border-purple-500 transition-all duration-500 group-hover:scale-105"
                />
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 scale-110 group-hover:scale-115 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
