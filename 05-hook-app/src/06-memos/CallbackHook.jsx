//  ------------------------------------------------------------------
//  ----------  /05-hook-app/src/06-memos/CallBackHook.jsx  ----------
//  ------------------------------------------------------------------


import { useEffect, useState, useCallback } from "react";
import { ShowIncrement } from "@/06-memos/ShowIncrement";


export const CallbackHook = () => {


    useEffect(() => {
        document.title = 'CallBack Hook';
    }, []);


    const [counter, setCounter] = useState(10);


    //  -----  USEcALLBACK  -----
    const incrementFather = useCallback(

        ( value ) => {

            //setCounter( counter + 1 );
            console.log(counter);
            setCounter((cont) => cont + value );

        },
        [],
    );


    useEffect(() => {
        incrementFather(5)
    }, []);


    

    return (

        <div className="component__container height__container-600 box-shadow">

            <h1 className="component__title"> Callback Hook - useCallback </h1>
            <hr /> <br />

            <h2> useCallback Hook: {counter} </h2>
            <hr />

            <ShowIncrement increment={incrementFather} />



        </div>
    )
}
