//  ********************************************************************
//  **********  /03-counter-app-vite/test/FirstApp2.test.jsx  **********
//  ********************************************************************


import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un Subtitulo';


    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

    });


    test('debe de mostrarel mensaje "Hola, Soy Goku', () => {

        //  -----  es donde se renderiza el componente  -----
        render(<FirstApp title1={title} />);

        //screen.debug();

        expect(screen.getByText(title)).toBeTruthy();

    });


    test('debe de mostrar el titulo en un h1', () => {

        render(<FirstApp title1={title} />);

        expect( screen.getByRole('heading', {level: 1} ).innerHTML ).toContain( title) ; 
        
    });


    test('debe de mostrar el subtitulo enviado por props', () => {

               
        render(
            <FirstApp
                title1={title}
                subTitle={subTitle}
                
            />
        );

        expect( screen.getAllByText(subTitle).length).toBe(2);  //  Tenemos 2 subtitulos.

    });


});