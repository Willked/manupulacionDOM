// Obtener el elemento donde se muestra el resultado
const pantalla = document.getElementById('resultado');
pantalla.value = '0';

// Función para agregar números a la pantalla
function agregarNumero(numero) {
    // Si la pantalla solo muestra "0", reemplazamos el cero con el nuevo número
    if (pantalla.value === '0') {
        if (numero === '.') {
            pantalla.value = '0.';
        } else {
        pantalla.value = numero;
        }
    } else {
        // Si no es cero, agregamos el número al final
        pantalla.value = pantalla.value + numero;
    }
}

// Función para agregar operadores (+, -, *, /, %)
function agregarOperador(operador) {
    // Solo agregamos el operador si hay números en la pantalla
    if (pantalla.value !== '') {
        // Obtenemos el último carácter de la pantalla
        let ultimoCaracter = pantalla.value.slice(-1);
        
        // Si el último carácter es un operador, lo reemplazamos
        if ('+-*/%'.includes(ultimoCaracter)) {
            pantalla.value = pantalla.value.slice(0, -1) + operador;
        } else {
            // Si no es un operador, simplemente agregamos el nuevo operador
            pantalla.value = pantalla.value + operador;
        }
    }
}

// Función para limpiar la pantalla
function limpiarPantalla() {
    pantalla.value = '0';
}

// Función para borrar el último carácter
function borrarUltimo() {
    // Eliminamos el último carácter del valor actual
    pantalla.value = pantalla.value.slice(0, -1);
    if (pantalla.value === '') {
        pantalla.value = '0';
    }
}

// Función para calcular el resultado
function calcular() {
    try {
        // Reemplazamos el símbolo × por * para que JavaScript pueda calcular
        let expresion = pantalla.value.replace(/×/g, '*');
        
        // Manejo especial para el porcentaje
        if (expresion.includes('%')) {
            // Dividimos la expresión en partes usando el operador %
            let partes = expresion.split('%');
            // Calculamos el porcentaje (dividimos por 100)
            let numero = parseFloat(partes[0]);
            let resultado = numero / 100;
            pantalla.value = resultado;
            return;
        }
        
        // Calculamos el resultado usando eval() para otras operaciones
        let resultado = eval(expresion);
        
        // Verificamos si el resultado es válido
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error('Operación inválida');
        }
        
        // Mostramos el resultado en la pantalla
        pantalla.value = resultado;
    } catch (error) {
        // Si hay un error, mostramos "Error" y limpiamos después de 1 segundo
        pantalla.value = 'Error';
        setTimeout(limpiarPantalla, 1000);
    }
}

// Evitar que el usuario escriba directamente en la pantalla
pantalla.addEventListener('keydown', function(evento) {
    evento.preventDefault();
}); 