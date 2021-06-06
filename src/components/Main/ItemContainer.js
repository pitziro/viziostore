import React, {useState, useEffect, useContext} from 'react'
import ItemList from './ItemList'
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import {CartContext} from '../../context/CartContext'
import {getFireStore} from '../../firebase/index'



function ItemContainer() {
    const [ListadoItems, setListaItems] = useState([])
    const [ListadoItemsFiltrado, setListaItemsF] = useState([])

    const {Category} = useContext(CartContext)
    const {pickCategory} = useContext(CartContext)

    // al cargar levanta la base de datos 
    useEffect( () => {
        const db = getFireStore()
        const collection = db.collection('productos')
        collection.get()
        .then (
            (querySnapshot) => {
                setListaItems(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}) ))
            }) 
        .catch( (err) => console.log("Firestore error:", err) ) 
    }, []);


    // cada que cambio el lsitado de items, voy a setear mi categoria como parametro
    useEffect( () => {
        Category
        ? setListaItemsF( ListadoItems.filter( (x) => (x.Categoria === Category)))
        : console.log("Sin Category value")
    }, [Category, ListadoItems])
    


    // cada de cambia la categoria, filtro los productos acorde 
    useEffect( () => {
            console.log(`Categoria = ${Category}`)
            setListaItemsF( ListadoItems.filter( (x) => (x.Categoria === Category)))
    }, [Category, ListadoItems]);
    

    return (
        <>
            <div className="categorybox">
                <ToggleButtonGroup type="radio" name="options" >
                    <ToggleButton className='btn_cat' onClick={(e) => pickCategory(e)} value='CPU' variant='info'> Procesadores </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={(e) => pickCategory(e)} value='MOBO' variant='info'>  Motherboards </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={(e) => pickCategory(e)} value='gpu' variant='info'> Tarjetas de Video </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={(e) => pickCategory(e)} value='RAM' variant='info'>  Memorias RAM </ToggleButton>
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
