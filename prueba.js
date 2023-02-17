// Definir el color que se debe buscar
const colorBuscado = '#2ca47c';

// Definir el intervalo de tiempo para refrescar la página (en milisegundos)
const intervaloDeRefresco = 5000;

// Función para refrescar la página
function refrescarPagina() {
  location.reload();
}

// Función para buscar el color y hacer sonido si se encuentra
function buscarColor() {
  // Obtener todos los elementos en la página
  const elementos = document.getElementsByTagName('*');
  
  // Buscar el color en cada elemento
  for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
    const colorElemento = getComputedStyle(elemento).color;
    if (colorElemento === colorBuscado) {
      // Reproducir un sonido
      const sonido = new Audio('C:\Users\fbacque\Documents\Grabaciones de sonido\Pip');
      sonido.play();
      break;
    }
  }
}

// Ejecutar la búsqueda de color y refresco de página a intervalos regulares
setInterval(() => {
  buscarColor();
  refrescarPagina();
}, intervaloDeRefresco);
