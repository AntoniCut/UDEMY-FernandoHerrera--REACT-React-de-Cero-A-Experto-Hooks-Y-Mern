//  ------------------------------------------------------------------------------
//  ----------  /05-hook-app/src/01-useState/CounterWithCustomHook.jsx  ----------
//  ------------------------------------------------------------------------------


import { useCounter } from "../hooks/useCounter";


export const CounterWithCustomHook = () => {

    const { counter, decrement, reset, increment } = useCounter();

    return (

        <div className="component__container box-shadow">
            
            <h1 className="component__title"> Counter With Custom Hook: {counter} - useCounter </h1>
            <hr />

            <button className="btn btn-primary" onClick={ () => decrement(2)} > -1 </button>
            <button className="btn btn-primary" onClick={reset} > Reset </button>
            <button className="btn btn-primary" onClick={ () => increment(3)} > +1 </button>
        </div>
    )
}
