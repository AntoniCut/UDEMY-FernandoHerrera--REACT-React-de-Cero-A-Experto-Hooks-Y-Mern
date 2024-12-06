//  --------------------------------------------------------------
//  ----------  /05-hook-app/src/components/Header.jsx  ----------
//  --------------------------------------------------------------


import logoReact from "../assets/react.svg";


export const Headers = () => {

    return (

        <header className="header__container">

            <img src={logoReact} className="logo-react" alt="Logo de React" title="Logo de React" />
            <h1 className="header__title"> Hooks App </h1>
            <img src={logoReact} className="logo-react" alt="Logo de React" title="Logo de React" />

        </header>
    )
}
