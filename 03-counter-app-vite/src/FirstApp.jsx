//  *************************************************************
//  **********  /03-counter-app-vite/src/FirstApp.jsx  **********
//  *************************************************************

import PropTypes from "prop-types";


//  -----  Definicion de Variables, Objetos y Funciones  -----
const newMessage = 'Antonio';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const obj = {
    message: 'Hola Mundo',
    title: 'Antonio'
}

const misValores = () => {

    const newMessage = 'Antonio';
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const obj = {
        message: 'Hola Mundo',
        title: 'Antonio'
    }

    const resultado = [newMessage, arr, obj.message, obj.title];
    return resultado.join(', ');
}



//  **********  Componente FirstApp()  **********
export const FirstApp = ({ title1, subTitle, cantidades, name }) => {

    console.log({title1});
    console.log({subTitle});
    console.log({cantidades});

    //if(!title1) throw new Error('El title no existe');
        
    
    return (
        <>
            <h1 className="titulo"> First App  </h1>
            <h2> del Curso de React </h2>
            <br />

            <h2 className="subtitulos"> Titulo: <span className="resultados"> {title1} </span> </h2> 
            <h2 className="subtitulos"> Subtitulo: <span className="resultados"> {subTitle} </span> </h2> 
            <h2 className="subtitulos"> Cantidades: <span className="resultados"> {cantidades} </span> </h2>
            <h2 className="subtitulos"> Name:  <span className="resultados"> {name} </span> </h2>

            <br />

            <h3 className="subtitulos"> La Función misValores() devuelve - <span className="resultados"> {misValores()} </span> </h3>

            <h3 className="subtitulos"> Mi nombre es: <span className="resultados"> {newMessage} </span> </h3>
            <h4 className="subtitulos"> Arr: <span className="resultados"> {arr} </span> </h4> <br />
            <h4 className="subtitulos"> Obj: <span className="resultados"> {obj.message} - {obj.title} </span> </h4>

            {/* Serializa el Objeto */}
            <code className="resultados"> {JSON.stringify(obj)} </code>
        </>
    );
}


//  -----  Definición de las Props  -----
FirstApp.propTypes = {

    title1: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    cantidades: PropTypes.number.isRequired,
    name: PropTypes.string
}


//  -----  Default Props  -----

// FirstApp.defaultProps = {
//     title1: 'No Hay Título',
//     subTitle: 'No hay Subtitulo',
//     cantidades: 0,
//     name: 'Antonio Cutillas'
// }