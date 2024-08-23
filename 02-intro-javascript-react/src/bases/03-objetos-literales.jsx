//  **********************************************************
//  **********  /src/bases/03-objetos-literales.jsx  **********
//  **********************************************************


console.warn('*****  03 - Objetos Literales  *****');

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


//  **********  Componente ObjetosLiteralesComponent()  **********  
export const ObjetosLiteralesComponent = () => {

    return (
        <div className="text">
            <h2 className='title'> 3. Objetos Literales </h2>
            <h3> DATOS DE LA PERSONA . . . </h3>
            <div className='contenido'>
                <h3> <span className='label'> Nombre: </span> <span className="result"> {persona.nombre} </span> </h3>
                <h3> <span className='label'> Apellido: </span> <span className="result"> {persona.apellido} </span> </h3>
                <h3> <span className='label'>Edad </span> <span className="result"> {persona.edad} </span> </h3>
                <h3> <span className='label'> Ciudad: </span> <span className="result"> {persona.direccion.ciudad} </span> </h3>
                <h3> <span className='label'> Código Postal: </span> <span className="result"> {persona.direccion.cp} </span> </h3>
                <h3> <span className='label'> Latitud Ciudad: </span> <span className="result"> {persona.direccion.lat} </span> </h3>
                <h3> <span className='label'> Longitud Ciudad: </span> <span className="result"> {persona.direccion.lng} </span> </h3>
            </div>

        </div>
    );
}