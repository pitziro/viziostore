import './Carrito.css'
import {Link} from 'react-router-dom'
import cart from '../../png/shoppingcart.png'

export const Carrito = (props) => {
    
    /*logica interna*/
    const handleClickUser = () => {
        alert(`Hola ${props.user.name}`)
    }
    
    return (
        <>
            <ul className="lista_simple">
                <li className ="lista_inline"> {props.navigationList[0]} </li>
                <li className ="lista_inline"> {props.navigationList[1]} </li>
                <li className ="lista_inline"> {props.navigationList[2]} </li>
                <li className ="lista_inline"> {props.navigationList[3]} </li>
            </ul>


            <div className='sec_user'>
                <span className='carrito'>
                    <Link to="/carritolist"> <img src={cart} alt='cart'/> </Link>
                    <p>{props.cartQuantity}</p>
                </span> 
                <span className='avatar'>
                    <img src={props.user.avatar} alt='User' onClick={handleClickUser}/> 
                </span>
                
            </div>
        </>
    )
}