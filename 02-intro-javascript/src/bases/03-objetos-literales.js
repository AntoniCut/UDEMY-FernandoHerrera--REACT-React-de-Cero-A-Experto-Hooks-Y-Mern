//  **********************************************************
//  **********  /src/bases/03-objetos-literales.js  **********
//  **********************************************************


console.warn('*****  03 - Objetos Literales  *****');


//  *****************************************
//  **********  Objetos Literales  **********
//  *****************************************


const persona = {
    nombre: 'Antonio',
    apellido: 'Cutillas',
    edad: 48,
    direccion: {
        ciudad: 'Murcia',
        cp: '30006',
        lat: 45878,
        lng: -5478
    }
};

//console.table(persona);
//console.table({persona:persona});

console.table(persona.nombre);
console.table(persona.apellido);
console.table(persona.edad);
console.table(persona.direccion.ciudad);
console.table(persona.direccion.cp);
console.table(persona.direccion.lat);
console.table(persona.direccion.lng);

//  -----  Clonar Objetos por Referencia  ----- ¡¡¡NO HACER ESTA ASIGNACIÓN NUNCA!!!
const persona2 = persona;
persona2.nombre = 'Peter';

console.log("Persona 2: ", persona);
console.log("Persona 2: ", persona2);

//  -----  Clonar de Esta Forma con el operador 'spred'  -----
const persona3 = { ...persona };
console.log("Persona 3: ", persona3);

console.log('\n\n');
