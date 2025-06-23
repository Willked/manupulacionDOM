const pantalla = document.getElementById('resultado');
let actual = "0";
pantalla.value = actual;

const botones = document.querySelectorAll("button")

const numero = document.querySelector(".numero")


botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        actual = e.target.textContent;
        evaluarBoton(actual);   
    });
});

function evaluarBoton(actual){
    if (actual == 'C'){
        limpiarPantalla();
    }
    else if (actual == '←'){
        pantalla.value = quitarUltimo(pantalla.value);
    }
    else if (actual == '%'){
        pantalla.value = calcularPorcentaje(pantalla.value);
    }
    else if (actual == '='){
        pantalla.value = realizarOperacion(pantalla.value);
        setTimeout(limpiarPantalla, 2000);
    }
    else if ( actual == '+' || actual == '-' || actual == '×' || actual == '/'){
        pantalla.value = agregarOperacion(pantalla.value, actual);
    }
    else{
        pantalla.value = agregarNumero(pantalla.value, actual);
    }  
}

function limpiarPantalla(){
    pantalla.value = "0";
}

function quitarUltimo(value) {
    if(value.length == 1){
        return "0";
    }
    return value.slice(0,-1);
}

function calcularPorcentaje(value) {
    console.log("entra", value);
    
    return value/100;
}

function agregarOperacion(value, actual){
    if(value == "0"){
        alert("El formato usado no es valido!")
        return value
    }
    return value += actual

}

function agregarNumero(value, actual){   
    if(actual == '.' && value == "0"){
        return '0.'
    }
    if(actual == '.' && value.includes('.')){
        return value;
    }
    if(value.length == 1 && value == "0"){
        return actual;
    }
    
    return value += actual
}

function realizarOperacion(value){
    try {
        let expresion = value.replace(/×/g, '*')
        let resultado = eval(expresion);

        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error('Operación inválida');
        }
        return resultado
    } catch (error) {
        return 'Error';
    }

}


