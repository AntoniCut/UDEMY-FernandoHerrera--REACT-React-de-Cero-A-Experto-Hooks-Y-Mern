//  -------------------------------------------------------------------
//  ----------  /05-hook-app/src/06-memos/ShowIncrement.jsx  ----------
//  -------------------------------------------------------------------


import React from 'react';
import PropTypes from 'prop-types';


export const ShowIncrement = React.memo(({ increment }) => {


    console.log('Me volvi a generar :(');

    return (

        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        >
            Incrementar
        </button>

    )
})


ShowIncrement.displayName = 'ShowIncrement';

ShowIncrement.propTypes = {
    increment: PropTypes.func
}