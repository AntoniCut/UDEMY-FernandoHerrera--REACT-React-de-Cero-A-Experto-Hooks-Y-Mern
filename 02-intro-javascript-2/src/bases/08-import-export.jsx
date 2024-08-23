//  ************************************************************
//  **********  /src/06-desectructuracionArreglos.jsx  **********
//  ************************************************************


import heroes, { owner } from '../data/heroes';

console.warn('*****  08 - import-export  *****');

console.log("\nHeroes: ", heroes);
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


//  **********  Componente ImportExportComponent()  **********
export const ImportExportComponent = () => {

    //  Obtenemos el Heroe de id = 1
    const heroeId_1 = getHeroeById(1);

    // Obtenemos los héroes cuyo owner es 'DC'
    const heroesDC = getHeroesByOwner('DC');

    // Obtenemos los héroes cuyo owner es 'Marvel'
    const heroesMarvel = getHeroesByOwner('Marvel');

    return (

        <div className="text">
            <h2 className='title'> 8. Import y Export </h2>

            <div>
                <h3> <span className='label'> Héroe con id 1: </span>  <span className="result"> Nombre: {heroeId_1.name}, Dueño: {heroeId_1.owner} </span> </h3>

                <h3>
                    <span className='label'> Héroes con Owner DC: </span>
                    <span className="result">
                        {/* Iteramos sobre los héroes y los renderizamos */}
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
                        {/* Iteramos sobre los héroes y los renderizamos */}
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

}



