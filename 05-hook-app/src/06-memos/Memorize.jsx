//  --------------------------------------------------------------
//  ----------  /05-hook-app/src/06-memos/Memorize.jsx  ----------
//  --------------------------------------------------------------


import { useState } from "react";
import { useCounter} from "@/hooks/useCounter";
import { Small } from "./Small";


export const Memorize = () => {


    const { counter, decrement, reset, increment } = useCounter(10);

    const [show, setShow] = useState(true);
        


    return (

        <div className="component__container height__container-600 box-shadow">

            <h1 className="component__title"> Memorize </h1>
            <hr /> <br />

            <h2> Counter: <Small value={ counter } /> </h2>
            
            <hr />

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
