//  ******************************************************************
//  **********  /03-counter-app-vite/src/HelloWorldApp.jsx  **********
//  ******************************************************************


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'


//  **********  Componente Principal HelloWorldApp()  **********
export const HelloWorldApp = () => {


    const [count, setCount] = useState(0)


    return (

        <main className='main'>

            <div className='header'>

                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>

                <h1> Hello World App !!! </h1>

                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>

            </div>


            <div className="card">

                <FirstApp title1="My Primer Componente de React" subTitle="Subtitulo del Componente" cantidades={123} />
                {/* <FirstApp  /> */}

                <div className="margen-inferior"> </div>

                <CounterApp value={-100} />
                {/* <CounterApp /> */}

                <div className="margen-inferior"> </div>

            </div>

        </main>
    );
}



