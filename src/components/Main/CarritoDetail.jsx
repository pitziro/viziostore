import removeItem from '../../png/remove_cart2.png'
import React, {useContext} from 'react'
import {Table, Button} from 'react-bootstrap'
import {CartContext} from '../../context/CartContext'


function CarritoDetail() {

    const {cart, removeCartItem, cleanCart} = useContext(CartContext)
    

    return (
        <div className="contenidos item_table">
            
            {   (cart.length ===0 ) 
                ? <p> No tienes items en tu carrito </p>
                :
                
                /* IMPRIME VISTA DEL CARRITO */
                <>
                <Table variant="dark" hover>
                    <thead>
                        <tr> 
                            <td style={{textAlign: "center"}}> Item </td> 
                            <td style={{textAlign: "center"}}> Producto </td> 
                            <td style={{textAlign: "center"}}> Cantidad </td> 
                            <td style={{textAlign: "center"}}> P. Unitario </td> 
                            <td style={{textAlign: "center"}}> P. Total </td> 
                            <td style={{textAlign: "center"}}> Remover </td> 
                        </tr>
                    </thead>
                    <tbody>
                    {
                    cart.map((i, index) => (
                        <tr key={index}>
                            <td style={{textAlign: "center"}}> {index+1} </td>
                            <td> {i.producto} </td>
                            <td style={{textAlign: "center"}}> {i.quantity} </td>
                            <td style={{textAlign: "center"}}> {i.precio} </td>
                            <td style={{textAlign: "center"}}> {(parseFloat(i.precio)*parseFloat(i.quantity)).toFixed(1)} </td>
                            <td style={{textAlign: "center"}}>  <img className="icon_remove" src={removeItem} alt='Remove item' onClick={() => removeCartItem(i.itemId)}/>  </td>
                        </tr>
                        
                    ))
                    }
                    </tbody>
                </Table>
                
                <div className="categorybox2">
                    <Button variant="danger" onClick={() => cleanCart()}> Limpiar Carrito </Button>
                    <Button > Confirmar Compra  </Button>
                </div>
                </>
            }


        </div>
    )
}

export default CarritoDetail
