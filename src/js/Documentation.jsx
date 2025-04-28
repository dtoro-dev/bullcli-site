import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function Documentation() {
  return (
    <>
      <Header />
      <section className="pt-24 pb-16 bg-gradient-to-b to-primary from-accent dark:from-accent dark:to-primary/60 text-white dark:text-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <img
              src="/src/assets/logo.png"
              alt="BullCLI Logo"
              className="w-96 rounded-lg p-2 mb-8"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
              Documentación de BullCLI
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 flex flex-col items-center">
        <article className="prose prose-lg max-w-4xl mx-auto text-white dark:text-primary">
          <div className="prose max-w-full">
            <p className="text-primary dark:text-white">
              BullCLI es un instalador y herramienta de línea de comandos (CLI),
              creada en Rust, diseñada para trabajar en conjunto con el
              framework{" "}
              <a
                href="https://www.npmjs.com/package/bullwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Bullwork</strong>
              </a>
              .
            </p>
            <p className="text-primary dark:text-white">
              Te permite{" "}
              <strong className="text-primary dark:text-white">
                crear proyectos backend en segundos
              </strong>
              , administrar módulos, y manejar todo el flujo de desarrollo de
              una manera simple, eficiente y profesional.
            </p>

            <h2 className="text-primary dark:text-white">
              🚀 ¿Qué es BullCLI?
            </h2>
            <p className="text-primary dark:text-white">
              BullCLI es la forma más rápida y moderna de construir backends
              profesionales usando Bullwork. Inspirada en la simplicidad de
              NestJS CLI, pero potenciada por el rendimiento de Rust.
            </p>
            <ul className="text-primary dark:text-white">
              <li>Creación instantánea de proyectos base.</li>
              <li>Generación de módulos organizados (generate:module).</li>
              <li>Ejecución de servidores de desarrollo (dev).</li>
              <li>
                Administración de bases de datos SQLite y Prisma (prisma, seed).
              </li>
              <li>
                Instalación y desinstalación de dependencias (install,
                uninstall).
              </li>
            </ul>

            <h2 className="text-primary dark:text-white">📦 Instalación</h2>
            <p className="text-primary dark:text-white">
              Puedes descargar el instalador desde aquí:
            </p>
            <p className="text-primary dark:text-white">
              👉{" "}
              <a
                href="https://github.com/dtoro-dev/bullcli-site/releases/download/v2.0.0/bullcli-installer.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar BullCLI
              </a>
            </p>
            <p className="text-primary dark:text-white">
              Una vez instalado, puedes comenzar a utilizar bull en tu terminal.
            </p>

            <h2 className="text-primary dark:text-white">📚 Documentación</h2>
            <p className="text-primary dark:text-white">
              Consulta la documentación oficial para aprender todos los comandos
              disponibles:
            </p>
            <p className="text-primary dark:text-white">
              👉 <a href="#">Documentación BullCLI</a>
            </p>

            <h2 className="text-primary dark:text-white">
              ⚙️ Comandos principales
            </h2>
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="text-primary dark:text-white">Comando</th>
                  <th className="text-primary dark:text-white">Descripción</th>
                </tr>
              </thead>
              <tbody className="text-primary dark:text-white">
                {[
                  ["bull new", "Crear un nuevo proyecto Bullwork."],
                  ["bull dev", "Levantar el servidor de desarrollo."],
                  [
                    "bull generate:module <nombre>",
                    "Crear un nuevo módulo (controlador, servicio, DTO, etc.).",
                  ],
                  [
                    "bull remove:module <nombre>",
                    "Eliminar un módulo (controlador, servicio, DTO, etc.).",
                  ],
                  [
                    "bull install <paquete>",
                    "Instalar nuevas dependencias en el proyecto.",
                  ],
                  [
                    "bull uninstall <paquete>",
                    "Eliminar dependencias del proyecto.",
                  ],
                  [
                    "bull prisma init",
                    "Inicializar Prisma y la base de datos SQLite.",
                  ],
                  [
                    "bull prisma migrate-dev",
                    "Ejecutar migraciones en ambiente de desarrollo.",
                  ],
                  [
                    "bull prisma migrate-prod",
                    "Ejecutar migraciones para producción.",
                  ],
                  [
                    "bull seed",
                    "Ejecutar archivos de seed para poblar datos iniciales.",
                  ],
                ].map(([cmd, desc]) => (
                  <tr key={cmd}>
                    <td>
                      <code className="text-primary dark:text-white">
                        {cmd}
                      </code>
                    </td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="text-primary dark:text-white">🛠️ Requisitos</h2>
            <ul className="text-primary dark:text-white">
              <li>Node.js 18 o superior.</li>
              <li>pnpm instalado globalmente (recomendado).</li>
              <li>
                Sistema operativo: Windows 10/11 (versión Linux/Mac en
                preparación).
              </li>
              <li>
                Prisma instalado como dependencia del proyecto (Bullwork CLI lo
                maneja automáticamente).
              </li>
            </ul>

            <h2 className="text-primary dark:text-white">🔄 Instalación</h2>
            <p className="text-primary dark:text-white">
              Descargar e instalar{" "}
              <a
                href="https://github.com/dtoro-dev/bullcli-site/releases/download/v2.0.0/bullcli-installer.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                BullCLI
              </a>
              .
            </p>

            <h3 className="text-primary dark:text-white">
              🔄 Comandos disponibles
            </h3>
            <ul>
              <li>
                <code className="text-primary dark:text-white">bull new</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull new project-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull dev</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull install</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">package-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull i package-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull uninstall</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">package-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull prisma init</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull prisma validate</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">prisma generate</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull prisma migrate-dev</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull prisma</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">migrate-prod</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull generate:module module-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull g:m</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">module-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull remove:module module-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull r:m</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">module-name</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull run script-name [args]</code>
              </li>
              <li>
                <code className="text-primary dark:text-white">bull seed</code>
              </li>
            </ul>

            <h2 className="text-primary dark:text-white">📊 Beneficios</h2>
            <ul className="text-primary dark:text-white">
              <li>
                <strong className="text-primary dark:text-white">Ultra rápido:</strong> Rust garantiza ejecución en
                milisegundos.
              </li>
              <li>
                <strong className="text-primary dark:text-white">Ergonomía:</strong> Comandos simples de recordar.
              </li>
              <li>
                <strong className="text-primary dark:text-white">Organizado:</strong> Seguimos el estándar de Bullwork
                para escalar proyectos fácilmente.
              </li>
              <li>
                <strong className="text-primary dark:text-white">Automatizado:</strong> Crea carpetas, archivos y
                configuración en segundos.
              </li>
              <li>
                <strong className="text-primary dark:text-white">Listo para Producción:</strong> Directamente orientado
                al backend profesional.
              </li>
            </ul>

            <h2 className="text-primary dark:text-white">🚀 Sobre Bullwork</h2>
            <p className="text-primary dark:text-white">
              Bullwork es un framework backend moderno construido en TypeScript,
              pensado para ser minimalista pero poderoso, ideal para proyectos
              profesionales y escalables.
            </p>
            <p>
              <strong className="text-primary dark:text-white">
                BullCLI es su CLI oficial a partir de la versión 2.0.0.
              </strong>
            </p>

            <h2 className="text-primary dark:text-white">🛡️ Licencia</h2>
            <p className="text-primary dark:text-white">
              Este proyecto está protegido bajo la licencia propietaria:
              <br />© 2025 Diego Toro | DToroDev - Todos los derechos
              reservados. Prohibida la reproducción, distribución o copia sin
              autorización.
            </p>
          </div>
        </article>
      </div>

      <section className="pt-20 bg-gradient-to-b to-accent from-primary dark:from-primary dark:to-accent/60 text-white dark:text-primary">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <Link to="https://dtoro-dev-portfolio.netlify.app/">
            <img
              src="/src/assets/dtorodev-bg.png"
              alt="DToroDev"
              className="w-96 rounded-lg p-2 mb-8"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Documentation;
