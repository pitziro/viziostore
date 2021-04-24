import React, { useState } from 'react';
import Banner from './Banner';
import { Carrito } from './Carrito';

import './Navbar.css';


function Navbar() {

    /*logica interna*/
    const USER = {
        name : 'Manuel Sarmiento',
        avatar : 'https://images.unsplash.com/photo-1618762869108-155c69284f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
    }

    const CART = 2

    const [nav_list, setNavList] = useState (['Youtube',
    'Twitch',
    'VizioTeam',
    'Contacto'])

    return (
    <div id="zona_top">
        
        {/* zona logo */}
        <section id="top_logo" >
            <a  className="logo__link" href="index.html">
                <img src="img/logo_transparente.png" title="VizioZone Home" alt='Home'/>
            </a>
        </section>
        
        <section id="top_libre" >
            <div id="top_libre_flash">
                <Banner/>
            </div>
            
            <div id="top_libre_nav"> 
                <Carrito 
                    user={USER} 
                    cartQuantity={CART} 
                    navigationList={nav_list}
                />
            </div>
        </section>
    </div>
    )
}

export default Navbar
