//  ********************************************************
//  **********  /03-counter-app-vite/src/App.jsx  **********
//  ********************************************************


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
export const FirstApp = () => {

    return (
        <>
            <h1> First App </h1> <br />
            <h2> del Curso de React </h2> <br />
            
            <h3> La Función misValores() devuelve - {misValores()}</h3>

            <h3> Mi nombre es: {newMessage} </h3> 
            <h4> {arr} </h4> <br />
            <h4> {obj.message} - {obj.title} </h4>
            
            {/* Serializa el Objeto */}
            <code> {JSON.stringify(obj)} </code>
        </>
    );
}

