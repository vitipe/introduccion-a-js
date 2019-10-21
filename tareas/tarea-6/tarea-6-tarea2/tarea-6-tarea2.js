/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


//Funciones que van a ser utilizadas:

function calcularMayorSalario() {

}

function calcularMenorSalario() {

}

function calcularSalarioAnualPromedio() {

}

function calcularSalarioMensualPromedio() {

}

function crearNuevosInputs() {
    const formulario = document.querySelector('#formulario');
    const nuevoLabel = document.createElement('label');
    const nuevoInput = document.createElement('input');
    nuevoInput.className = 'inputs';
    nuevoLabel.className = 'labels'
    nuevoLabel.textContent = 'Ingrese salario';
    formulario.appendChild(nuevoLabel);
    formulario.appendChild(nuevoInput);
}

function eliminarInputsCreados () {
    let selectorLabel = document.querySelector('.labels');
    let selectorInput = document.querySelector('.inputs');
    selectorLabel.closest('.labels').remove();
    selectorInput.closest('.inputs').remove();
}

//CHUSMEAR .remove() y empty()

const $botonQuitar = document.querySelector('#boton-quitar');
$botonQuitar.onclick = function() {
    eliminarInputsCreados();
    return false;
}

const $botonAgregar = document.querySelector('#boton-agregar');
$botonAgregar.onclick = function() {
    crearNuevosInputs();
    return false;
}

const $botonCalcular = document.querySelector('#$botonCalcular');
$botonCalcular.onclick = function() {

}

//Agregar los calculos de los sueldos a las funciones
//Agregar los resultados a los <strong> ya creados
//Ver como eso de que ignore los input vacios y que no los tome como cero. Algo de un if empty? o no sé.