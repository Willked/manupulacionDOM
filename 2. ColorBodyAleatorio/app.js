// Seleccionar los elementos del DOM.
const boton = document.querySelector('button');
const color = document.getElementById('color');

// Generar un color hexadecimal aleatorio.
function generarColorHexAleatorio() {
  let digitos = '0123456789ABCDEF'; // 16 opciones.
  let color = '#'; // El color inicia con #.

  for (let i = 0; i < 6; i++) {
    // Escoger uno de los 16 digitos posibles.
    let random = Math.random() 
    console.log(random);
    console.log(random*16);
    console.log(Math.floor(random * 16));
    
    let indiceAleatorio = Math.floor(random * 16);
    // Agregarlo al codigo del color.
    color += digitos[indiceAleatorio];
  }
  
  return color;
}

// Event Listener.
boton.addEventListener('click', function() {
  let colorAleatorio = generarColorHexAleatorio();
  document.body.style.backgroundColor = colorAleatorio;
  encabezado = document.querySelector('.encabezado');
  encabezado.style.backgroundColor = colorAleatorio;
  color.textContent = colorAleatorio;
});