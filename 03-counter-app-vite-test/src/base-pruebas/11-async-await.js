//  *****************************************
//  **********  11-async-await.js  **********
//  *****************************************


export const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        //const apiKey = '7KgPHLudYOtiDtL1UbPdlDy78H97XBG4';      //  mi apiKey.

        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.error(error)
        return 'No se encontro la imagen';
    }
    
    
}

//getImagen();



