import React from 'react';
import './Leftbar.css';


function Leftbar() {
    return (
            <nav id="main_left">
            <div className="menu_uno pt-1" > PC Master Race </div>
            <div className="menu_uno "> <a href="ensambles.html"> Ensambles </a></div>
            <div className="menu_uno "> <a href="videojuegos.html"> Consolas & Juegos </a></div>
            <div className="menu_uno "> <a href="cotizar.html"> Cotizaciones </a></div>
        </nav>
    )
}

export default Leftbar
