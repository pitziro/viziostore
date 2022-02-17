import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [qTotalItems, setQTotalitems] = useState(0);
	const [totalImporte, setTotalImporte] = useState(0);
	const [Category, setCategory] = useState('');

	const addCartItem = (itemId, modelo, quantity, price, stock) => {
		let itemInCart = cart.find((el) => el.itemId === itemId);

		if (itemInCart) {
			//console.log("ya esta en el carrito")
			itemInCart.quantity += parseFloat(quantity);
			let filteredCart = cart.filter((x) => x.itemId !== itemId);
			setCart([...filteredCart, itemInCart]);
		} else {
			setCart([
				...cart,
				{
					itemId: itemId,
					producto: modelo,
					quantity: quantity,
					precio: price,
					stock: stock,
				},
			]);
		}
	};

	const removeCartItem = (itemId) => {
		const newCart = cart.filter((item) => item.itemId !== itemId);
		setCart(newCart);
	};

	const cleanCart = () => {
		setCart([]);
	};

	useEffect(() => {
		setQTotalitems(
			cart.length >= 1
				? cart.reduce((t, i) => (t = parseFloat(t) + parseFloat(i.quantity)), 0)
				: console.log('sin items')
		);

	setTotalImporte(
		cart.length >= 1
			? cart.reduce(
					(t, i) =>
						(t =
							parseFloat(t) + parseFloat(i.quantity) * parseFloat(i.precio)),
					0
				)
			: console.log('sin items')
	);

	}, [cart]);

	function pickCategory (e) {
		setCategory(e.target.value);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				qTotalItems,
				Category,
				totalImporte,
				addCartItem,
				removeCartItem,
				pickCategory,
				cleanCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
