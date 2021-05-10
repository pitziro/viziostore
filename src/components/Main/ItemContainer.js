import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap'

function ItemContainer() {
    const [ListadoItems, setListaItems] = useState([])
    const [ListadoItemsFiltrado, setListaItemsF] = useState([])
    const [Category, setCategory] = useState()

    const handleCategory = (e) => { 
        setListaItemsF( ListadoItems.filter( (ListadoItems) => (ListadoItems.Categoria === e.target.value)))
        setCategory(e.target.value)
    }

    useEffect( () => {
            fetch ('https://608a0c808c8043001757f9b1.mockapi.io/VizioStoreAPI/bdjson')
            .then (response => {return response.json()})
            .then (data => {setListaItems(data)})
            return() => console.log("cleanup")
    }, []);

    return (
        <>
            <div className="categorybox">
                <ToggleButtonGroup type="radio" name="options" >
                    <ToggleButton className='btn_cat' onClick={handleCategory} value='CPU' variant='info'> Procesadores </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={handleCategory} value='MOBO' variant='info'>  Motherboards </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={handleCategory} value='gpu' variant='info'> Tarjetas de Video </ToggleButton>
                    <ToggleButton className='btn_cat' onClick={handleCategory} value='RAM' variant='info'>  Memorias RAM </ToggleButton>
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
