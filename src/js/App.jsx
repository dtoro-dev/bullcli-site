import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b to-primary from-accent dark:from-accent dark:to-primary/60">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-6 flex items-center justify-center">
              <img src="/src/assets/logo.png" alt="BullCLI Logo" className="w-72  rounded-lg p-2" />
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 dark:text-white mb-6">⚡ Fast Backend CLI Framework</h2>
            <p className="text-lg md:text-xl text-white dark:text-gray-300 mb-10 leading-relaxed">
              Construye proyectos backend en segundos con la velocidad de Rust y la flexibilidad de TypeScript.
            </p>
            <Link to="#descargar" className="btn btn-primary bg-accent cta-button ">
              Descargar BullCLI
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white dark:bg-primary" id="beneficios">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-center mb-16">Beneficios Principales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="feature-card p-6 rounded-lg text-center dark:bg-accent/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">Alta Velocidad</h3>
              <p className="text-gray-text dark:text-gray-light">
                Desarrollado con Rust para un rendimiento excepcional, ofreciendo tiempos de respuesta instantáneos.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="feature-card p-6 rounded-lg text-center dark:bg-accent/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">Fácil de Usar</h3>
              <p className="text-gray-text dark:text-gray-light">
                Interfaz intuitiva inspirada en la CLI de Nest, fácil de aprender y rápida de implementar.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="feature-card p-6 rounded-lg text-center dark:bg-accent/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">Proyectos Profesionales</h3>
              <p className="text-gray-text dark:text-gray-light">
                Automatiza Bullwork para crear estructuras de proyectos empresariales con la mejor arquitectura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50 dark:bg-primary/50" id="caracteristicas">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-center mb-16">Características Poderosas</h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 dark:bg-accent/20 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary dark:text-white mb-2">new project</h3>
                <p className="text-gray-text dark:text-gray-light">Crea nuevos proyectos con estructuras optimizadas en segundos.</p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start space-x-4 dark:bg-accent/20 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary dark:text-white mb-2">generate:module</h3>
                <p className="text-gray-text dark:text-gray-light">Genera módulos completos con todas las capas necesarias.</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start space-x-4 dark:bg-accent/20 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary dark:text-white mb-2">run</h3>
                <p className="text-gray-text dark:text-gray-light">Ejecuta tu aplicación con configuraciones optimizadas automáticamente.</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex items-start space-x-4 dark:bg-accent/20 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary dark:text-white mb-2">install</h3>
                <p className="text-gray-text dark:text-gray-light">Integra paquetes y dependencias con configuraciones automáticas.</p>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="flex items-start space-x-4 dark:bg-accent/20 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary dark:text-white mb-2">prisma</h3>
                <p className="text-gray-text dark:text-gray-light">Herramientas para trabajar con Prisma ORM de forma integrada.</p>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="flex items-start space-x-4 dark:bg-accent/20 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary dark:text-white mb-2">seed</h3>
                <p className="text-gray-text dark:text-gray-light">Genera y ejecuta datos iniciales para tu base de datos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-b from-primary to-accent dark:from-primary dark:to-accent/60 text-white" id="descargar">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empieza hoy a construir el futuro de tu backend 🚀</h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Únete a los desarrolladores que ya están creando aplicaciones backend de nivel profesional en tiempo récord.
          </p>
          <Link to="#" className="btn btn-secondary bg-primary dark:bg-accent text-white cta-button text-lg">
            Descargar BullCLI
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App