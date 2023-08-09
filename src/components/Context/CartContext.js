import { useState, createContext } from "react";
import Swal from "sweetalert2";

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
            setTotal(prev => prev + (item.newTotal * qty));

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
            setTotal(prev => prev + (item.newTotal * qty));

        }
    }


    const delProduct = (id) => {

   

        const itemDeleted = cart.find(prod => prod.item.id === id);
        const newCart = cart.filter(prod => prod.item.id !== id);

        Swal.fire({
            title: 'Estas seguro de eliminar este producto del carrito?',
            icon:'error',
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `Eliminar producto`,

          }).then((result) => {
            if (result.isDenied) {
              Swal.fire('Producto eliminado del carrito!', '', 'success');
              setCart(newCart);
              setQtyTotal(prev => prev - itemDeleted.qty);
              setTotal(prev => prev - (itemDeleted.item.newTotal * itemDeleted.qty));

            } else if (result.is) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })

 

    }

    const emptyCart = () => {


        Swal.fire({
            title: 'Estas seguro de vaciar el carrito?',
            icon:'error',
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `Vaciar Carrito`,

          }).then((result) => {
            if (result.isDenied) {
              Swal.fire('Productos eliminados del carrito!', '', 'success');
          
        setCart([]);
        setTotal(0);
        setQtyTotal(0);

            } else if (result.is) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })


    }

    return (
        <CartContext.Provider value={{ cart, addItem, delProduct, emptyCart, qtyTotal, total }}>
            {children}
        </CartContext.Provider>
    )

}