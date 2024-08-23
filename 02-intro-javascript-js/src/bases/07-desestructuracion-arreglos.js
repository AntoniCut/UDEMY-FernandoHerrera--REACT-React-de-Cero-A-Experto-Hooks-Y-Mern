//  *******************************************************************
//  **********  /src//bases/07-desestructuracion-arreglos.js  **********
//  *******************************************************************


console.warn('*****  07 - Desestructuracion de Arreglos  *****');


//  *****************************************************
//  **********  Desestructuración de Arreglos  **********
//  *****************************************************


//  ----------  Arreglo  ----------
const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log("\nPersonajes: ", personajes);
console.log("Personaje 1: ", personajes[0]);
console.log("Personaje 2: ", personajes[1]);
console.log("Personaje 3: ", personajes[2]);


//  ----------  Arreglo Desestructurado  ----------
const [p1] = personajes;
console.log("\np1: ", p1);

const [, p2] = personajes;
console.log("p2: ", p2);

const [, , p3] = personajes;
console.log("p3: ", p3);


//  ----------  Funciones  ----------
const retornaArreglo = () => {

    return ['ABC', 123];
}

const arr = retornaArreglo();
console.log("\n", arr);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros, "\n");


//  ----------  TAREA  ----------
//  -----  1. El primer valor del resultado se llamará nombre.
//  -----  2. El segundo valor del resultado se llamará setNombre.

const usoState = (valor) => {

    return [valor, () => { console.log('Hola Mundo') }];
}

const resultado = usoState('Goku');
console.log(resultado);
resultado[1]();

//  ----------  RESOLUCION DE LA TAREA  ----------
const [nombre, setNombre] = usoState('Goku');
console.log("\nnombre: ", nombre);
setNombre();

console.log('\n\n');
