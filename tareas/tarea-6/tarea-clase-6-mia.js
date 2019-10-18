/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function calculoMayorEdad (edadArray) {
    let mayorEdad = 0;
    for (let i = 0; i < edadArray.length; i++) {
        if (mayorEdad >= edadArray[i]) {
            mayorEdad = edadArray[i];
        }
    } return mayorEdad;
}

function calculoMenorEdad (edadArray) {
    let menorEdad = 0;
    for (let i = 0; i < edadArray.length; i++) {
        if (menorEdad <= edadArray[i]) {
            menorEdad = edadArray[i];
        }
    } return menorEdad;
}

function calculoPromedioFamiliar (edadArray) {
    let sumaTotal = 0
    for (let i = 0; i < edadArray.length; i++) {
        sumaTotal += edadArray[i];
    } return sumaTotal / edadArray.length;
}

const $botonAgregar = document.querySelector('#boton-agregar');

$botonAgregar.onclick = function() {
    const numeroDeFamiliares = Number((document.querySelector('#cantidad-personas').value));
    let formulario = document.querySelector('form')
    let nuevoTitulo = document.createElement('h2');
    nuevoTitulo.textContent = "¿Y que edad tienen?";
    formulario.appendChild(nuevoTitulo);

    for (let i = 1; i<=numeroDeFamiliares; i++) {
        let nuevoLabel = document.createElement("Label");
        nuevoLabel.type = "text"
        nuevoLabel.textContent = "Familiar numero " + i;
        
        let nuevoInput = document.createElement("Input");
        nuevoInput.type = "number"
        nuevoInput.id = "edad-familiar" + i;
        nuevoInput.class = "edades-familiares";

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
       console.log(edadesNodeList);
       const edadesArray = [];
    for(let i = 0; i < edadesNodeList.length; i++){
      edadesArray.push(Number(edadesNodeList[i].value));
    }
    console.log(edadesArray);
        return false;

    }
    return false;
}


//Ahora crear una funcion que arme un array de todos los inputs que se crearon con esa class
// y calcule lo que tenga que calcular
//y en el html poner los campos pre-creados que pide aca arriba
//Y crear otro boton

