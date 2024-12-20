//  -----------------------------------------------------------------------
//  ----------  /05-hook-app/src/05-useLayoutEffect/Layouts.jsx  ----------
//  -----------------------------------------------------------------------


import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useCounter } from "@/hooks/useCounter";
import { LoadingMessage } from "@/03-example/LoadingMessage";
import { PokemonCard } from "@/03-example/PokemonCard";



export const Layout = () => {
    

    useEffect( () => {
        document.title = 'Layout';
    }, []);
    
    
    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading, HasError } = useFetch( `https://pokeapi.co/api/v2/pokemon/${ counter }` );

    //  -----  Estado para almacenar los datos que se mostrarán  -----
    const [showData, setShowData] = useState(false); 

    //  -----  Función para manejar el clic y mostrar/ocultar los datos  -----
    const handleClick = () => {
        setShowData((prevState) => !prevState); // Alterna el estado entre true/false
    };

    
    return (
        
        <div className="component__container height__container-600 box-shadow">
            
            <h1 className="component__title"> Layout - useLayoutEffect </h1>
            <hr /> <br />
            
            <h2> Información de Pokemons </h2>
            <hr />


            { 
                isLoading 
                ? <LoadingMessage /> 
                : (
                    <PokemonCard 
                    	id={data.id} 
                    	name={data.name} 
                    	sprites={[
							data.sprites.front_default,
							data.sprites.front_shiny,
							data.sprites.back_default,
							data.sprites.back_shiny,
						]} 
                  	/> 
				)
            }
         
            { HasError && <p> Ocurrió un error al cargar los datos </p> }

            <button 
                className="btn btn-primary mt-4"
                onClick={ () => counter > 1 ? decrement() : null}
            > 
                Anteriores 
            </button>
            
            <button 
                className="btn btn-primary mt-4"
                onClick={ () => increment()}
            > 
                Siguientes 
            </button>


            {/* **********  Mostrar la Data  ********** */}
            <button 
                className="btn btn-info mt-4"
                onClick={handleClick}  // Actualiza el estado cuando el botón es clickeado
            > 
                {showData ? 'Ocultar Data' : 'Mostrar Data'}  {/* Alterna entre "Mostrar" y "Ocultar" */}
            </button>
            
            { showData && ( <pre className="pre__text"> { JSON.stringify(data, null, 2) } </pre> ) }

        </div>
    );
};
