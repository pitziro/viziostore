import React from 'react'
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


function ItemDetail(props) {

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

            <ItemCount stock={props.Almacen}/>
            

            
            <div className="div_back"> 
                <Link to="/"> &lt; Regresar a la lista de productos </Link>
            </div>
            
        </div>
    )
}

export default ItemDetail
