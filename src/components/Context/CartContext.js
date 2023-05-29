import { useState, createContext } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, qty) => {

        const itemExists = cart.find(prod => prod.item.id === item.id);
        if (!itemExists) {
            setCart(prev => [...prev, { item, qty }]);
        } else {
            const newCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, qty: prod.qty + qty };
                } else {
                    return prod
                }
            });
            setCart(newCart)
        }
    }


    const delItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id);
        setCart(newCart);
    }

    const emptyCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, delItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )

}