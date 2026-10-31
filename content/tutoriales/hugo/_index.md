---
title: "Hugo desde cero"
description: "Introducción a Hugo: qué problema resuelve, en qué se diferencia de un sitio hecho solo con HTML y cómo instalarlo en Windows y Mac."
---

Esta es una serie para aprender a crear sitios web con Hugo, paso a paso y pensada para quien usa lector de pantalla. En esta primera página encontrarás una introducción: qué es Hugo, qué problema resuelve, en qué se diferencia de un sitio hecho solo con HTML y cómo instalarlo en Windows y en Mac.

## Qué es Hugo

Hugo es un generador de sitios estáticos. Tú escribes el contenido en archivos de texto con formato Markdown y las plantillas en HTML. Hugo los combina y produce un sitio completo de archivos HTML listos para publicar.

Está escrito en el lenguaje Go y es conocido por su velocidad: puede construir un sitio de miles de páginas en pocos segundos.

## Qué problema resuelve

Cuando creas un sitio con HTML puro, cada página es un archivo completo e independiente. Eso significa que el menú de navegación, el pie de página y los enlaces a los estilos se copian y se pegan en todas las páginas.

Imagina un sitio con 30 páginas y la necesidad de añadir un enlace nuevo al menú. Tendrías que editar 30 archivos, y es muy fácil olvidar alguno. Con el tiempo, el sitio queda inconsistente.

Hugo resuelve esto separando tres cosas:

- **El contenido:** lo que escribes, en archivos Markdown.
- **Las plantillas:** cómo se presenta ese contenido, escritas una sola vez.
- **La configuración:** los datos generales del sitio, como el título y el idioma.

El menú y el pie de página se escriben una vez en una plantilla, y Hugo los coloca automáticamente en todas las páginas.

## Diferencias con un sitio hecho solo con HTML

### Repetición del código

- **Solo HTML:** el menú y el pie de página se copian en cada archivo.
- **Hugo:** se escriben una vez en una plantilla y se reutilizan en todo el sitio.

### Cómo se escribe el contenido

- **Solo HTML:** cada texto se escribe con etiquetas HTML, y es fácil olvidar cerrar una.
- **Hugo:** el contenido se escribe en Markdown, que es texto sencillo, y Hugo lo convierte a HTML.

### Listas de páginas

- **Solo HTML:** si publicas un artículo nuevo, debes añadirlo a mano en cada página donde se lista.
- **Hugo:** crea un archivo nuevo y Hugo lo agrega solo a las listas correspondientes.

### Enlaces

- **Solo HTML:** un enlace roto se descubre cuando alguien lo visita.
- **Hugo:** con los enlaces `ref`, Hugo avisa de los enlaces rotos al construir el sitio.

### Ver los cambios

- **Solo HTML:** guardas el archivo y recargas el navegador.
- **Hugo:** con el servidor local, cada vez que guardas un archivo el navegador se actualiza solo.

### Lo que se mantiene igual

En ambos casos el resultado final son archivos HTML, CSS e imágenes. El visitante no nota ninguna diferencia, y el sitio se publica en los mismos lugares. Hugo no cambia lo que se publica, solo la forma cómoda de producirlo.

## Qué tener en cuenta antes de empezar

- **Necesitarás la terminal.** Se usa para instalar Hugo, crear el sitio, iniciar el servidor local y generar la versión final.
- **Conviene saber HTML básico.** Las plantillas de Hugo son HTML con algunas instrucciones especiales.
- **No hay base de datos.** Todo son archivos. Si necesitas cuentas de usuario o formularios, hay que recurrir a servicios externos.
- **Hugo es estricto.** Si hay un error en una plantilla o un enlace `ref` roto, se detiene y te lo informa. Al principio es molesto, pero te protege.
- **La versión importa.** Hugo cambia entre versiones. En esta serie usamos la 0.153.2.

## Cuándo elegir Hugo

Hugo es una gran opción para blogs, documentación, portafolios y sitios de tutoriales. No es lo más indicado para tiendas en línea complejas o aplicaciones donde los datos cambian constantemente.

## Cómo instalar Hugo

Instalaremos la edición **extended**, que incluye funciones adicionales para procesar estilos. Es la recomendada y la que usan la mayoría de los temas.

### Instalación en Mac

En Mac usaremos Homebrew, un gestor de paquetes que se maneja desde la terminal.

1. Abre la aplicación Terminal.
2. Comprueba si ya tienes Homebrew:

```bash
brew --version
```

3. Si el comando no se reconoce, instala Homebrew con:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

El instalador te pedirá presionar Enter y escribir la contraseña de tu usuario. Al terminar, lee con atención los mensajes finales: a veces indica comandos adicionales que debes ejecutar para que `brew` funcione en tu terminal.

4. Instala Hugo:

```bash
brew install hugo
```

### Instalación en Windows

En Windows puedes usar PowerShell con cualquiera de estos gestores de paquetes. Elige solo uno.

**Opción 1: winget (viene incluido en Windows 10 y 11)**

```powershell
winget install Hugo.Hugo.Extended
```

**Opción 2: Chocolatey**

```powershell
choco install hugo-extended
```

**Opción 3: Scoop**

```powershell
scoop install hugo-extended
```

Si Chocolatey o Scoop te dicen que el comando no existe, es porque no los tienes instalados. En ese caso usa winget, que es la opción más sencilla.

Cuando termine la instalación, **cierra la ventana de PowerShell y abre una nueva**. Esto es necesario para que Windows reconozca el comando `hugo`.

### Verificar la instalación

El comando es el mismo en Windows y en Mac:

```bash
hugo version
```

Deberías ver un texto que empieza con `hugo v0.153.2` o una versión posterior, y que incluye la palabra `extended`. Si la terminal responde que el comando no se encuentra, cierra y vuelve a abrir la terminal y prueba de nuevo.

### Actualizar Hugo más adelante

En Mac:

```bash
brew upgrade hugo
```

En Windows con winget:

```powershell
winget upgrade Hugo.Hugo.Extended
```

## Siguiente paso

Ya tienes Hugo instalado y sabes qué problema resuelve. En el próximo artículo crearemos nuestro primer sitio con el comando `hugo new site`, veremos qué carpetas genera y levantaremos el servidor local para verlo en el navegador.