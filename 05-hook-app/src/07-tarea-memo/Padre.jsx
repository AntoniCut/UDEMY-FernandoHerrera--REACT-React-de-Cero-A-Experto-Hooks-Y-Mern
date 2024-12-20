//  ----------------------------------------------------------------
//  ----------  /05-hook-app/src/07-tarea-memo/Padre.jsx  ----------
//  ----------------------------------------------------------------


import { useEffect, useState, useCallback } from 'react';
import { Hijo } from './Hijo';


export const Padre = () => {


    useEffect(() => {
            document.title = 'Tarea Memo - memo y useCallback';
        }, []);


    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        
        ( num ) => {
            setValor( oldValue => oldValue + num )
        },
        [],
    );


    return (
        
        
        <div className="component__container height__container-600 box-shadow">
            
            <h1 className="component__title"> Padre - Tarea Memo </h1>
            <hr /> <br />
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
