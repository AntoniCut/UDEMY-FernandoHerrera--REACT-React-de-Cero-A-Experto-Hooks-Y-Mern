//  ***************************************************
//  **********  /src/bases/01-const-let.jsx  **********
//  ***************************************************


import React from 'react';


//  **********  Componente ConstLetComponent()  **********
export const ConstLetComponent = () => {

    console.warn('*****  01 - Const y Let  *****');

    const nombre = 'Antonio';
    let apellido = 'Cutillas';
    let valorDado = 5;
    valorDado = 4;

    console.log("Nombre: ", nombre, " - Apellido:", apellido, " - Valor Dado: ", valorDado);

    if (true) {
        let valorDado = 6;
        const nombre = 'Pedro';
        console.log("\nDentro del IF - Nombre:", nombre, " - Valor Dado: ", valorDado);
    }

    console.log("\nFuera del IF - Nombre: ", nombre, " - Valor Dado: ", valorDado);

    return (
        <div className='text'>
            <h2 className='title'> 1. Const y Let </h2>
            <div className='contenido'>
                <h3> <span className='label'> Nombre: </span> <span className="result">{nombre}</span></h3>
                <h3> <span className='label'> Apellidos: </span> <span className="result">{apellido}</span></h3>
                <h3> <span className='label'> Valor Dado: </span> <span className="result">{valorDado}</span></h3>
            </div>
        </div>
    );
};

export default ConstLetComponent;
