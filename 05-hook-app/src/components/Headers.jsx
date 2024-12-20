//  --------------------------------------------------------------
//  ----------  /05-hook-app/src/components/Header.jsx  ----------
//  --------------------------------------------------------------


import logoVite from "../../public/vite.svg";
import logoReact from "../assets/react.svg";
import { NavBarLink } from "@/components/NavBarLink";


export const Headers = () => {

    return (

        <header className="header__container box-shadow">

            <img src={logoVite} className="logo-vite" alt="Logo de Vite" title="Logo de Vite" />
            <NavBarLink />
            <h1 className="header__title"> Hooks App </h1>
            <img src={logoReact} className="logo-react" alt="Logo de React" title="Logo de React" />

        </header>
    )
}
