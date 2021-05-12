import React, {useState, useEffect, useContext} from 'react'
import ItemList from './ItemList';
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import {CartContext} from '../../context/CartContext'

function ItemContainer() {
    const [ListadoItems, setListaItems] = useState([])
    const [ListadoItemsFiltrado, setListaItemsF] = useState([])

    const {Category} = useContext(CartContext)
    const {pickCategory} = useContext(CartContext)

    useEffect( () => {
                fetch ('https://608a0c808c8043001757f9b1.mockapi.io/VizioStoreAPI/bdjson')
                .then (response => {return response.json()})
                .then (data => {setListaItems(data)})
            return() => (console.log("Clean Up ItemContainer"))
    }, []);

    useEffect( () => {
        Category
        ? setListaItemsF( ListadoItems.filter( (x) => (x.Categoria === Category)))
        : console.log("Sin Category value")
    }, [ListadoItems])


    useEffect( () => {
            console.log(`Categoria = ${Category}`)
            setListaItemsF( ListadoItems.filter( (x) => (x.Categoria === Category)))
    }, [Category]);
    

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
                        ListadoItemsFiltrado.map((i, index) => (
                        <ItemList
                            id={i.id}
                            key={index}
                            Modelo={i.Modelo}
                            PrecioMN={i.PrecioMN}
                            Categoria={i.Categoria}
                            Almacen={i.Almacen}
                        />
                    )))
                    :(<div className="categorybox2"> Selecciona una categoría de productos  </div>)
                )
            }
        </>
    )
}

export default ItemContainer
