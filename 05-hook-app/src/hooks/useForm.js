//  ---------------------------------------------------------
//  ----------  /05-hook-app/src/hooks/useForm.js  ----------
//  ---------------------------------------------------------


import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);


    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setformState({
            ...formState,
            [name]: value
        })
    }


    return {

        ...formState,
        formState,
        onInputChange

    }
}
