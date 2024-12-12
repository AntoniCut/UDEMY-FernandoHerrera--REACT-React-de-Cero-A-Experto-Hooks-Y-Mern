//  -----------------------------------------------------------------------
//  ----------  /05-hook-app/src/03-examples/LoadingMessage.jsx  ----------
//  -----------------------------------------------------------------------


import PropTypes from 'prop-types';


export const PokemonCard = ({ id, name, sprites = [] }) => {

    return (

        <section style={{ height: 200}}>

            <h2 className="text-capitalize"> #{id} - { name } </h2>

            <br/>
            
            <div>
                {
                    sprites.map( sprite => (
                        <img key={sprite} src={sprite} alt={name}/>
                    ))
                }
            </div>



        </section>




    )
}


// Validación de las props utilizando PropTypes
PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,  
    name: PropTypes.string.isRequired,
    sprites: PropTypes.array          
};
  
 export default PokemonCard;