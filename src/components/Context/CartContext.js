import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    qtyTotal: 0,
});




export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [qtyTotal, setQtyTotal] = useState(0);


    const addItem = (item, qty) => {

        const itemExists = cart.find(prod => prod.item.id === item.id);
        if (!itemExists) {
            setCart(prev => [...prev, { item, qty }]);
            setQtyTotal(prev => prev + qty);
            setTotal(prev => prev + (item.price * qty));
            console.log(cart)

        } else {
            const newCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, qty: prod.qty + qty };
                } else {
                    return prod;
                }
            });
            setCart(newCart);
            setQtyTotal(prev => prev + qty);
            setTotal(prev => prev + (item.price * qty));

        }
    }


    const delProduct = (id) => {
        const itemDeleted = cart.find(prod => prod.item.id === id);

        const newCart = cart.filter(prod => prod.item.id !== id);
        setCart(newCart);
        setQtyTotal(prev => prev - itemDeleted.qty);
        setTotal(prev => prev - (itemDeleted.item.price * itemDeleted.qty));

    }

    const emptyCart = () => {
        setCart([]);
        setTotal(0);
        setQtyTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, delProduct, emptyCart, qtyTotal, total }}>
            {children}
        </CartContext.Provider>
    )

}