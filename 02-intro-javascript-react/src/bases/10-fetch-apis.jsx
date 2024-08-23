//  ***************************************************
//  **********  /src/bases/10-fetch-apis.js  **********
//  ***************************************************


import React, { useState, useEffect } from 'react';


//  **********  Componente FetchApisComponent()  **********
export const FetchApisComponent = () => {

    console.warn('*****  10 - Fetch API  *****  *****');

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const apiKey = '7KgPHLudYOtiDtL1UbPdlDy78H97XBG4';
        const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        //  -----  Promesas en Cadena  -----
        peticion
            .then(resp => resp.json())
            .then(({ data }) => {
                const { url } = data.images.original;
                console.log("URL", url);

                // Actualizamos el estado con la URL de la imagen
                setImageUrl(url);
            })
            .catch(console.warn);
    }, []); // El array vacío hace que el efecto se ejecute solo una vez al montar el componente


    //  -----  Renderizado  -----
    return (
        <div className="text">
            <h2 className='title'> 10. Fetch API </h2>
            <div>
                <h3>
                    <span className='label'> Imagen de la Api </span>
                    <span className="result">
                        {imageUrl ? <img src={imageUrl} alt="Gif from Giphy" /> : "Cargando..."}
                    </span>
                </h3>
            </div>
        </div>
    );
};
