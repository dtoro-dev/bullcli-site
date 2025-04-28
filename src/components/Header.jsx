import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiCommandLine } from "react-icons/hi2";

function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark ? 'light' : 'dark'
  }

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 py-2 bg-white dark:bg-primary/95">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-primary dark:text-white">
          <HiCommandLine />
          BullCLI
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors">Home</Link>
          <Link to="https://github.com/dtoro-dev/bullcli-site/releases/download/v2.0.0/bullcli-installer.exe" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors">Descargar</Link>
          <Link to="/documentation" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors">Documentación</Link>
          <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/50">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </nav>
        
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/50">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-primary shadow-lg absolute w-full">
          <div className="container py-4 space-y-4">
            <Link to="/" className="block text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors">Home</Link>
            <Link to="#descargar" className="block text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors">Descargar</Link>
            <Link to="/documentation" className="block text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors">Documentación</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header