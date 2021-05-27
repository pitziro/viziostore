import React, {useState, useEffect, useContext} from 'react';
import {createContext} from 'react'


export const OrderContext = createContext([]) 

export const OrderProvider = ({children}) => {

    const [form, setForm] = useState({
        name: '',
        apepat: '',
        apemat: '',
        tipodoc: '',
        numdoc: '',
        email: '',
        celular: ''
    })


    
    const [orderIsDone, setOrderIsDone] =useState()

    const handleAddOrder = (fo) => {
        
        setOrderIsDone(true)
        console.log(fo)

    }

    return (
        <OrderContext.Provider value={{form, setForm, handleAddOrder, orderIsDone}}>
            {children}
        </OrderContext.Provider>
    )

}

