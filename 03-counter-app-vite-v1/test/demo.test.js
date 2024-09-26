//  **************************************************************
//  **********  /03-counter-app-vite/test/demo.test.js  **********
//  **************************************************************


describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe de fallar', () => {

        // if(0 === 1) {
        //     throw new Error('No puede dividir entre cero');
        // }

        //  ----- 1. Inicialización  -----

        const message1 = 'Hola Mundo';


        //  ----- 2. Estimulo  -----
        const message2 = message1.trim();


        //  ----- 3. Aserciones u Observar el Comportamiento... Esperado  -----

        //  message1 === message2
        expect(message1).toBe(message2);


    });

});

