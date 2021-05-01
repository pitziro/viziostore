import React, { useState, useEffect } from 'react'
import './Mainsec.css';
import ItemList from './ItemList'


function Mainsec() {

    const [ListaGPU, setListaGPU] = useState([])
    
    useEffect( () => {
        setTimeout(() => {
            fetch ('https://608a0c808c8043001757f9b1.mockapi.io/VizioStoreAPI/gpujson')
            .then (response => {return response.json()})
            .then (data => {setListaGPU(data)})
        }, 1000);
    }, []);
    
    return (
        <div className='item_container'>
            { 
                ( ListaGPU ? 
                    (ListaGPU.map((i, index) => (
                        <ItemList
                            id={i.id}
                            key={index}
                            Modelo={i.Modelo}
                            PrecioMN={i.PrecioMN}
                            Almacen={i.Almacen}
                        />
                    )))
                    :(<p> Consultando la BD.... </p>)
                )
            }
        </div>
    )
}

export default Mainsec
