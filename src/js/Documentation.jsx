import React from 'react'
import ReactMarkdown from 'react-markdown'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'

function Documentation() {
  const markdown = `
# 
**BullCLI** es un instalador y herramienta de línea de comandos (CLI), creada en Rust, diseñada para trabajar en conjunto con el framework [**Bullwork**](https://www.npmjs.com/package/bullwork).

Te permite **crear proyectos backend en segundos**, administrar módulos, y manejar todo el flujo de desarrollo de una manera simple, eficiente y profesional.

## 🚀 ¿Qué es BullCLI?

BullCLI es la forma más rápida y moderna de construir backends profesionales usando Bullwork. Inspirada en la simplicidad de NestJS CLI, pero potenciada por el rendimiento de Rust.

- Creación instantánea de proyectos base
- Generación de módulos organizados (generate:module)
- Ejecución de servidores de desarrollo (dev)
- Administración de bases de datos SQLite y Prisma (prisma, seed)
- Instalación y desinstalación de dependencias (install, uninstall)

## 📦 Instalación

Puedes descargar el instalador desde aquí:

👉 [Descargar BullCLI](https://example.com) (Windows MSI)

## ⚙️ Comandos principales

- \`bull new\`: Crear un nuevo proyecto Bullwork
- \`bull dev\`: Levantar el servidor de desarrollo
- \`bull generate:module <nombre>\`: Crear un nuevo módulo
- \`bull remove:module <nombre>\`: Elimina un módulo
- \`bull install <paquete>\`: Instalar nuevas dependencias
- \`bull uninstall <paquete>\`: Eliminar dependencias
- \`bull prisma init\`: Inicializar Prisma y SQLite
- \`bull prisma migrate-dev\`: Ejecutar migraciones en desarrollo
- \`bull prisma migrate-prod\`: Ejecutar migraciones para producción
- \`bull seed\`: Ejecutar archivos de seed

## 🛠️ Requisitos

- Node.js 18 o superior
- pnpm instalado globalmente (recomendado)
- Sistema operativo: Windows 10/11
- Prisma instalado como dependencia

## 🛡️ Licencia

© 2025 Diego Toro - Todos los derechos reservados.
`

  return (
    <>
      <Header />
      <section className="pt-24 pb-16 bg-gradient-to-b to-primary from-accent dark:from-accent dark:to-primary/60">
        <div className="container">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <img src="/src/assets/logo.png" alt="BullCLI Logo" className="w-96 rounded-lg p-2 mb-8" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-300">
              Documentación de BullCLI
            </h1>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 mb-24 flex flex-col items-center">
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
      <section className="pt-20 bg-gradient-to-b to-accent from-primary dark:from-primary dark:to-accent/60">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <Link to="https://dtoro-dev-portfolio.netlify.app/">
            <img src="/src/assets/dtorodev-bg.png" alt="BullCLI Logo" className="w-96 rounded-lg p-2 mb-8" />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Documentation