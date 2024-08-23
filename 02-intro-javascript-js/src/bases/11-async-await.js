//  ****************************************************
//  **********  /src/bases/11-async-await.js  **********
//  ****************************************************


console.warn('*****  11 - Async Await  *****');

const apiKey = '7KgPHLudYOtiDtL1UbPdlDy78H97XBG4';


//  -----  Ejemplo utilizando Promesas  -----
const getImagenPromesa = () => new Promise(resolve => resolve(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`))
getImagenPromesa().then(console.log);


//  -----  Ejemplo utilizando Async  -----
const getImagen = async () => {
    return `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
}

console.log("getImagen(): ", getImagen());
getImagen().then(console.log)


//  -----  await => Trabaja el código como si fuera sincrono  -----
const getImagen2 = async () => {

    try {

        const apiKey = '7KgPHLudYOtiDtL1UbPdlDy78H97XBG4';

        //  -----  await => epera a que termine la petición antes de continuar con la siguiente linea de código  -----
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();

        //console.log("data de getImagen2(): ", data);

        const { url } = data.images.original;

        const titulo = document.createElement('h1');
        titulo.innerText = 'Imagen ejercicio del Async Await';

        const img = document.createElement('img');
        img.src = url;

        document.body.appendChild(titulo);
        document.body.appendChild(img);

    } catch (error) {
        
        //  -----  Manejo del Error  -----
        console.error("ERROR!!!!! - ", error);
    }
}

getImagen2();
