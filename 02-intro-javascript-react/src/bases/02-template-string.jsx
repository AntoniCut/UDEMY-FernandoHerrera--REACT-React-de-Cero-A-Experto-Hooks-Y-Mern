//  *********************************************************
//  **********  /src/bases/02-template-string.jsx  **********
//  *********************************************************


import React from 'react';


console.warn('*****  02 - Template String  *****');

const nombre = 'Antonio';
const apellido = 'Cutillas';

const nombreCompleto1 = `${nombre} ${apellido}`;
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


//  **********  Componente TemplateStringComponent()  **********
export const TemplateStringComponent = () => {

    return (
        <div className="text">
            <h2 className='title'> 2. Template String </h2>
            <div className='contenido'>
                <h3> <span className='label'> Nombre Completo 1: </span> <span className="result"> {nombreCompleto1} </span> </h3>
                <h3> <span className='label'> Nombre Completo 2: </span> <span className="result"> {nombreCompleto2} </span> </h3>
                <h3> <span className='label'> Saludo: </span> <span className="result"> {getSaludo(nombre, apellido)} </span> </h3>
                <h3> 
                    <span className='label'> Texto con saludo: </span> 
                    <span className="result"> {`Este es un texto: ${getSaludo(nombre, apellido)}`} </span> 
                </h3>
            </div>

        </div>
    );
};


