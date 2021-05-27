import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {CartProvider} from './context/CartContext'
import {OrderProvider} from './context/CompraContext'
import './index.css';



ReactDOM.render(

    <CartProvider>
        <OrderProvider>
            <App />
        </OrderProvider>
    </CartProvider>
    ,
    document.getElementById('root')
);
