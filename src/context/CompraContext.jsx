import {createContext} from 'react'

export const CompraContext = createContext([]) 

export const CompraProvider = ({children}) => {

    const configOrder = () => {
        alert("Holi")
    }

    return (
        <CompraContext.Provider value={{configOrder}}>
            {children}
        </CompraContext.Provider>
    )

}

