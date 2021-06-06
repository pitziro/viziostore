import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {getFireStore} from '../../firebase/index'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [itemSelected, setItemSelected] = useState();

    const {id} = useParams();

    /*
    useEffect(() => {
        setTimeout(() => {
            fetch (`https://608a0c808c8043001757f9b1.mockapi.io/VizioStoreAPI/bdjson/${id}`)
            .then (response => {return response.json()})
            .then (data => {setItemSelected(data)})
        }, 250);
        return() => console.log("cleanup carga detalle item")
    }, []);
    */

    useEffect( () => {
        const db = getFireStore()
        const collectionQuery = db.collection('productos').doc(`${id}`)

        collectionQuery
        .get()
        .then (
            (querySnapshot) => {
                const data = querySnapshot.data()
                setItemSelected(data)
            }) 
        .catch( (err) => console.log("Firestore error:", err) )
    }, [])

    return (
        <div className="item_detail_container">
            {itemSelected ? 
                <ItemDetail
                    id={id}
                    Modelo={itemSelected.Modelo}
                    Categoria={itemSelected.Categoria}
                    Fabricante={itemSelected.Fabricante}
                    Marca={itemSelected.Marca}
                    PrecioMN={itemSelected.PrecioMN}
                    Almacen={itemSelected.Almacen}
                    urlFuente={itemSelected.urlFuente}
                />
                : (<p> Consultando por tu producto.... </p>)
            }
        </div>
    );
}

export default ItemDetailContainer;
