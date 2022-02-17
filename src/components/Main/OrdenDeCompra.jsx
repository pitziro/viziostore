import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Prompt } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getDataBase } from '../../firebase/index';
import './OrdenDeCompra.css';

const OrdenDeCompra = () => {

    const { cart, cleanCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState('')

    const [visibleForm, setvisibleForm] = useState('visible')
    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
        name: '',
        apepat: '',
        apemat: '',
        tipodoc: '',
        numdoc: '',
        email: '',
        celular: ''
    })


    const validaNumeroMovil = (argNumero) => {
        let regex_fono = /[0-9]/;
        if (argNumero.match(regex_fono)) { return true }
        else return false
    } 
    
    const validaLetra = (argLetra) => {
        let regex_alfab = /[A-Za-z\s]/;
        if (argLetra.match(regex_alfab)) {return true } 
        else return false 
    } 
    
    // Registra valores del formulario para la orden de compra //
    const handleInputs = (e) => {
        let idfield = e.target.id
        let valueField  = e.target.value

        if ( 
            ( ['name','apepat','apemat'].includes(idfield) && validaLetra(valueField)) || 
            ( ['celular','numdoc'].includes(idfield) && validaNumeroMovil(valueField)) || 
            ( ['email','tipodoc'].includes(idfield))
            )  
        {
            const newForm = { ...form, [idfield]: e.target.value}
            setForm(newForm)
            //console.log(form)
        }
        else {
            e.preventDefault() 
            console.log("el valor no es valido")
            e.target.value = ''
        }
    }


    //Valida todos los campos completos => Falso si todos llenos //
    const fieldsOk = [form.name, form.apepat, form.apemat, form.celular, form.email, form.numdoc, form.tipodoc].includes('');


    // actualizacion del stock en firestore //
    const updateStock = () => {

        try{
            cart.forEach((item) => {
                const itemUp = doc(getDataBase, 'productos', item.itemId)
                updateDoc(itemUp, { Almacen: parseInt(item.stock) - parseInt(item.quantity) })
            })
        }
        catch (e) {
            console.log('algo pasó: ',e)
        }

    }

    // cargo una nueva orden a firestore 
    //********************************** */
    const loadOrder = () => {

        const itemCollection = collection(getDataBase, 'ordenes')

        const newOrder = {
            buyer: form,
            items: cart,
            date: serverTimestamp()
        }

        const orderRegister = addDoc(itemCollection, newOrder)

        orderRegister
        .then( ({id}) => {
            setOrderId(id)
        })
        .catch (err => console.log(err))

    }

    function handleHideModal () {
        setTimeout(() => {
            setShowModal(false)
            window.open('/','_self')
        }, 1000);
    }

    // funcion para manejar toda la orden de compra // 
    // ******************************************** //
    const handleAddOrder = (evt) => {

        if (!fieldsOk && cart.length >= 1) {
            
            // -- registrar la orden -- //
            loadOrder()
        
            // actualizo Stock
            updateStock()

            // mostrar un modal, limpiar el carrito y salir //
            setvisibleForm('hidden') 
            
            setShowModal(true)
            cleanCart()
        }
        else{
            (cart.length === 0) 
            ? alert("El carrito esta vacio")
            : alert("Los campos no están llenos correctamente")
        }
    }

    return (
        <div>
            {
                <div className="form_" style={{visibility:visibleForm}}>
                    <Prompt
                        when={(!fieldsOk && cart.length >= 1)}
                        message="Todavia no has registrado tu orden!"
                    />

                    <h2> Genial! Ahora sólo completa tus datos </h2>

                    <form id="form_contacto" >
                        <table>
                            <tbody>
                                <tr>
                                    <td className="td_label">
                                        <label > Nombre </label>
                                    </td>
                                    <td className="border-top-0">
                                        <input type="text" id="name" onChange={(e) => handleInputs(e)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label> Apellido Paterno </label>
                                    </td>
                                    <td >
                                        <input type="text" id="apepat" onChange={(e) => handleInputs(e)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label > Apellido Materno </label>
                                    </td>
                                    <td>
                                        <input type="text" id="apemat" onChange={(e) => handleInputs(e)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label > Documento Identidad </label>
                                    </td>
                                    <td>
                                        <select id="tipodoc" onChange={(e) => handleInputs(e)}>
                                            <option defaultValue="none" hidden>  </option>
                                            <option value="DNI"> DNI </option>
                                            <option value="RUC"> RUC </option>
                                        </select>
                                        <input type="text" id="numdoc" placeholder="12345678" onChange={(e) => handleInputs(e)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label> Email </label>
                                    </td>
                                    <td >
                                        <input type="text" id="email" onChange={(e) => handleInputs(e)}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label> Número celular </label>
                                    </td>
                                    <td >
                                        <input type="text" id="celular" placeholder="999666333" onChange={(e) => handleInputs(e)} />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </form>
                    
                    
                    <div className="form_order">
                        <span className="comment"> * Todos los campos son obligatorios </span>
                        <h2>
                            <Button type="reset"variant="primary" onClick={(e) => handleAddOrder(e)}>Finalizar Orden</Button>
                        </h2>
                    </div>

                    
                    <Modal className='order_modal' show={showModal} onHide={handleHideModal} centered>
                        <Modal.Header>
                            <Modal.Title> Muchas gracias por tu compra! </Modal.Title>
                        </Modal.Header>
                        <Modal.Body> 
                            Este es tu código de orden autogenerado: 
                            <h3> {orderId} </h3>
                        </Modal.Body>
                        
                        <Modal.Footer>
                            <Link to="/"><Button variant="primary"> Regresar al home </Button></Link>
                        </Modal.Footer>
                    </Modal>

                
                </div>
            }
        </div>
    );
}

export default OrdenDeCompra;
