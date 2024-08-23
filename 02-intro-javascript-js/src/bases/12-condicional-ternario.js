//  *************************************************************
//  **********  /src/bases/12-condicional-ternario.js  **********
//  *************************************************************


console.warn('*****  12 - Operador Condicional Ternario  *****');

const activo = true;
let mensaje = '';

//  -----  IF Tradicional  -----
if(activo) mensaje = 'Activo';
else mensaje = 'Inactivo';
console.log("IF - Tradicional ", {mensaje});

if(!activo) mensaje = 'Activo';
else mensaje = 'Inactivo';
console.log("IF - Tradicional ", {mensaje});


//  -----  Condicional Ternario  -----
const mensaje2 = (activo) ? 'Activo' : 'Inactivo';
console.log("Condicional Ternario ", {mensaje2});

const mensaje3 = (!activo) ? 'Activo' : 'Inactivo';
console.log("Condicional Ternario ", {mensaje3});

const mensaje4 = activo && 'Activo';
console.log("Condicional Ternario ", {mensaje4});

const mensaje5 = !activo && 'Activo';
console.log("Condicional Ternario ", {mensaje5});