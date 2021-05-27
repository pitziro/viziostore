import React, {useEffect, useState, useContext} from 'react';
import { getFireStore} from '../../firebase/index'
import { Button } from 'react-bootstrap'
import { Prompt } from 'react-router'
import { CartContext } from '../../context/CartContext';
import './OrdenDeCompra.css';

const OrdenDeCompra = () => {

    const {cart} = useContext(CartContext);
    
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
        const newForm = {...form, [id]: value}
        setForm(newForm)
    }
    

    //Valida todos los campos completos => Falso si todos llenos //
    const fieldsOk = [form.name, form.apepat, form.apemat, form.celular, form.email, form.numdoc, form.tipodoc].includes('');
    
    
    // actualizacion del stock en firestore //
    const updateStock = () => {
        const db = getFireStore()
        const batch = db.batch()

        cart.forEach( (item) => {
            const itemRef = db.collection('productos').doc(item.itemId)
            batch.update(itemRef, {Almacen: parseInt(item.stock) - parseInt(item.quantity) })
        })

        batch.commit()
        .then ( (r) => console.log(r)) // siempre me sale undefined,
    }

    
    const handleAddOrder = (f) => {
        console.log(f)
        updateStock()
        console.log('actualicé stock')

        // registrar la orden 

        // mostrar un modal y salir 
    }

    return ( 
        <div>
        {
        <>   
        <Prompt
            when={ (!fieldsOk && cart.length >= 1)}
            message="Todavia no has registrado tu orden!"
        />
        
        <h2> Genial! Ahora solo completa tus datos </h2>
        
        <form id="form_contacto">
            <table>
            <tbody>
                <tr>
                    <td className="td_label">
                        <label > Nombre </label> 
                    </td>
                    <td className="border-top-0">
                        <input type="text"  id="name" onChange={({target}) => handleInputs(target.id, target.value)}/>
                    </td>
                </tr>

                <tr>
                    <td className="td_label" >
                        <label> Apellido Paterno </label> 
                    </td>
                    <td >
                        <input type="text" id="apepat" onChange={({target}) => handleInputs(target.id, target.value)}/>
                    </td>
                </tr>

                <tr>
                    <td className="td_label" >
                        <label > Apellido Materno </label>  
                    </td>
                    <td>
                        <input type="text" id="apemat" onChange={({target}) => handleInputs(target.id, target.value)}/>
                    </td>
                </tr>

                <tr>
                    <td className="td_label" >
                        <label > Documento Identidad </label>  
                    </td>
                    <td>
                        <select  id="tipodoc" onChange={({target}) => handleInputs(target.id, target.value)}>
                            <option defaultValue="none" hidden>  </option>
                            <option value="DNI"> DNI </option>
                            <option value="RUC"> RUC </option>
                        </select>
                        <input type="text" id="numdoc" onChange={({target}) => handleInputs(target.id, target.value)}/>
                    </td>
                </tr>

                <tr>
                    <td className="td_label" >
                        <label> Email </label>
                    </td>
                    <td >
                        <input type="text" id="email" onChange={({target}) => handleInputs(target.id, target.value)}/> 
                    </td>
                </tr>

                <tr>
                    <td  className="td_label" >
                        <label> Número celular </label>
                    </td>
                    <td >
                        <input type="text" id="celular" onChange={({target}) => handleInputs(target.id, target.value)}/> 
                    </td>
                </tr>
            
            </tbody>
            </table>
        </form>
    
        <div>
            <h2> 
            <Button variant="primary" onClick={() => handleAddOrder(form)}>Finalizar Orden</Button>
            </h2>
        </div>
        </>
        }
        </div>
    );
}

export default OrdenDeCompra;
