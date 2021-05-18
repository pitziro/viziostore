import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ItemList(props) {
    return (
        <Card bg='dark' className='Tarjeta' >
            <Card.Body>
                <Card.Title>
                    <Link to={`/detalle/${props.id}`}> {props.Modelo} </Link>
                </Card.Title>
                <Card.Subtitle>
                    {props.PrecioMN} {}
                </Card.Subtitle>
            </Card.Body>

            <Card.Footer>
                Stock disponible: {props.Almacen}
            </Card.Footer>
            
        </Card> 
    )
}

export default ItemList
