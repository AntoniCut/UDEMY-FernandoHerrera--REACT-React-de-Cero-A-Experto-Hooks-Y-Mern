//  ***************************************************************
//  **********  /03-counter-app-vite/src/CounterApp.jsx  **********
//  ***************************************************************


import PropTypes from "prop-types";
import { useState } from "react";


//  **********  Componente CounterApp()  **********
export const CounterApp = ({ value }) => {

    if(value < 0) value = 0;

    //  -----  Hook 'Use State'  -----
    const [counter, setCounter] = useState(value);

    //  -----  Click en el Botón ' + '  -----
    const handleAdd = () => setCounter(counter + 1);     //  son identicas  -----  setCounter( (c) => c + 1)  -----
        
    //  -----  Click en el Botón ' - '  -----
    const handleSubstract = () => {
        //console.log(event);
        if(counter === 0) return;
        setCounter(counter - 1);     //  son identicas  -----  setCounter( (c) => c - 1)  -----
    }
    
    //  -----  Click en el Botón ' reset '  -----
    const handleReset = () => setCounter(value);     
    
    //  -----  Renderizado  -----
    return (
        <>
            <h1> Counter App </h1> <br /> <br />

            <div className="counter-container">

                <div className="counter-superior">
                    <button className="btn-counter" onClick={handleSubstract}> - </button>
                    <h2 className="resultados counter-font-size counter-marcador"> {counter} </h2>
                    <button className="btn-counter" onClick={handleAdd}> + </button>
                </div>

                <div className="counter-inferior">
                <button className="btn-counter" onClick={handleReset}> Reset </button>
                </div>

            </div>
        </>
    );
}


//  -----  Definición de las Props  -----
CounterApp.propTypes = {

    value: PropTypes.number.isRequired,
}


//  -----  Default Props  -----

// CounterApp.defaultProps = {
//     value: 0
// }