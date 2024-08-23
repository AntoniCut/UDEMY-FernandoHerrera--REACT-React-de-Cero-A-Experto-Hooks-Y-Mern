//  **********************************************
//  **********  /src/bases/04-arreglos  **********
//  **********************************************


console.warn('*****  04 - Arreglos  *****');


//  ********************************
//  **********  Arreglos  **********
//  ********************************

//  -----  1ª Forma  -----
const arreglo = new Array(100);
arreglo.push(1);
console.log("Arreglo con new Array(): ", arreglo);


// -----  2ª Forma  -----
const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);
console.log("Arreglo con []: ", arreglo2);


// -----  3ª Forma  -----
const arreglo3 = [1, 2, 3, 4];
console.log("Arreglo con []: ", arreglo3);


let arreglo4 = arreglo3;
//arreglo4.push(5);
console.log("Arreglo 4: ", arreglo4);

arreglo4 = [...arreglo3, 5];
console.log("Arreglo 4: ", arreglo4);


const arreglo5 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log("\nArreglo 2: ", arreglo2);
console.log("Arreglo 5: ", arreglo5);

console.log('\n\n');