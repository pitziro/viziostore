import React, {useState, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext'

function ItemDetail(props) {
    
    const [itemQ, setItemQ] = useState(1);       //cambia cada click del + o - 
    const [stockQ] = useState(props.Almacen);     //cambiara cuando se agrege al carrito, inicia con el JSON

    const cartAvailable =  ((isNaN(props.Almacen)) ? true : false )
    
    const {addCartItem} = useContext(CartContext)

    const handleMinusClick = () => {
        if (!isNaN(stockQ)) {
            setItemQ( (+itemQ-1<=1) ? 1 : +itemQ-1)
        }
    }
    const handlePlusClick = () => {
        if (!isNaN(stockQ)) {
            setItemQ( (+itemQ+1>= stockQ ) ? stockQ : +itemQ+1)
        }
    }

    return (
        <div className="item_table">
            <Table  variant="dark" hover>
                <tbody>
                    <tr>
                        <td>Fabricante : </td>
                        <td> {props.Fabricante}</td>
                    </tr>
                    <tr>
                        <td>Marca : </td>
                        <td> {props.Marca}</td>
                    </tr>
                    <tr>
                        <td>Modelo : </td>
                        <td> {props.Modelo}</td>
                    </tr>
                    <tr>
                        <td>PrecioMN : </td>
                        <td> {props.PrecioMN}</td>
                    </tr>
                    <tr>
                        <td> Stock actual : </td>
                        <td> {props.Almacen}</td>
                    </tr>

                </tbody>
            </Table>

            <span id="quantity">
                <Button variant="dark" size="sm" onClick={handleMinusClick}> _ </Button>
                <input type="number" placeholder={itemQ} value={itemQ} onChange={(e) => setItemQ (e.target.value) }/>
                <Button variant="dark" size="sm" onClick={handlePlusClick}> + </Button>
            </span>
            
            <Button variant="dark" size="sm" onClick={() => addCartItem(props.id, props.Modelo, itemQ)} disabled={cartAvailable}> 
                Agregar al carrito</Button>
            
            <div className="div_back"> 
                <Link to="/viziostore"> &lt; Regresar a la lista de productos </Link>
            </div>
            
        </div>
    )
}

export default ItemDetail
