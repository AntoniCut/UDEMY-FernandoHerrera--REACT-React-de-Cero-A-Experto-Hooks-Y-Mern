//  -------------------------------------------------------------------
//  ----------  /05-hook-app/src/01-useState/CounterApp.jsx  ----------
//  -------------------------------------------------------------------


import { useState } from "react";


export const CounterApp = () => {

    const [state, setCounters] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;


    return (

        <div className="component__container">
            <h1 className="header__title"> Counter App </h1>
            <h2> Counter 1: {counter1} </h2>
            <h2> Counter 2: {counter2} </h2>
            <h2> Counter 3: {counter3} </h2>

            <hr />

            <button
                className="btn btn-outline-info"
                onClick={() => {
                    if (counter1 > 0)
                        setCounters({
                            ...state,
                            counter1: counter1 - 1
                        });
                }}
            >
                -1
            </button>

            <button
                className="btn btn-outline-warning"
                onClick={() => setCounters({
                    ...state, // Mantenemos el resto del estado
                    counter1: 0, // Reiniciamos solo counter1
                })}
            >
                Reset
            </button>


            <button
                className="btn btn-outline-info"
                onClick={() =>
                    setCounters({
                        ...state,
                        counter1: counter1 + 1
                    })
                }
            >
                +1
            </button>
        </div>
    );
};



