/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function calculoMayorEdad(edadesArray) {
    let resultadoMayor = edadesArray[0]
    for (let i = 0; i < edadesArray.length; i++) {
        if (edadesArray[i] > resultadoMayor) {
            resultadoMayor = edadesArray[i];
        }
    }
    return resultadoMayor;
}

function calculoMenorEdad(edadesArray) {
    let resultadoMenor = edadesArray[0];
    for (let i = 0; i < edadesArray.length; i++) {
        if (edadesArray[i] < resultadoMenor) {
            resultadoMenor = edadesArray[i];
        }
    }
    return resultadoMenor;
}

function calculoPromedioFamiliar(edadesArray) {
    let sumaTotal = 0
    for (let i = 0; i < edadesArray.length; i++) {
        sumaTotal += edadesArray[i];
    }
    return sumaTotal / edadesArray.length;
}

const $botonAgregar = document.querySelector('#boton-agregar');

$botonAgregar.onclick = function() {
    const numeroDeFamiliares = Number((document.querySelector('#cantidad-personas').value));
    let formulario = document.querySelector('form')
    let nuevoTitulo = document.createElement('h2');
    nuevoTitulo.textContent = "¿Y que edad tienen?";
    formulario.appendChild(nuevoTitulo);

    for (let i = 1; i <= numeroDeFamiliares; i++) {
        let nuevoLabel = document.createElement("Label");
        nuevoLabel.type = "text"
        nuevoLabel.textContent = "Familiar n°" + i + " = ";

        let nuevoInput = document.createElement("Input");
        nuevoInput.type = "number"
        nuevoInput.id = "edad-familiar" + i;
        nuevoInput.className = "edades-familiares";

        let seleccionForma = document.querySelector('form');
        let div = document.createElement('div');
        seleccionForma.appendChild(div);
        div.appendChild(nuevoLabel);
        div.appendChild(nuevoInput);

    }

    let $botonCalcular = document.createElement('button');
    $botonCalcular.id = "boton-calculo";
    $botonCalcular.textContent = "Calcular";
    formulario.appendChild($botonCalcular);

    let $botonCalcularAccion = document.querySelector("#boton-calculo");
    $botonCalcularAccion.onclick = function() {
        let edadesNodeList = document.querySelectorAll('.edades-familiares');
        const edadesArray = [];
        for (let i = 0; i < edadesNodeList.length; i++) {
            edadesArray.push(Number(edadesNodeList[i].value));
        }
        let resultadoMayor = calculoMayorEdad(edadesArray);
        let resultadoMenor = calculoMenorEdad(edadesArray);
        let resultadoPromedio = calculoPromedioFamiliar(edadesArray);

        document.querySelector('#mayor-edad').textContent = "La mayor edad del grupo es " + resultadoMayor + " años"
        document.querySelector('#menor-edad').textContent = "La menor edad del grupo es " + resultadoMenor + " años"
        document.querySelector('#promedio-edad').textContent = "El promedio de edad del grupo es " + resultadoPromedio + " años"

        return false;

    }
    return false;
}