//  **************************************************
//  **********  /src/bases/04-arreglos.jsx  **********
//  **************************************************


console.warn('*****  04 arreglos  *****');

//  -----  1ª Forma  -----
const arreglo = new Array(100);
arreglo.push(1);
console.log("Arreglo con new Array(): ", arreglo);


// -----  2ª Forma  -----
const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);
console.log("Arreglo con []: ", arreglo2);


// -----  3ª Forma  -----
const arreglo3 = [1, 2, 3, 4];
console.log("Arreglo con []: ", arreglo3);


let arreglo4 = arreglo3;
//arreglo4.push(5);
console.log("Arreglo 4: ", arreglo4);

arreglo4 = [...arreglo3, 5];
console.log("Arreglo 4: ", arreglo4);


const arreglo5 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log("\nArreglo 2: ", arreglo2);
console.log("Arreglo 5: ", arreglo5);


//  **********  Componente ArreglosComponent()  **********
export const ArreglosComponent = () => {

    return (
        <div className="text">
            <h2 className='title'> 4. Arreglos </h2>
            <div className='contenido'>
                <h3> <span className='label'> 1ª Forma - Arreglo con new Array(): </span> <span className="result"> {arreglo} </span> </h3>
                <h3> <span className='label'> 2ª Forma - Arreglo con []: </span> <span className="result"> {arreglo2} </span> </h3>
                <h3> <span className='label'> 3ª Forma - Arreglo con []: </span> <span className="result"> {arreglo3} </span> </h3>
                <h3> <span className='label'> Arreglo 4: </span> <span className="result"> {arreglo4} </span> </h3>
                <h3> <span className='label'> Arreglo 5: </span> <span className="result"> {arreglo5} </span> </h3>
            </div>

        </div>
    );
}
