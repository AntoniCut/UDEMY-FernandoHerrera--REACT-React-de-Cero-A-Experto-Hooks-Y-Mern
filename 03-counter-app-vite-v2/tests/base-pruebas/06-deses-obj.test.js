//  ********************************************
//  **********  06-deses-obj.test.js  **********
//  ********************************************


import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en el archivo 06-deses-obj.js debe retornar un objeto', () => {

    test('06-des-obj debe retornar un objeto', () => {

        const clave = 'Spiderman';
        const nombre = 'Peter Link';
        const edad = 71;

        // Aquí puedes eliminar el "rango" si no es necesario porque ya tiene un valor por defecto
        const user = usContext({ clave, nombre, edad });

        expect(user).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    });

});




