//  ******************************************************
//  **********  /src/bases/08-import-export.js  **********
//  ******************************************************

import heroes, { owner } from '../data/heroes';


console.warn('08-import-export.js!!!');


//  ***************************************
//  **********  Import y Export  **********
//  ***************************************


console.log("\nOwner: ", owner);


/**  
 * -----  Obtener un heroe por el id utilizando la Función find() -----
 * @param {Number} id 
 * @returns {Object}
 */

export const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id === id) return true;
        else return false;
    });
}

console.log(getHeroeById(1));

//  -----  forma abreviada de la función anterior  -----
export const getHeroeById2 = (id) => heroes.find(heroe => heroe.id === id);
console.log("\nHeroe por el id 2: ", getHeroeById2(2));

//  -----  Otro Ejemplo con filter()  -----
export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
console.log("\nHeroe por el owner 'Marvel'", getHeroesByOwner('Marvel'));
console.log("Heroe por el owner 'DC'", getHeroesByOwner('DC'));

console.log('\n\n');

