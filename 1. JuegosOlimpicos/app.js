// Contenedor
// const contenedor = document.getElementById('titulo');
// const contenedor = document.getElementById('cont');
// console.log(contenedor);
// console.log(typeof contenedor);
// console.log(contenedor.innerHTML);
// console.log(typeof contenedor.innerHTML);

// isConected

// Titulo Principal
// const titulo = document.getElementById('titulo');
// console.log(titulo);
// console.log(typeof titulo);
// console.log(titulo.innerText);
// console.log(titulo.textContent);
// console.log(typeof titulo.innerText);
// console.log(titulo.tagName);
// console.log(typeof titulo.tagName);

// Seleccionar elementos por clase.
const competencias = document.getElementsByClassName('competencia');

// Todos los elementos.
// console.log(competencias);
// console.log(typeof competencias);
// console.log(competencias.length);

// Elementos individuales.
// console.log(competencias[0]);
// console.log(competencias[1]);
// console.log(competencias[2]);
// console.log(competencias[3]);

// Atributos de un elemento.
const natacion = competencias[0];

// console.log(natacion.tagName);

// // Texto
// console.log(natacion.innerText);
// console.log(natacion.textContent);

// Elementos
// console.log(natacion.childElementCount);
// console.log(natacion.children);

// // Nodos
// console.log(natacion.hasChildNodes());
// console.log(natacion.childNodes);

// Clases
// console.log(natacion.classList);
// console.log(typeof natacion.classList);
// console.log(natacion.className);
// console.log(typeof natacion.className);

// Seleccionar elementos por etiqueta HTML.
// const misCompetencias = document.getElementsByTagName('li');
// console.log(misCompetencias);

// const titulo = document.getElementById('titulo');
// console.log(titulo);

// console.log(document.body);

// Seleccionar solo el primer elemento que cumpla el criterio
// de un selector CSS.

// const natacion = document.querySelector('#sincronizado');
// console.log(natacion);

// const topping = document.querySelector('.competencia');
// console.log(topping);

// const primeraCompetenciaAmarilla = document.querySelector('.competencia.fondo-amarillo');
// console.log(primeraCompetenciaAmarilla);

// const primeraCompetenciaAmarilla = document.querySelector('ul li.fondo-amarillo');
// console.log(primeraCompetenciaAmarilla);

// const primerToppingNoAmarillo = document.querySelector('ul li:not(.fondo-amarillo)');
// console.log(primerToppingNoAmarillo);

// Seleccionar todos los elementos con un selector CSS.
// const competenciaAmarilla = document.querySelectorAll('.competencia.fondo-amarillo');
// console.log(competenciaAmarilla);
// console.log(typeof competenciaAmarilla);
// console.log(competenciaAmarilla.length);
// console.log(competenciaAmarilla[0]);
// console.log(competenciaAmarilla[1]);
// console.log(typeof competenciaAmarilla); // Object

/*
> Asignar Estilo con JavaScript.
*/
// const primeraCompetencia = document.querySelector('.competencia');
// console.log(primeraCompetencia);

// // Asigna un estilo in-line (ver etiqueta HTML).
// primeraCompetencia.style.backgroundColor = 'blue';
// primeraCompetencia.style.color = '#6dff00';
// primeraCompetencia.style.textTransform = 'uppercase';

/*
> Obtener Texto.
*/
// const listaDeCompetencias = document.getElementById('lista-competencias');

// // Analizar las diferencias.
// console.log(listaDeCompetencias.innerText);
// console.log(listaDeCompetencias.textContent);
// console.log(listaDeCompetencias.innerHTML);

/*
> Crear, Agregar y Eliminar un elemento.
*/
// Crear un elemento.
// const competenciaNueva = document.createElement('li');
// competenciaNueva.classList.add('competencia', 'fondo-amarillo');
// competenciaNueva.innerText = 'Baloncesto';
// console.log(competenciaNueva);
// console.log(typeof competenciaNueva);

// // Agregar al DOM.
// listaDeCompetencias.append(competenciaNueva);

// // Eliminar el elemento del DOM.
// competenciaNueva.remove();

/*
> Modificar atributos y clases.
*/
// console.log(primeraCompetencia.classList);
// primeraCompetencia.classList.add('mi-clase');
// console.log(primeraCompetencia.classList);
// console.log(primeraCompetencia.classList.contains('mi-clase'));
// primeraCompetencia.classList.remove('mi-clase');
// console.log(primeraCompetencia.classList);
// console.log(primeraCompetencia.classList.contains('mi-clase'));

// Recorrer el DOM
// console.log(listaDeCompetencias.parentElement);
// console.log(listaDeCompetencias.parentNode);
// console.log(listaDeCompetencias.parentElement.parentElement);

// console.log(listaDeCompetencias.children);
// console.log(listaDeCompetencias.firstChild); //nodo
// console.log(listaDeCompetencias.children[0]);
// console.log(listaDeCompetencias.firstElementChild);
// console.log(listaDeCompetencias.lastElementChild);

// console.log(listaDeCompetencias.previousElementSibling);
// console.log(listaDeCompetencias.nextElementSibling);

