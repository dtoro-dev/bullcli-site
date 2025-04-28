<div align="center">
  <img src="./src/assets/logo-large.png" width="auto"/>

  # 

  [![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-%23000000.svg?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-%2300A3E0.svg?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
  [![SQLite](https://img.shields.io/badge/SQLite-%23003B57.svg?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org/)
  ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

  ![GitHub stars](https://img.shields.io/github/stars/dtoro-dev/bull-site)
  ![GitHub issues](https://img.shields.io/github/issues/dtoro-dev/bull-site)
  ![GitHub forks](https://img.shields.io/github/forks/dtoro-dev/bull-site)
  ![GitHub PRs](https://img.shields.io/github/issues-pr/dtoro-dev/bull-site)
</div>

**BullCLI** es un instalador y herramienta de línea de comandos (CLI), creada en Rust, diseñada para trabajar en conjunto con el framework [**Bullwork**](https://www.npmjs.com/package/bullwork).

Te permite **crear proyectos backend en segundos**, administrar módulos, y manejar todo el flujo de desarrollo de una manera simple, eficiente y profesional.

## 🚀 ¿Qué es BullCLI?

BullCLI es la forma más rápida y moderna de construir backends profesionales usando Bullwork.Inspirada en la simplicidad de NestJS CLI, pero potenciada por el rendimiento de Rust.

- Creación instantánea de proyectos base.

- Generación de módulos organizados (generate:module).

- Ejecución de servidores de desarrollo (dev).

- Administración de bases de datos SQLite y Prisma (prisma, seed).

- Instalación y desinstalación de dependencias (install, uninstall).

## 📦 Instalación

Puedes descargar el instalador desde aquí:

👉 [Descargar BullCLI]() (Windows MSI)

Una vez instalado, puedes comenzar a utilizar bull en tu terminal.

## 📚 Documentación

Consulta la documentación oficial para aprender todos los comandos disponibles:

👉 [Documentación BullCLI]()

## ⚙️ Comandos principales
<table style="width: 100%">
<thead>
<tr>
<th>
Comando
</th>
<th>
Descripción
</th>
</tr>
</thead>
<tbody>
<tr>
  <td> 
    <code>bull new</code>
  </td>
  <td>Crear un nuevo proyecto Bullwork.</td>
</tr>
<tr>
  <td><code>bull dev</code></td>
  <td>Levantar el servidor de desarrollo.</td>
</tr>
<tr>
  <td><code>bull generate:module <nombre></code></td>
  <td>Crear un nuevo módulo (controlador, servicio, DTO, etc.).</td>
</tr>
<tr>
  <td><code>bull remove:module <nombre></code></td>
  <td>Elimina un módulo (controlador, servicio, DTO, etc.).</td>
</tr>
<tr>
  <td><code>bull install <paquete></code></td>
  <td>Instalar nuevas dependencias en el proyecto.</td>
</tr>
<tr>
  <td><code>bull uninstall <paquete></code></td>
  <td>Eliminar dependencias del proyecto.</td>
</tr>
<tr>
  <td><code>bull prisma init</code></td>
  <td>Inicializar Prisma y la base de datos SQLite.</td>
</tr>
<tr>
  <td><code>bull prisma migrate-dev</code></td>
  <td>Ejecutar migraciones en ambiente de desarrollo.</td>
</tr>
<tr>
  <td><code>bull prisma migrate-prod</code></td>
  <td>Ejecutar migraciones para producción.</td>
</tr>
<tr>
  <td><code>bull seed</code></td>
  <td>Ejecutar archivos de seed para poblar datos iniciales.</td>
</tr>
<tr></tr>
</tbody>
</table>

## 🛠️ Requisitos

- Node.js 18 o superior.
- pnpm instalado globalmente (recomendado).
- Sistema operativo: Windows 10/11 (versión Linux/Mac en preparación).
- Prisma instalado como dependencia del proyecto (Bullwork CLI lo maneja automáticamente).

## 🛡️ Licencia

Este proyecto está protegido bajo la licencia propietaria:

© 2025 Diego Toro | DToroDev - Todos los derechos reservados. Prohibida la reproducción, distribución o copia sin autorización.

# 🐂 BullCLI - ¡Crea proyectos backend como un verdadero profesional! 🚀

<div align="center">
  <a href="https://dtoro-dev-portfolio.netlify.app/">
    <img src="./src/assets/dtorodev-bg.png" width="auto" />
  </a> 
</div>