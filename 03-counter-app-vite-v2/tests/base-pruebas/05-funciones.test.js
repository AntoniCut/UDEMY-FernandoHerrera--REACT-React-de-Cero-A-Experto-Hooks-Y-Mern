//  ********************************************
//  **********  05-funciones.test.js  **********
//  ********************************************

import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones.js', () => {


    //  ----------  Prueba 1  ----------
    test('getUser debe de retornar un objeto', () => {


        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);

        //  -----  toEqual y toStringEqual para comparar objetos  -----
        expect(testUser).toStrictEqual(user);

    });


    //  ----------  Prueba 2  ----------
    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Antonio';

        const userActivo = getUsuarioActivo(name);

        expect(userActivo).toEqual({
            uid: 'ABC567',
            username: name
        });

    })


});