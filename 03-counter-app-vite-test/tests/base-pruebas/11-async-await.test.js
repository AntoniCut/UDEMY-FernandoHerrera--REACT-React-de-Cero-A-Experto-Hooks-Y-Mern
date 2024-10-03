//  **********************************************
//  **********  11-async-await.test.js  **********
//  **********************************************


import heroes from '../../src/data/heroes';
import { getImagen } from '../../src/base-pruebas/11-async-await';
import { string } from 'prop-types';


describe('Pruebas en 11-async-await', () => {

    test('getImagen debe de retornar un URL de la imagen', async() => {

        const url = await getImagen();
        console.log('url: ', url);

        expect( typeof url).toBe('string');
    });


    test('getImagen debe de retornar un error si no tenemos Api Key', async() => {

        const resp = await getImagen();
        console.log('resp: ', resp);

        expect(resp).toBe('No se encontro la imagen');
    });
    
});
