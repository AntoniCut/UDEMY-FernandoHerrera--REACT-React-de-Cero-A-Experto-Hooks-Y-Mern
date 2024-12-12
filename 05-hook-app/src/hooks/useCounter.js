//  ------------------------------------------------------------
//  ----------  /05-hook-app/src/hooks/useCounter.js  ----------
//  ------------------------------------------------------------


import { useState } from "react";


export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue );

    const decrement = (value = 1) => {
        
        setCounter((prevCounter) => {
            // Evitamos valores negativos
            const newCounter = prevCounter - value;
            return newCounter < 0 ? 0 : newCounter;
        });
    };
    

    const reset = () => setCounter(initialValue);
    const increment = ( value = 1) => setCounter(counter + value);
    
    
    return {
        
        counter,
        decrement,
        reset,
        increment
        
    }
}
