//  **************************************************
//  **********  /src/bases/10-fetch-api.js  **********
//  **************************************************


console.warn('*****  10 - Fetch API  *****  *****');

const apiKey = '7KgPHLudYOtiDtL1UbPdlDy78H97XBG4';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


//  -----  Promesas en Cadena  -----
peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        
        console.log("data data.images.original.url: ", data.images.original.url);
        console.log('\n\n\n\n\n\n');

        const {url} = data.images.original;
        console.log("URL", url);

        const titulo = document.createElement('h1');
        titulo.innerText = 'Imagen ejercicio de Fetch Api';
        
        const img = document.createElement('img');
        img.src = url;

        document.body.appendChild(titulo);
        document.body.appendChild(img);
    })
    .catch(console.warn);


// peticion
//     .then(resp => {
        
//         console.log("resp: ", resp);

//         resp.json()
//         .then( data => {
//             console.log("data: ", data);
//             console.log('\n\n\n\n\n\n');
//         })
//     })
//     .catch(console.warn);


    