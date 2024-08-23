//  ********************************************************
//  **********  /src/bases/02-template-string.js  **********
//  ********************************************************


console.warn('*****  02 - Template String  *****');


//  ***************************************
//  **********  Template String  **********
//  ***************************************

const nombre = 'Antonio';
const apellido = 'Cutillas';

const nombreCompleto1 = nombre + ' ' + apellido;
console.log(nombreCompleto1);


const nombreCompleto2 = `
    Mi nombre es ${nombre} 
    y mi apellido es ${apellido}
`;

console.log(nombreCompleto2);



function getSaludo(nombre, apellido) {
    return 'Hola ' + nombre + ' ' + apellido;
}

console.log(getSaludo(nombre, apellido));
console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`);

console.log('\n\n');