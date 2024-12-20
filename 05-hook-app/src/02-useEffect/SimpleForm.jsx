//  --------------------------------------------------------------------
//  ----------  /05-hook-app/src/02-useEffect/SimpleForm.jsx  ----------
//  --------------------------------------------------------------------


import { useState, useEffect } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {


    useEffect( () => {
        document.title = 'Simple Form';
    }, []);


    const [formState, setformState] = useState({
        username: 'strider',
        email: 'antonicut@gmail.com'
    });


    useEffect(() => console.log('*****  Component SimpleForm  ***** - useEffect called!!!'), []);
    useEffect(() => console.log('*****  Component SimpleForm  ***** - formState changed!!!'), [formState]);


    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setformState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => console.log('*****  Component SimpleForm  ***** - email changed!!!'), [email]);

    return (

        <div className="component__container height__container-600 box-shadow">

            <h1 className="component__title"> Formulario Simple - useEffect </h1>
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

            {
                username === 'strider2' && <Message />
            }

        </div>
    )
}


