//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import logo from './logo.svg';
import './App.css';
import { ConstLetComponent } from './bases/01-const-let';
import { TemplateStringComponent } from './bases/02-template-string';
import { ObjetosLiteralesComponent } from './bases/03-objetos-literales';
import { ArreglosComponent } from './bases/04-arreglos';
import { FuncionesComponent } from './bases/05-funciones';
import { DesestructuracionObjetosComponent } from './bases/06-desestructuracion-objetos';
import { DesestructuracionArreglosComponent } from './bases/07-desestructuracion-arreglos';
import { ImportExportComponent } from './bases/08-import-export';
import { PromesasComponent } from './bases/09-promesas';
import { FetchApisComponent } from './bases/10-fetch-apis';
import { CondicionalTernarioComponent } from './bases/12-condicional-ternario';




//  **********  Componente Principal *****  App()  **********
const App = () => {


    return (

        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1> 02 Introducción de JavaScript </h1>
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <main className="App-content">

                <div className='content-component'>
                    <div className='resultado'>
                        <ConstLetComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <TemplateStringComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <ObjetosLiteralesComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <ArreglosComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <FuncionesComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <DesestructuracionObjetosComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <DesestructuracionArreglosComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <ImportExportComponent />
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        {/* <PromesasComponent /> */}
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        {/* <FetchApisComponent /> */}
                    </div>
                </div>
                <div className='linea'> </div>


                <div className='content-component'>
                    <div className='resultado'>
                        <CondicionalTernarioComponent /> 
                    </div>
                </div>
                <div className='linea'> </div>


            </main>

        </div>

    );
}

export default App;



