import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="formation"
      className="py-16 sm:py-20 relative overflow-hidden min-h-screen"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Formation
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Master 1 */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 sm:p-8 hover-lift group"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Master Informatique
                  </h3>
                  <p className="text-blue-400 text-sm sm:text-base">
                    Université Sorbonne Paris Nord
                  </p>
                </div>
              </div>
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                En cours
              </span>
            </div>

            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              M1 Informatique - Formation approfondie en informatique avec
              spécialisation en développement et nouvelles technologies
            </p>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                Compétences acquises
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-105 transition-transform">
                  Algorithmique
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:scale-105 transition-transform">
                  Structures de données avancées
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-105 transition-transform">
                  Java
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:scale-105 transition-transform">
                  Programmation fonctionnelle
                </span>
              </div>
            </div>
          </motion.div>

          {/* Licence */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 sm:p-8 hover-lift group"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Licence Informatique
                  </h3>
                  <p className="text-purple-400 text-sm sm:text-base">
                    Université de Djibouti • Djibouti
                  </p>
                </div>
              </div>
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                Obtenu - Bac+3
              </span>
            </div>

            <p className="text-gray-500 mb-2 text-sm">2020/2021</p>

            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Formation fondamentale en informatique couvrant les bases de la
              programmation et des systèmes
            </p>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                Compétences acquises
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-105 transition-transform">
                  Programmation
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:scale-105 transition-transform">
                  Bases de données
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-105 transition-transform">
                  Réseaux
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:scale-105 transition-transform">
                  Algorithmique
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
