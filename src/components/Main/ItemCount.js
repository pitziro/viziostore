import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = (props) => {

    const [itemQ, setItemQ] = useState(1);             //cambia cada click del + o - 

    const [stockQ, setStockQ] = useState(props.stock); //cambiara cuando se agrege al carrito, inicia con el JSON

    const handleMinusClick = () => {
        if (!isNaN(stockQ)) {
            setItemQ( (+itemQ-1<=1) ? 1 : +itemQ-1)
        }
        console.log(`Un item menos -> ${itemQ}`)
    }
    const handlePlusClick = () => {
        console.log(`Un item más (antes) -> ${itemQ}`)
        if (!isNaN(stockQ)) {
            setItemQ( (+itemQ+1>= stockQ ) ? stockQ : +itemQ+1)
        }
    }

    const handleClickCart = () => {
        console.log('Agregué al carrito')
        //setStockQ( setStockQ-itemQ)
    }

    const cartAvailable =  ((isNaN(props.stock)) ? true : false )

    //console.log(`Un item ahora -> ${itemQ}`)

    return (
        <>
        <span id="quantity">
            <Button variant="dark" size="sm" onClick={handleMinusClick}> _ </Button>
            <input type="number" placeholder={itemQ} value={itemQ} onChange={(e) => setItemQ (e.target.value) }/>
            <Button variant="dark" size="sm" onClick={handlePlusClick}> + </Button>
        </span>
        <Button variant="dark" size="sm" onClick={handleClickCart} disabled={cartAvailable}> Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;
