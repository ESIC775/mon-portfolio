import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage'
import ExperiencesPage from './pages/ExperiencesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import Preloader from './components/Preloader'

import StarryBackground from './components/StarryBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StarryBackground />
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <div className="min-h-screen text-white flex flex-col transition-opacity duration-700 animate-[fadeIn_0.7s_ease-out]">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/apropos" element={<AboutPage />} />
                <Route path="/formation" element={<ResumePage />} />
                <Route path="/experiences" element={<ExperiencesPage />} />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <footer className="py-6 text-center text-gray-500 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
              <p>© {new Date().getFullYear()} Mohamed Daoud. Tous droits réservés.</p>
            </footer>
          </div>
        </Router>
      )}
    </>
  )
}

export default App
