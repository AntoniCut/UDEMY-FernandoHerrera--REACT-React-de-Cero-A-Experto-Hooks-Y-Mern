//  *********************************************
//  **********  /src/05-funciones.jsx  **********
//  *********************************************


console.warn('*****  05 - funciones  *****');

//  ----------  Funciones Tradicionales  ----------
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

//saludar = 30;
console.log(saludar('Antonio'));

console.log("Referencia a la Función: \n", saludar);


//  ----------  Funciones Tradicionales mas Modernas  ----------
const saludar2 = function (nombre) {
    return `Hola, ${nombre}`;
}

//saludar2 = 30;

console.log(saludar2('Antonio'));


//  ----------  Funciones Landa o de Flecha  ----------
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log("Referencia a la Función: \n", saludar3);
console.log(saludar3('Francisco'));


//  ----------  Funciones Landa o de Flecha Si solo 1 linea ----------
const saludar4 = nombre => `Hola, ${nombre}`;


console.log("Referencia a la Función: \n", saludar4);
console.log(saludar4('Juan'));


//  ----------  Funciones Landa o de Flecha Si solo 1 linea Sin Argumentos ----------
const saludar5 = () => `Hola Mundo!!!`;

console.log("Referencia a la Función: \n", saludar5);
console.log(saludar5());


//  ----------  Otro Ejemplo con Return de un Objeto ----------
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

console.log("Referencia a la Función: \n", getUser);
console.log(getUser());


//  ----------  Otro Ejemplo con Return de un Objeto en 1 Linea ----------
const getUser2 = () => ({ uid: 'ABC123', username: 'El_Papi1502' });

console.log("Referencia a la Función: \n", getUser2);
console.log(getUser2());


//  ----------  TAREA  ----------
//  -----  1. Transformen a una función de Flecha  ----- 
//  -----  2. Tiene que retornar un objeto implicito  -----
//  -----  3. Pruebenlo  -----
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Antonio');
console.log(usuarioActivo);


//  ----------  RESOLUCIÓN DE LA TAREA  ----------
const usuarioActivo2 = name => ({ uuid: 'ABC567', username: name });
console.log(usuarioActivo2('Antonio'));


//  **********  Componente FuncionesComponent()  **********
export const FuncionesComponent = () => {

    return (
        <div className="text">
            <h2 className='title'> 5. Funciones </h2>
            <div>
                <h3> <span className='label'> saludar2() </span> <span className="result"> {saludar2('Antonio')} </span> </h3>
                <h3> <span className='label'> saludar3() </span> <span className="result"> {saludar3('Francico')} </span> </h3>
                <h3> <span className='label'> saludar4() </span> <span className="result"> {saludar4('Juan')} </span> </h3>
                <h3> <span className='label'> saludar5() </span> <span className="result"> {saludar5()} </span> </h3>
                <h3> <span className='label'> getUser() </span> <span className="result"> {JSON.stringify(getUser())} </span> </h3>
                <h3> <span className='label'> getUser2() </span> <span className="result"> {JSON.stringify(getUser2())} </span> </h3>
                <h3> <span className='label'> usuarioActivo </span> <span className="result"> {JSON.stringify(usuarioActivo)} </span> </h3>
                <h3> <span className='label'> usuarioActivo2 </span> <span className="result"> {JSON.stringify(usuarioActivo2('Francisco'))} </span> </h3>
            </div>
        </div>
    );
}