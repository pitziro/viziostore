import React, {useContext} from 'react';
import {CompraContext} from '../../context/CompraContext';
import {Form, Col, Button} from 'react-bootstrap';
import './OrdenDeCompra.css';

const OrdenDeCompra = () => {

    const {configOrder} = useContext(CompraContext);
    
    return ( 
        <div>
        {
        <>   
            <h2> Genial! Ahora solo completa tus datos </h2>
            
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label> Nombre Completo </Form.Label>
                        <Form.Control type="text" placeholder="Speedy Gonzales" />
                    </Form.Group>

                    <Form.Group as={Col} id="formEmail">
                        <Form.Label> Correo </Form.Label>
                        <Form.Control type="email" placeholder="speed.g@gmail.com" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} id="formTipoDoc">
                        <Form.Label> Tipo Documento </Form.Label>
                        <Form.Control as="select" >
                            <option> DNI</option>
                            <option> RUC </option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formNumDoc">
                        <Form.Label>  Documento </Form.Label>
                        <Form.Control type="text" placeholder="44556677" />
                    </Form.Group>
                </Form.Row>


                <Form.Group controlId="formTelefono">
                    <Form.Label> Telefono de Contacto </Form.Label>
                    <Form.Control placeholder="+51 999666333" />
                </Form.Group>

                <Form.Group controlId="formDireccion">
                    <Form.Label> Direccion de entrega </Form.Label>
                    <Form.Control placeholder="Ej. Av. Javier Prado 1500 Dpto 1896 " />
                </Form.Group>

            </Form>
        
            
            <Button variant="primary" onClick={() => configOrder()}>
                Finalizar Orden
            </Button>
            

            <div>
                <h2> </h2>
            </div>
        </>
        }
        </div>
    );
}

export default OrdenDeCompra;
