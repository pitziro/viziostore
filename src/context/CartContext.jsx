import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext([]) 

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [qTotalItems, setQTotalitems] = useState(0);
    const [Category, setCategory] = useState("")

    const addCartItem = (itemId, modelo, quantity, price) => {
        
        let itemInCart = cart.find(el => el.itemId === itemId)

        if (itemInCart) {
            console.log("ya esta en el carrito")
            itemInCart.quantity +=  parseFloat(quantity )
            let filteredCart = cart.filter( x => x.itemId !== itemId )
            setCart([...filteredCart,itemInCart])
        }
        else {
            setCart([...cart, {"itemId": itemId, "producto":modelo, "quantity":quantity, "precio":price}])
        }
    }

    const removeCartItem = (itemId) => {
        const newCart = cart.filter((item) => item.itemId !== itemId)
        setCart(newCart)
        console.log("lo elimine.")
        console.log(cart)
    }

    const cleanCart = () => {
        setCart([])
    }
    
    useEffect(() => {
        console.log(qTotalItems)
        setQTotalitems
        ( cart.length >=1 
        ? cart.reduce( (t,i) => (t = parseFloat(t)+ parseFloat(i.quantity)), 0)
        : console.log("sin items")
        )
        console.log("cambio items")
    }, [cart]);

    
    const pickCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <CartContext.Provider value={{cart, qTotalItems, Category, addCartItem, removeCartItem, cleanCart, pickCategory }}>
            {children}
        </CartContext.Provider>
    )

}

