---
title: "Diseño, accesibilidad y una amiga fundamental"
date: 2026-06-27
draft: false
---

Hoy fue un día productivo y con muchos aprendizajes. Arranqué trabajando en el diseño visual de la página, algo que para mí siempre es un desafío particular: al no ver, no puedo saber si lo que estoy construyendo se ve bien o no. Ahí es donde entra Angie.

## Angie, mis ojos en el diseño

Angie estuvo conmigo todo el día haciéndome devoluciones sobre el estilo de la página. Me describía lo que veía, me decía qué le parecía raro, qué combinaba y qué no. Sin ella, simplemente no tendría manera de saber si la página transmite lo que quiero transmitir. Es uno de esos momentos en los que te das cuenta de la importancia de tener personas de confianza al lado cuando aprendés algo nuevo. Gracias a sus devoluciones pude hacer ajustes reales y con criterio visual.

## Cambios en el CSS

Uno de los primeros cambios del día fue mejorar la tipografía y el estilo general del sitio. Incorporé dos fuentes nuevas: **Playfair Display** para los títulos, que le da un toque más elegante y con personalidad, e **Inter** para el cuerpo del texto, que es moderna y muy legible. También ajusté los tamaños de los títulos, los espaciados y agregué animaciones sutiles en las tarjetas para que se sientan más vivas al pasar el mouse. El objetivo era lograr un estilo minimalista pero con impacto visual.

## Mejoras en el listado del diario

También modifiqué la forma en que se muestran las entradas del diario. Antes aparecía el título, la fecha y un resumen del contenido. Lo simplifiqué para que muestre solo el título de cada entrada, lo que hace el listado más limpio y fácil de navegar.

## Botones de accesibilidad

El cambio que más me enorgullece de hoy fue agregar botones de accesibilidad al navbar. Fueron precisamente las devoluciones de Angie las que me hicieron pensar en esto: si mi página habla de programación accesible y está dirigida también a personas con discapacidad visual, tenía que ser coherente con eso.

Agregué tres botones:

- **A-** → reduce el tamaño del texto
- **A+** → aumenta el tamaño del texto
- **◑** → activa el modo alto contraste, cambiando el fondo a negro y el texto a blanco para mejorar la experiencia de personas con baja visión

Para implementarlo tuve que modificar tres archivos: el navbar (`nav.html`), el CSS (`custom.css`) y el esqueleto base del sitio (`baseof.html`) donde agregué el JavaScript que hace funcionar los botones.

## Rediseño completo: nuevo look para Programate

A última hora del día, y siguiendo las sugerencias de Angie, decidí hacer un cambio de diseño más profundo. El estilo anterior era minimalista y elegante, pero queríamos algo más llamativo y con más personalidad visual.

El nuevo diseño tiene:

- **Hero con fondo verde petróleo sólido** y el título "Programate" con la tipografía **Fredoka One**, que le da un carácter más expresivo y moderno
- **Tarjetas con fondo verde petróleo**, íconos emoji, texto en blanco y grilla de 3 columnas
- **Footer oscuro** con texto claro
- **Fondo de página blanco** para contrastar con los bloques de color

Fue un trabajo en equipo: Angie describiendo lo que veía, yo traduciendo eso en código. Cada iteración del diseño fue una conversación entre su visión y mi implementación. Así se construye cuando no podés ver la pantalla: con confianza, comunicación y una buena aliada al lado.

## Reflexión del día

Hoy confirmo algo que ya sabía pero que nunca está de más repetir: aprender a programar siendo ciego es posible, pero no es un camino solitario. La ayuda de Angie, la IA como herramienta de apoyo y la perseverancia diaria son los tres ingredientes que me permiten seguir avanzando. Cada pequeño cambio en la página es una victoria. Y hoy tuve varias.