//  -------------------------------------------------  
//  ----------  /05-hook-app/src/main.jsx  ----------  
//  -------------------------------------------------  


//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; 
import { HooksApp } from './HooksApp';
import './styles/index.css';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <HooksApp />
    </BrowserRouter>,
)
