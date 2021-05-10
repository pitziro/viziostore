import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext([]) 

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [qTotalItems, setQTotalitems] = useState(0);

    const addCartItem = (itemId, modelo, quantity) => {
        setCart([...cart, {"itemId": itemId, "producto":modelo, "quantity":quantity}])
        console.log("agrege al carrito")
        console.log(cart)
    }

    useEffect(() => {
        console.log(qTotalItems)
        setQTotalitems
        ( cart.length >=1 
        ? cart.reduce( (t,i) => (t=t+ parseFloat(i.quantity)), 0)
        : console.log("sin items")
        )
        console.log("cambio items")
    }, [cart]);

    const removeCartItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId)
        setCart(newCart)
    }


    return (
        <CartContext.Provider value={{cart, addCartItem, removeCartItem, qTotalItems}}>
            {children}
        </CartContext.Provider>
    )

}

