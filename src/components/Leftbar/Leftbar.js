import React from 'react';
import './Leftbar.css';
import { Link } from 'react-router-dom';


function Leftbar() {
    return (
            <nav id="main_left">
            <div className="menu_uno pt-1" > PC Master Race </div>
            <div className="menu_uno "> Ensambles </div>
            <div className="menu_uno "> Consolas & Juegos </div>
            <div className="menu_uno "> <Link to="/tienda"> VizioStore </Link></div>
        </nav>
    )
}

export default Leftbar
