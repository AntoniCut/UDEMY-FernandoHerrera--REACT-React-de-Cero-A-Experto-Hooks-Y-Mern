//  *************************************************************
//  **********  /src/bases/12-condicional-ternario.js  **********
//  *************************************************************


//  **********  Componente FetchApisComponent()  **********
export const CondicionalTernarioComponent = () => {

    console.warn('*****  12 - Operador Condicional Ternario  *****  *****');

    const activo = true;
    let mensaje0 = '';
    let mensaje1 = '';

    //  -----  IF Tradicional  -----
    if (activo) mensaje0 = 'Activo';
    else mensaje0 = 'Inactivo';
    console.log("IF - Tradicional ", { mensaje0 });

    if (!activo) mensaje1 = 'Activo';
    else mensaje1 = 'Inactivo';
    console.log("IF - Tradicional ", { mensaje1 });


    //  -----  Condicional Ternario  -----
    const mensaje2 = (activo) ? 'Activo' : 'Inactivo';
    console.log("Condicional Ternario ", { mensaje2 });

    const mensaje3 = (!activo) ? 'Activo' : 'Inactivo';
    console.log("Condicional Ternario ", { mensaje3 });

    const mensaje4 = activo && 'Activo';
    console.log("Condicional Ternario ", { mensaje4 });

    const mensaje5 = !activo && 'Activo';
    console.log("Condicional Ternario ", { mensaje5 });


    //  -----  Renderizado  -----
    return (
        <div className="text">
            
            <h2 className='title'> 12. Operador Condicional Ternario </h2>
            
            <div>
                <h3>
                    <span className='label'> IF - Tradicional - Mensaje 0 </span>
                    <span className="result"> {mensaje0} </span>
                </h3>

                <h3>
                    <span className='label'> IF - Tradicional - Mensaje 1 </span>
                    <span className="result"> {mensaje1} </span>
                </h3>

                <h3>
                    <span className='label'> Condicional Ternario - Mensaje 2 </span>
                    <span className="result"> {mensaje2} </span>
                </h3>

                <h3>
                    <span className='label'> Condicional Ternario - Mensaje 3 </span>
                    <span className="result"> {mensaje3} </span>
                </h3>

                <h3>
                    <span className='label'> Condicional Ternario - Mensaje 4 </span>
                    <span className="result"> {mensaje4} </span>
                </h3>

                <h3>
                    <span className='label'> Condicional Ternario - Mensaje 5 </span>
                    <span className="result"> {mensaje5} </span>
                </h3>
            </div>

        </div>
    );
};
