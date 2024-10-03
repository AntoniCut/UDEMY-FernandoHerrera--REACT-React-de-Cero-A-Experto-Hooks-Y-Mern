//  *******************************************************************
//  **********  /03-counter-app-vite/test/FirstApp.test.jsx  **********
//  *******************************************************************


import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {


    //  -----  hacer una fotografia de mi componente  -----
    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, Soy Goku';
        const { container } = render(<FirstApp title1={title} />);
        //console.log(container);

        expect(container).toMatchSnapshot();

    });


    test('debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title1={title} />);

        //console.log( container);
        expect(getByText(title)).toBeTruthy();  //  lo que renderiza exista este titulo.

        const h1 = container.querySelector('h1');
        //console.log(h1.innerHTML);

        //expect(h1.innerHTML).toBe(title);  //  falla.
        expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);       //  que exista el id test-id.

    });


    test('debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un Subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title1={title}
                subTitle={subTitle}
                
            />
        );

        expect( getAllByText(subTitle).length ).toBe(2);  //  Tenemos 2 subtitulos.

    });

});