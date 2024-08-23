//  **************************************************
//  **********  /src/bases/01-const-let.js  **********
//  **************************************************


console.warn('*****  01- Const y Let  *****');


//  **********************************************
//  **********  Variables y Constantes  **********
//  **********************************************

const nombre = 'Antonio';
let apellido = 'Cutillas';

let valorDado = 5;
valorDado = 4
console.log("Nombre: ", nombre, " - Apellido:", apellido, " - Valor Dado: ", valorDado);

//nombre = 'juan';
if(true) {

    let valorDado = 6;
    const nombre = 'Pedro';
    console.log("\nDentro del IF - Nombre:" ,nombre, " - Valor Dado: ", valorDado);
}

console.log("\nFuera del IF - Nombre: ", nombre, " - Valor Dado: ", valorDado);

console.log('\n\n');