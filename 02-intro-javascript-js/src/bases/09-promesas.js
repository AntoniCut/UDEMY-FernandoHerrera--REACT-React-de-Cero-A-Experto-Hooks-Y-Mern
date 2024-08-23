//  *************************************************
//  **********  /src/bases/09-promesas.js  **********
//  *************************************************

import { getHeroeById, getHeroeById2, getHeroesByOwner } from './08-import-export';

console.warn('*****  09-promesas.js  *****');


// const promesa = new Promise((resolve, reject) => {

//     setTimeout( () => {

//         //console.log('2 segundos despues');
//         //resolve();
//         const heroeId2 = getHeroeById(2);
//         console.log('heroe con id = 2: ', heroeId2);
//         resolve(heroeId2);
//         //reject('No se pudo encontrar el heroe');


//         const heroeId4 = getHeroeById2(4);
//         console.log('heroe con id = 4: ', heroeId4);

//         const heroeByOwnerDC = getHeroesByOwner('DC');
//         console.log('Owner DC: ', heroeByOwnerDC);

//         const heroeByOwnerMarvel = getHeroesByOwner('Marvel');
//         console.log('Owner Marvel: ', heroeByOwnerMarvel)



//     }, 2000);

// });


// promesa
//     .then( (heroe) => {                                         //  obtiene el reject
//         console.log('Heroe dentro de la promesa: ', heroe);
//     })
//     .catch(error => console.error(error))                       //  obtiene el reject
//     .finally()                                                  //  siempre se ejecuta


const getHeroeByIdAsync = (id) => {


    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroeById(id);
            console.log('console.log del heroe: ', heroe);

            if (heroe) resolve(heroe);
            else reject('No se pudo encontrar el heroe');

        }, 2000);

    });


}

getHeroeByIdAsync(1)
    // .then( heroe => console.log('heroe', heroe))
    // .catch(error => console.error(error));
    .then(console.log)         //  igual que el .then() de arriba
    .catch(console.error);      //  igual que el .catch() de arriba


console.log('\n\n');