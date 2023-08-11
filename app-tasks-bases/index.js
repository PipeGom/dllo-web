// Ejemplos de javascript

// comentario de linea 


/**
 * comentario de bloque
 */

console.log("Hola mundo");
console.log("--------");

const edad = 55;
let nombre = "Juan";
let apellido = "Gomez"
const esEstudiante = false;
const altura = 1.70;

//List -> Array 
const semestres = [];

// diccionarios -> Objeto -> JSON (Javascript Object Notation)
const  materiasPreferida = {nombre: " calculo", id: 0};

//null - undefined 
const universidad = null; 
const carrera = undefined; 

console.log("Tipo de dato de nombre" + typeof nombre);
console.log("Tipo de dato de nombre" + typeof edad);

console.log("----- Conversion de string a number ----");
const precioMatricula = "5000000.5";
console.log("Entero" + parseInt(precioMatricula));

console.log("------ = -----");
console.log("Doble igual: " ,"45" == 45);   //SI    Compara el valor 
console.log("Triple igual" ,"45" === 45);    // NO    Valor y tipo

console.log("-------Concatenacion-------");
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`)

console.log("-------Operador ternario  (Exp ? verdadero : falso )------");
console.log( edad > 18 ? "Es mayor de edad": "Es menor de edad");
let condition = edad>18 
if (condition) {}
if (condition) {} else {}


// De acuerdo a una variable entrego unos resultados
const dia = "Lunes"

switch (dia){
    case "Lunes":
        console.log("LUNES");
        break;
    case "Martes":
        console.log("Martes");
        break;
    default:
        console.log("NO ES VALIDO");
        break;                
}

console.log("---- Ciclos----")

for (let index = 0; index < 10; index++) {
}

/**while (condition) {    
}*/

console.log("---- For of ----")
for (const item of [1,2,3]) {
    console.log(item);
    
}
console.log("---- For in ----")

for (const key in materiasPreferida) {
    console.log(key);
}

console.log("----For Each----");
[1,2,3].forEach(element => {
    console.log(element);
});

console.log("----Funciones----");

// Funcion clasica de js
function imprimirNombre(nombre){
    console.log(nombre);
}

// Llamar la funcion imprimirNombre
imprimirNombre(nombre)

const imprimirNombreApellido = (nombre,apellido) => {
    console.log(`${nombre} ${apellido}`)
}
// Lllamar imprimir Nombre y apellido

imprimirNombreApellido(nombre,apellido)

const crearNombreCompleto = (nombre,apellido) => {
    console.log("--------Global scope Fake-----");
    console.log(nombre,apellido);

    let name = nombre
    if (nombre.length > 3){
        let name = nombre[0] + "" + apellido
        console.log("94" + name);

    }
    console.log("92" + name)

}







