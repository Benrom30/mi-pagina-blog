// Esperamos a que toda la página termine de cargar antes de ejecutar el código

document.addEventListener('DOMContentLoaded', function () {

// Buscamos los tres botones de accesibilidad en el HTML por su id

const btnMayor = document.getElementById('btn-texto-mayor');

const btnMenor = document.getElementById('btn-texto-menor');

const btnContraste = document.getElementById('btn-contraste');

// Leemos el tamaño de fuente base que tiene el navegador (normalmente 16px)

let tamañoBase = parseFloat(getComputedStyle(document.documentElement).fontSize);

// Guardamos el tamaño actual en una variable que vamos a ir modificando

let tamañoActual = tamañoBase;

// Si el botón A+ existe en la página, le agregamos la acción al hacer clic

if (btnMayor) {

btnMayor.addEventListener('click', function () {

// Aumentamos 2px el tamaño, pero nunca pasamos de 28px para no romper el diseño

tamañoActual = Math.min(tamañoActual + 4, 36);

// Aplicamos el nuevo tamaño al elemento raíz del HTML (afecta a toda la página)

document.documentElement.style.fontSize = tamañoActual + 'px';

      });

    }

// Si el botón A- existe en la página, le agregamos la acción al hacer clic

if (btnMenor) {

btnMenor.addEventListener('click', function () {

// Reducimos 2px el tamaño, pero nunca bajamos de 12px para mantener legibilidad

tamañoActual = Math.max(tamañoActual - 4, 12);

// Aplicamos el nuevo tamaño al elemento raíz del HTML

document.documentElement.style.fontSize = tamañoActual + 'px';

      });

    }

// Si el botón de contraste existe en la página, le agregamos la acción al hacer clic

if (btnContraste) {

btnContraste.addEventListener('click', function () {

// toggle agrega la clase 'alto-contraste' al body si no la tiene, o la saca si ya está

document.body.classList.toggle('alto-contraste');

// Verificamos si el modo quedó activo o no

const activo = document.body.classList.contains('alto-contraste');

// Actualizamos el atributo aria-pressed para que los lectores de pantalla

// anuncien si el botón está activado o desactivado

btnContraste.setAttribute('aria-pressed', activo);

// Cambiamos el texto del aria-label según el estado actual

btnContraste.setAttribute('aria-label', activo ? 'Desactivar alto contraste' : 'Activar alto contraste');

      });

    }

  });