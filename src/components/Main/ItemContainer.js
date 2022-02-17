import { collection, getDocs } from "firebase/firestore"
import React, { useContext, useEffect, useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { getDataBase } from '../../firebase/index'
import ItemList from './ItemList'



function ItemContainer() {
    const [ListadoItems, setListaItems] = useState([])
    const [ListadoItemsFiltrado, setListaItemsF] = useState([])

    const {Category} = useContext(CartContext)
    const {pickCategory} = useContext(CartContext)

    // al cargar levanta la base de datos 
    useEffect( () => {
        const itemCollection = collection(getDataBase, 'productos')
        const itemSnapshot = getDocs(itemCollection)
        itemSnapshot
        .then (
            (querySnapshot) => {
                setListaItems(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}) ))
            }) 
        .catch( (err) => console.log("Firestore error:", err) ) 
    }, []);


    // cada que cambio el lsitado de items, voy a setear mi categoria como parametro
    useEffect( () => {
        setListaItemsF( ListadoItems.filter( (x) => (x.Categoria === Category)))
    }, [Category, ListadoItems])
    
    return (
        <>
            <div className="categorybox">
                <ToggleButtonGroup type="radio" name="options" >
                    <ToggleButton className='btn_cat' onClick={pickCategory} value='CPU' variant='info'> Procesadores </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={pickCategory} value='MOBO' variant='info'>  Motherboards </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={pickCategory} value='gpu' variant='info'> Tarjetas de Video </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={pickCategory} value='RAM' variant='info'>  Memorias RAM </ToggleButton>
                </ToggleButtonGroup>
            </div>

            { 
                ( Category ? 
                    (   
                        ListadoItemsFiltrado ? 
                        (
                        ListadoItemsFiltrado.map((i, index) => (
                        <ItemList
                            id={i.id}
                            key={index}
                            urlFuente={i.urlFuente}
                            Modelo={i.Modelo}
                            PrecioMN={i.PrecioMN}
                            Categoria={i.Categoria}
                            Almacen={i.Almacen}
                        /> ))
                        )
                        : (<div className="categorybox2"> No hay productos para listar. </div>)
                    )
                    :(<div className="categorybox2"> Selecciona una categoría de productos  </div>)
                )
            }
        </>
    )
}

export default ItemContainer