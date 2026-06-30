// Esperamos a que toda la página termine de cargar antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

    // Buscamos los tres botones de accesibilidad en el HTML por su id
    const btnMayor = document.getElementById('btn-texto-mayor');
    const btnMenor = document.getElementById('btn-texto-menor');
    const btnContraste = document.getElementById('btn-contraste');
  
    // Empezamos con zoom al 100% (tamaño normal)
    let nivelZoom = 100;
  
    // Si el botón A+ existe en la página, le agregamos la acción al hacer clic
    if (btnMayor) {
      btnMayor.addEventListener('click', function () {
        // Aumentamos 10% el zoom, pero nunca pasamos de 200% (el doble del tamaño)
        nivelZoom = Math.min(nivelZoom + 10, 200);
        // Aplicamos el zoom a todo el body
        document.body.style.zoom = nivelZoom + '%';
      });
    }
  
    // Si el botón A- existe en la página, le agregamos la acción al hacer clic
    if (btnMenor) {
      btnMenor.addEventListener('click', function () {
        // Reducimos 10% el zoom, pero nunca bajamos de 70%
        nivelZoom = Math.max(nivelZoom - 10, 70);
        // Aplicamos el zoom a todo el body
        document.body.style.zoom = nivelZoom + '%';
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