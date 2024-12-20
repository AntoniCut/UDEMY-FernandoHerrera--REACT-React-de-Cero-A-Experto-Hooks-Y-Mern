//  -------------------------------------------------------------------
//  ----------  /05-hook-app/src/01-useState/CounterApp.jsx  ----------
//  -------------------------------------------------------------------


import { useEffect, useState } from "react";


export const CounterApp = () => {


    useEffect( () => {
        document.title = 'Counter App';
    }, []);

    const [state, setCounters] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;


    return (

        <div className="component__container height__container-600 box-shadow">
            
            <h1 className="component__title"> Counter App - useState </h1>
            <h2> Counter 1: {counter1} </h2>
            <h2> Counter 2: {counter2} </h2>
            <h2> Counter 3: {counter3} </h2>

            <hr />

            <button
                className="btn btn-info"
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
                className="btn btn-warning"
                onClick={() => setCounters({
                    ...state, // Mantenemos el resto del estado
                    counter1: 0, // Reiniciamos solo counter1
                })}
            >
                Reset
            </button>


            <button
                className="btn btn-info"
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



