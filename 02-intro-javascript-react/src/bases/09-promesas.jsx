//  *************************************************
//  **********  /src/bases/09-promesas.js  **********
//  *************************************************


import React, { useState, useEffect } from 'react';
import { getHeroeById, getHeroesByOwner } from './08-import-export';

console.warn('*****  09-promesas.js  *****');

//  **********  Componente PromesasComponent()  **********
export const PromesasComponent = () => {

    // -----  Estado para almacenar el héroe obtenido por ID  -----
    const [heroeId_1, setHeroeId_1] = useState(null);


    //  -----  Estado para almacenar héroes de DC y Marvel  -----
    const [heroesDC, setHeroesDC] = useState([]);
    const [heroesMarvel, setHeroesMarvel] = useState([]);
    const [error, setError] = useState(null);


    //  -----  Función asíncrona para obtener un héroe por ID  -----
    const getHeroeByIdAsync = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const heroe = getHeroeById(id);
                console.log('console.log del heroe: ', heroe);

                if (heroe) resolve(heroe);
                else reject('No se pudo encontrar el heroe');
            }, 2000);
        });
    };


    //  -----  useEffect para ejecutar la promesa al montar el componente  -----
    useEffect(() => {
        getHeroeByIdAsync(1)
            .then((heroe) => setHeroeId_1(heroe))
            .catch((error) => setError(error));

        //  -----  Importamos funciones para obtener los héroes de DC y Marvel  -----
        const heroesDC = getHeroesByOwner('DC');
        const heroesMarvel = getHeroesByOwner('Marvel');

        setHeroesDC(heroesDC);
        setHeroesMarvel(heroesMarvel);

    }, []);


    if(error) return <div>Error: {error}</div>;
    if(!heroeId_1) return <div>Cargando héroe...</div>;
    

    //  -----  Renderizado  -----
    return (
        
        <div className="text">
            
            <h2 className='title'> 9. Promesas </h2>

            <div>
                <h3>
                    <span className='label'> Héroe con id 1: </span>  
                    <span className="result"> Nombre: {heroeId_1.name}, Dueño: {heroeId_1.owner} </span>
                </h3>

                <h3>
                    <span className='label'> Héroes con Owner DC: </span>
                    <span className="result">
                        {heroesDC.map((heroe, index) => (
                            <div key={index}>
                                Nombre: {heroe.name}, Owner: {heroe.owner}
                            </div>
                        ))}
                    </span>
                </h3>

                <h3>
                    <span className='label'> Héroes con Owner Marvel: </span>
                    <span className="result">
                        {heroesMarvel.map((heroe, index) => (
                            <div key={index}>
                                Nombre: {heroe.name}, Owner: {heroe.owner}
                            </div>
                        ))}
                    </span>
                </h3>

            </div>

        </div>
    );
};
