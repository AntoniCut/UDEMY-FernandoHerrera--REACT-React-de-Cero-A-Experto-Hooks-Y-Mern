//  ------------------------------------------------------------------
//  ----------  /05-hook-app/src/04-useRef/FocusScreen.jsx  ----------
//  ------------------------------------------------------------------


import { useRef } from "react";


export const FocusScreen = () => {


    //  -----  useRef()  -----
    const inputRef = useRef();
    console.log(inputRef);


    const onSelect = () => {
        document.querySelector('input').select();
        //document.querySelector('input').focus();
    }

    const onSelectRef = () => {
        inputRef.current.select()
        //document.querySelector('input').focus();
        console.log(inputRef);
    }


    return (

        <div className="component__container height__container-600 box-shadow">

            <h1 className="component__title"> useRef - Focus Screen </h1>
            <hr /> <br />

            <input 
                ref={inputRef}
                type="text" 
                placeholder="Ingese su nombre....." 
                className="form-control"
            />

            <button className="btn btn-primary mt-5" onClick={onSelect} > Set Focus - select() </button>
            <button className="btn btn-primary mt-5" onClick={onSelectRef} > Set Focus - useRef() </button>
            

        </div>
    )
}
