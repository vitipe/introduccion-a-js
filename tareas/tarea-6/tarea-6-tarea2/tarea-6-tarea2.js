/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


function calcularMayorSalarioAnual(arraySalarios) {
    let mayorSalario = arraySalarios[0];
    for (let i = 0; i < arraySalarios.length; i++) {
        if (arraySalarios[i] > mayorSalario) {
            mayorSalario = arraySalarios[i];
        }
    }
    return mayorSalario;
}

function calcularMenorSalarioAnual(arraySalarios) {
    let menorSalario = arraySalarios[0];
    for (let i = 0; i < arraySalarios.length; i++) {
        if (arraySalarios[i] < menorSalario) {
            menorSalario = arraySalarios[i]
        }
    }
    return menorSalario;
}

function calcularSalarioAnualPromedio(arraySalarios) {
    let contadorSalarios = 0;
    for (let i = 0; i < arraySalarios.length; i++) {
        contadorSalarios += arraySalarios[i];
    }
    return contadorSalarios / arraySalarios.length;
}

function calcularSalarioMensualPromedio(arraySalarios) {
    let contadorSalarios = 0;
    for (let i = 0; i < arraySalarios.length; i++) {
        contadorSalarios += arraySalarios[i];
    }
    let resultado = contadorSalarios / arraySalarios.length;
    return (resultado / 12).toFixed(2);
}

function crearNuevosInputs() {
    const formulario = document.querySelector('#formulario');
    const nuevaDiv = document.createElement('div');
    const nuevoLabel = document.createElement('label');
    const nuevoInput = document.createElement('input');
    nuevaDiv.className = 'inputs-salarios'
    nuevoInput.className = 'inputs';
    nuevoLabel.className = 'labels';
    nuevoLabel.textContent = 'Ingrese salario';
    formulario.appendChild(nuevaDiv);
    nuevaDiv.appendChild(nuevoLabel);
    nuevaDiv.appendChild(nuevoInput);
}

function eliminarInputsCreados () {
    let formulario = document.querySelector('#formulario');
    let ultimoDiv = formulario.lastElementChild;
    formulario.removeChild(ultimoDiv);
}

//FALTARIA EL BOTON RESETEAR

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

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function() {
    let salariosNodeList = document.querySelectorAll('.inputs');
    const arraySalarios = [];
    for (let i = 0; i < salariosNodeList.length; i++) {
        if (salariosNodeList[i].value === ""){
            continue;
        }
        arraySalarios.push(Number(salariosNodeList[i].value));
    }
    let resultadoMayor = document.querySelector('#mayor-salario-anual');
    let resultadoMenor = document.querySelector('#menor-salario-anual');
    let resultadoAnualPromedio = document.querySelector('#salario-anual-promedio');
    let resultadoMensualPromedio = document.querySelector('#salario-mensual-promedio');

    resultadoMayor.textContent = "El mayor salario es " + calcularMayorSalarioAnual(arraySalarios) + " pesos";
    resultadoMenor.textContent = "El menor salario es " + calcularMenorSalarioAnual(arraySalarios) + " pesos";
    resultadoAnualPromedio.textContent = "El promedio de salario anual es " + calcularSalarioAnualPromedio(arraySalarios) + " pesos";
    resultadoMensualPromedio.textContent = "El promedio de salario mensual es " + calcularSalarioMensualPromedio(arraySalarios) + " pesos";
}
