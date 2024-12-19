//  -----------------------------------------------------------------------
//  ----------  /05-hook-app/src/03-examples/LoadingMessage.jsx  ----------
//  -----------------------------------------------------------------------



import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';


export const PokemonCard = ({ id, name, sprites = [] }) => {


    const h2Ref = useRef();
    const [boxSise, setBoxSize] = useState({ height: 0, width: 0})

    useLayoutEffect( () => {
        
        const { height, width } = h2Ref.current.getBoundingClientRect();
        setBoxSize({ height, width})
        console.log({height, width});

    }, [name]);


    return (

        <section ref={h2Ref}  style={{ height: 300, display: 'flex', flexDirection: 'column'}}>

            <h2  className="text-capitalize"> #{id} - { name } </h2>

            <br/>
            
            <div>
                {
                    sprites.map( sprite => (
                        <img key={sprite} src={sprite} alt={name}/>
                    ))
                }
            </div>

            <pre> { JSON.stringify(boxSise) } </pre>

        </section>
    )
}


// Validación de las props utilizando PropTypes
PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,  
    name: PropTypes.string.isRequired,
    sprites: PropTypes.array          
};
