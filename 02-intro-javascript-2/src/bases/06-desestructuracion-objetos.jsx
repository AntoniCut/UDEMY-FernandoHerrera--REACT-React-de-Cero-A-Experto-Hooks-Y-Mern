//  *************************************************************
//  **********  /src/06-desectructuracion-objetos.jsx  **********
//  *************************************************************


console.warn('*****  06 - desestructuracion-objetos  *****');


//  ----------  Objeto  ----------
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

console.log("\npersona: ", persona);
console.log("Nombre persona: ", persona.nombre);
console.log("Edad persona: ", persona.edad);
console.log("Clave persona: ", persona.clave);


//  ----------  Objeto Desestructurado  ----------
const { nombre, edad, clave } = persona;

console.log("\npersona: ", persona);
console.log("Nombre persona: ", nombre);
console.log("Edad persona: ", edad);
console.log("Clave persona: ", clave);


//  ----------  Función Sin Desestructuración  ----------
const retornaPersona = (usuario) => {

    const { nombre, edad, clave } = usuario;
    console.log("\nretornaPersona(): ", nombre, edad, clave);
    return `Nombre: ${nombre} - Edad: ${edad} - Clave: ${clave}`;

}

retornaPersona(persona);


//  ----------  Función Con Desestructuración  ----------
const retornaPersona2 = ({ nombre, edad, clave }) => {

    console.log("\nretornaPersona2(): ", nombre, edad, clave);
    return `Nombre: ${nombre} - Edad: ${edad} - Clave: ${clave}`;

}

retornaPersona2(persona);


//  ----------  Función Con Desestructuración Argumentos por defecto  ----------
const retornaPersona3 = ({ nombre, edad, clave, rango = 'Capitán' }) => {

    console.log("\nretornaPersona3(): ", nombre, edad, clave, rango);
    return `Nombre: ${nombre} - Edad: ${edad} - Clave: ${clave} - Rango: ${rango}`;

}

retornaPersona3(persona);



//  ----------  Forma 1  =>  Función Con Desestructuración Argumentos por defecto y Return  ----------
const retornaPersona4 = ({ nombre, edad, clave, rango = 'Capitán' }) => {

    console.log("\nretornaPersona4(): ", nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,

    }

}

const avenger = retornaPersona4(persona);
console.log("\nRetornaPersona4(): ", avenger);


//  ----------  Forma 2  =>  Función Con Desestructuración Argumentos por defecto y Return  ----------
const usoContext = ({ nombre, edad, clave, rango = 'Capitán' }) => {

    //console.log("\nretornaPersona3(): ", nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -5687.23
        }
    }

}


const { nombreClave, anios, latlng } = usoContext(persona);
console.log("\nusoContext(): ", nombreClave, anios, latlng);


//  ----------  Forma 3  =>  Función Con Desestructuración Anidada Argumentos por defecto y Return  ----------
const usoContext2 = ({ nombre, edad, clave, rango = 'Capitán' }) => {

    //console.log("\nretornaPersona3(): ", nombre, edad, clave, rango);
    return {
        nombreClave2: clave,
        anios2: edad,
        latlng2: {
            lat2: 14.1234,
            lng2: -5687.23
        }
    }

}

const { nombreClave2, anios2, latlng2: { lat2, lng2 } } = usoContext2(persona);
console.log("\nusoContext2(): ", nombreClave2, anios2, lat2, lng2);


//  ----------  Forma 4  =>  Función Con Desestructuración Anidada Argumentos por defecto y Return  ----------
const usoContext3 = ({ nombre, edad, clave, rango = 'Capitán' }) => {

    //console.log("\nretornaPersona3(): ", nombre, edad, clave, rango);
    return {
        nombreClave3: clave,
        anios3: edad,
        latlng3: {
            lat3: 14.1234,
            lng3: -5687.23
        }
    }

}


const { nombreClave3, anios3, latlng3 } = usoContext3(persona);
const { lat3, lng3 } = latlng3;
console.log("\nusoContext3(): ", nombreClave3, anios3, lat3, lng3);


//  **********  Componente DesestructuracionObjetosComponent()  **********
export const DesestructuracionObjetosComponent = () => {


    // Llama a usoContext con el objeto persona
    const { nombreClave, anios, latlng } = usoContext(persona);
    const { lat, lng } = latlng; // Desestructuración anidada

    return (
        <div className="text">
            <h2 className='title'> 6. Desestructuración de Objetos </h2>
            <div>
                <h3> <span className='label'> retornaPersona() </span> <span className="result"> {retornaPersona(persona)} </span> </h3>
                <h3> <span className='label'> retornaPersona2() </span> <span className="result"> {retornaPersona2(persona)} </span> </h3>
                <h3> <span className='label'> retornaPersona3() </span> <span className="result"> {retornaPersona3(persona)} </span> </h3>
                <h3> <span className='label'> retornaPersona4() </span> <span className="result"> Nombre Clave: {nombreClave} - Años: {anios} </span> </h3>
                <h3> <span className='label'> usoContext() </span> <span className="result"> Nombre Clave: {nombreClave}, Años: {anios}, Lat: {lat}, Lng: {lng} </span> </h3>

            </div>
            
        </div>
    );


}