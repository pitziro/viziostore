import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ItemList(props) {
    return (
        <Card bg='dark' className='Tarjeta' >
            <Card.Img variant="top" src={props.urlFuente} height="260px" width="100px" />
            <Card.Body>
                <Card.Title>
                    <Link to={`/detalle/${props.id}`}> {props.Modelo} </Link>
                </Card.Title>
                <Card.Subtitle>
                    {props.PrecioMN}
                </Card.Subtitle>
            </Card.Body>

            <Card.Footer>
                Stock disponible: {props.Almacen}
            </Card.Footer>
            
        </Card> 
    )
}

export default ItemList
