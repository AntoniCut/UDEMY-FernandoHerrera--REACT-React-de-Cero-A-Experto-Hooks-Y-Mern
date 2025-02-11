//  ---------------------------------------------------------------
//  ----------  /05-hook-app/src/07-tarea-memo/Hijo.jsx  ----------
//  ---------------------------------------------------------------


import React from 'react'
import PropTypes from "prop-types";


export const Hijo =  React.memo( ({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})


Hijo.displayName = 'Hijo';


Hijo.propTypes = {
    numero: PropTypes.number.isRequired,
    incrementar: PropTypes.func.isRequired
}
