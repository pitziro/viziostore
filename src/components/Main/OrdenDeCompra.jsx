import React, {useState, useContext } from 'react';
import firebase from 'firebase'
import { Prompt } from 'react-router'
import { Link } from 'react-router-dom';
import { getFireStore } from '../../firebase/index'
import { CartContext } from '../../context/CartContext';
import { Button, Modal } from 'react-bootstrap'
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

    // Registra valores del formulario para la orden de compra //
    const handleInputs = (id, value) => {
        const newForm = { ...form, [id]: value }
        setForm(newForm)
    }


    //Valida todos los campos completos => Falso si todos llenos //
    const fieldsOk = [form.name, form.apepat, form.apemat, form.celular, form.email, form.numdoc, form.tipodoc].includes('');


    // actualizacion del stock en firestore //
    const updateStock = () => {
        const db = getFireStore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemRef = db.collection('productos').doc(item.itemId)
            batch.update(itemRef, { Almacen: parseInt(item.stock) - parseInt(item.quantity) })
        })

        batch.commit()
            .then((r) => console.log(r)) // siempre me sale undefined,
    }

    // cargo una orden a firestore 
    const loadOrder = () => {
        const db =  getFireStore()
        const orders = db.collection("ordenes") 

        const newOrder = {
            buyer: form,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        orders.add(newOrder).then( ({id}) => {
            setOrderId(id)
        })
        .catch (err => console.log(err))

    }

    const handleHideModal= () => {
        setTimeout(() => {
            setShowModal(false)
            window.open('/','_self')
        }, 2000);
    }

    const handleAddOrder = (f) => {

        if (!fieldsOk && cart.length >= 1) {
            // actualizo Stock
            updateStock()
            
            // -- registrar la orden -- //
            loadOrder()
        
            // mostrar un modal, limpiar el carrito y salir //
            setvisibleForm('hidden') 
            setShowModal(true)
            cleanCart()
        }
        else{
            alert("Los campos aún no estan completos")
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

                    <h2> Genial! Ahora solo completa tus datos </h2>

                    <form id="form_contacto" >
                        <table>
                            <tbody>
                                <tr>
                                    <td className="td_label">
                                        <label > Nombre </label>
                                    </td>
                                    <td className="border-top-0">
                                        <input type="text" id="name" onChange={({ target }) => handleInputs(target.id, target.value)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label> Apellido Paterno </label>
                                    </td>
                                    <td >
                                        <input type="text" id="apepat" onChange={({ target }) => handleInputs(target.id, target.value)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label > Apellido Materno </label>
                                    </td>
                                    <td>
                                        <input type="text" id="apemat" onChange={({ target }) => handleInputs(target.id, target.value)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label > Documento Identidad </label>
                                    </td>
                                    <td>
                                        <select id="tipodoc" onChange={({ target }) => handleInputs(target.id, target.value)}>
                                            <option defaultValue="none" hidden>  </option>
                                            <option value="DNI"> DNI </option>
                                            <option value="RUC"> RUC </option>
                                        </select>
                                        <input type="text" id="numdoc" onChange={({ target }) => handleInputs(target.id, target.value)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label> Email </label>
                                    </td>
                                    <td >
                                        <input type="text" id="email" onChange={({ target }) => handleInputs(target.id, target.value)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="td_label" >
                                        <label> Número celular </label>
                                    </td>
                                    <td >
                                        <input type="text" id="celular" onChange={({ target }) => handleInputs(target.id, target.value)} />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </form>

                    <div>
                        <h2>
                            <Button type="reset"variant="primary" onClick={() => handleAddOrder(form)}>Finalizar Orden</Button>
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
