//  --------------------------------------------------------------
//  ----------  /05-hook-app/src/06-memos/MemoHook.jsx  ----------
//  --------------------------------------------------------------


import { useEffect, useState, useMemo } from "react";
import { useCounter} from "@/hooks/useCounter";
import { Small } from "@/06-memos/Small";




const heavyStuff = ( iterationNumber = 100 ) => {

    for( let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos.....');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}


export const MemorHook = () => {


    useEffect( () => {
        document.title = 'Memo Hook';
    }, []);


    const { counter, decrement, reset, increment } = useCounter(4000);
    const [show, setShow] = useState(true);


    //  -----  useMemo()  -----
    const memorizedValue = useMemo( () => heavyStuff( counter ), [ counter ]);
        


    return (

        <div className="component__container height__container-600 box-shadow">

            <h1 className="component__title"> Memo Hook - useMemo </h1>
            <hr /> <br />

            <h2> Counter: <Small value={ counter } /> </h2>
            <hr />

            <h4> { memorizedValue } </h4>
            <hr/>

            <button
                className="btn btn-info"
                onClick={() => {
                    if (counter > 0) decrement();
                }}
            >
                -1
            </button>

            <button
                className="btn btn-warning"
                onClick={() => reset()}
            >
                Reset
            </button>


            <button
                className="btn btn-info"
                onClick={() => increment() }
            >
                +1
            </button>


            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button
                className="btn btn-success ml-4"
                onClick={ () => setShow( !show ) }
            > 
                Show / Hide -- { JSON.stringify(show) } 
            </button>


        </div>
    )
}
