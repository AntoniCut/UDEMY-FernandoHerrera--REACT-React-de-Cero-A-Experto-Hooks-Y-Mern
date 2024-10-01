//  ********************************************
//  **********  07-deses-arr.test.js  **********
//  ********************************************


import { retornaArreglo} from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 06-deses.arr.js', () => {

    test('06-deses.arr.js debe de retornar un string y un numero', () => {

        //const retorno = retornaArreglo();
        const [letter, numbers ] = retornaArreglo();

        //expect(letter).toEqual('ABC');
        //expect(numbers).toEqual(123);

        expect(letter).toBe('ABC');
        expect(numbers).toBe(123);
        console.log(letter, numbers);


        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');
        console.log(typeof letter, typeof numbers);

        expect( letter ).toStrictEqual( expect.any(String));
        

        
    });

});