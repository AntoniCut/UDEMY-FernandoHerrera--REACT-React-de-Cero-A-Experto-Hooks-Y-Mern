//  ----------------------------------------------------------------------------
//  ----------  /05-hook-app/src/02-useEffect/FormWithCustomHook.jsx  ----------
//  ----------------------------------------------------------------------------


import { useEffect } from "react";
import { useForm } from "@/hooks/useForm";


export const FormWithCustomHook = () => {


    useEffect( () => {
            document.title = 'Form With Custom Hook';
        }, []);
    
    const { onInputChange, onResetForm , username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const { username, email, password} = formState


    return (

        <div className="component__container height__container-600 box-shadow">

            <h1 className="component__title"> FormWithCustomHook - useForm </h1>
            <hr /> <br />

            <input
                type="text"
                className="form-control"
                placeholder="Username ..."
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-5"
                placeholder="antonicut@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-5"
                placeholder="password ..."
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button 
                className="btn btn-warning mt-5"
                value={''}
                onClick={onResetForm}
            > 
                Reset 
            </button>

        </div>
    )
}
