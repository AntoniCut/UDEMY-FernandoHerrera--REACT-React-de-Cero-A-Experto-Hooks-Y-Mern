//  ******************************************************
//  **********  /01-apps-react-vite/  ********************
//  **********  /src/components/NavBarLink.jsx  **********
//  ******************************************************



import { Link, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';


const base = '/pruebas/hook-app';


export const NavBarLink = () => {

    const location = useLocation();

    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const toggleMenu = () => {

        if (isMenuOpen) menuRef.current.style.maxHeight = '0px'; // Cerrar el menú
        else menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`; // Abrir el menú

        setIsMenuOpen((prev) => !prev);
    };


    return (

        <nav className="navbarlink">

            <div className="navbartitle" onClick={toggleMenu}> Menú </div>

            <div
                ref={menuRef}
                className={`menu ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
                style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height 2s ease, opacity 0.5s ease' }}
            >
                {[
                    { path: `${base}/`, label: 'Home' },
                    { path: `${base}/counter-app`, label: 'Counter App' },
                    { path: `${base}/counter-with-custom-hook`, label: 'Counter With Custom Hook' },
                    { path: `${base}/simple-form`, label: 'Simple Form' },
                    { path: `${base}/form-with-custom-hook`, label: 'Form With Custom Hook' },
                    { path: `${base}/multiple-custom-hooks`, label: 'Multiple Custom Hooks' },
                    { path: `${base}/focus-screen`, label: 'Focus Screen' },
                    { path: `${base}/layout`, label: 'Layout' },
                    { path: `${base}/memorize`, label: 'Memorize' },
                    { path: `${base}/memohook`, label: 'Memo Hook' },
                    { path: `${base}/callbackhook`, label: 'CallBack Hook' },
                    { path: `${base}/tarea-memo`, label: 'Tarea Memo' },
                    

                ].map(({ path, label }) => (

                    <Link
                        key={path}
                        to={path}
                        className={activeLink === path ? 'active-link' : ''}
                        onClick={() => handleLinkClick(path)}
                    >
                        {label}
                    </Link>

                ))}

            </div>

        </nav>
    );
};
