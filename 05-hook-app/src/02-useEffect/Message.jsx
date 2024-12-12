//  -----------------------------------------------------------------
//  ----------  /05-hook-app/src/02-useEffect/Message.jsx  ----------
//  -----------------------------------------------------------------


import { useState, useEffect } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        
        console.log('*****  Component Message  ***** - Message Mounted');
        
        const onMouseMove = ({ x, y }) => {
            
            console.log(coords);
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove);
        
        return () => {
            
            console.log('*****  Component Message  ***** - Message UnMounted');

            removeEventListener('mousemove', onMouseMove);
        }

    }, []);

    return (

        <>
            <br/> <br/>
            <h3> Usuario ya existe </h3>
            { JSON.stringify( coords )}
        </>
    )
}


