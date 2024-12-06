//  -----------------------------------------------------
//  ----------  /05-hook-app/src/HooksApp.jsx  ----------
//  -----------------------------------------------------


import { Headers } from "./components/Headers";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";



export const HooksApp = () => {

    return (
        
        <div>

            <Headers />
            <CounterApp />
            <CounterWithCustomHook />
            

        </div>
    )
}
