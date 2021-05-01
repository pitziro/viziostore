import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = (props) => {

    const [itemSelected, setItemSelected] = useState();

    
    const {id} = useParams();
    //const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch (`https://608a0c808c8043001757f9b1.mockapi.io/VizioStoreAPI/gpujson/${id}`)
            .then (response => {return response.json()})
            .then (data => {setItemSelected(data)})
        }, 1200);
    }, []);

    
    return (
        <div className="item_detail_container">
            {itemSelected ? 
                <ItemDetail
                    id={itemSelected.id}
                    Modelo={itemSelected.Modelo}
                    Fabricante={itemSelected.Fabricante}
                    Marca={itemSelected.Marca}
                    PrecioMN={itemSelected.PrecioMN}
                    Almacen={itemSelected.Almacen}
                />
                : (<p> Consultando por tu producto.... </p>)
            }
        </div>
    );
}

export default ItemDetailContainer;
