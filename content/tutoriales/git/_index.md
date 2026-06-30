---
title: "Git y GitHub"
date: 2026-06-29T14:30:00+02:00
draft: false
---
Git es un sistema de control de versiones distribuido que permite trabajar en proyectos colaborativos. Es una herramienta fundamental para cualquier desarrollador o equipo de trabajo que quiera mantener una versión histórica de su código y poder trabajar en múltiples ramas simultáneamente.

En esta sección, aprenderás:

  * Conceptos básicos de Git
  * Comandos básicos de Git
  * Trabajar con repositorios locales y remotos
  * Colaborar con otros desarrolladores usando GitHub

Para comenzar, asegúrate de tener instalado Git en tu computadora. Puedes descargarlo desde el sitio oficial de [Git](https://git-scm.com/) o instalarlo rápidamente desde la consola según tu sistema operativo:

### Instalación por Consola

#### En Windows (usando el Símbolo del Sistema o PowerShell)
Windows cuenta con un administrador de paquetes nativo llamado winget. Abre tu consola y ejecuta el siguiente comando:

winget install --id Git.Git -e --source winget

#### En Mac (usando la Terminal)
En macOS la forma más fácil y común es utilizar Homebrew. Abre tu terminal y ejecuta:

brew install git

*(Nota: Si no tienes Homebrew instalado, también puedes simplemente escribir el comando `git --version` en la terminal; si no está instalado, el propio sistema de Mac te abrirá una ventana emergente preguntándote si deseas instalar las herramientas de línea de comandos de Xcode, las cuales incluyen Git automáticamente).*

---

Una vez que tengas Git instalado, puedes crear un repositorio local y empezar a trabajar con él. Para compartir tu trabajo con otros desarrolladores, puedes usar GitHub, un servicio de alojamiento en la nube para proyectos de código abierto.

En esta sección, aprenderás cómo crear y gestionar repositorios en GitHub, cómo colaborar con otros usuarios y cómo mantener tus proyectos actualizados y organizados.