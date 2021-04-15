import React, { useState } from 'react';
import Banner from './Banner';
import './Navbar.css';


function Navbar() {
    return (
    <div id="zona_top">
        
        {/* zona logo */}
        <section id="top_logo" >
            <a  class="logo__link" href="index.html">
                <img src="img/logo_transparente.png" title="VizioZone Home"/>
            </a>
        </section>

        
        <section id="top_libre" >
            {/* zona banner */}
            <div id="top_libre_flash">
                <Banner/>
            </div>
            
        
            {/* zona nav */}
            <nav id="top_libre_nav"> 
                <ul class="lista_simple mt-2">
                        <li class="lista_inline"><a href="/"> Youtube</a></li>
                        <li class="lista_inline"><a href="/"> Twitch</a></li>
                        <li class="lista_inline"><a href="/" target="_self"> VizioTeam</a></li>
                        <li class="lista_inline"><a href="/" target="_self"> Contacto </a></li>
                </ul>
            </nav>
        </section>
    </div>
    )
}

export default Navbar
