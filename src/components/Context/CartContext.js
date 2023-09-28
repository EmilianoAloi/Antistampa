import { useState, createContext, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({
  cart: [],
  total: 0,
  qtyTotal: 0,

});

const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
const qtyLS = cartLS.reduce((total, item) => total + item.qty, 0);

export const CartProvider = ({ children }) => {


  const [cart, setCart] = useState(cartLS);
  const [qtyTotal, setQtyTotal] = useState(qtyLS);
  const [total, setTotal] = useState(0);
  const [precioFinal, setPreciofinal] = useState(0);
  const [shippingOption, setShippingOption] = useState('delivery');
  const [shippingPrice, setShippingPrice] = useState(0);

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [tel, setTel] = useState('');
  const [dir, setDir] = useState('');
  const [cp, setCp] = useState('');

  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [orderId, setOrderId] = useState();


  console.log(cart)
  console.log(qtyTotal)
  console.log(total)


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  useEffect(() => {
    // Calcula el total basado en el contenido actual del carrito
    const newTotal = cart.reduce((acc, product) => {
      return acc + product.item.newTotal * product.qty;
    }, 0);

    // Actualiza el estado total con el nuevo total calculado
    setTotal(newTotal);

    // Guarda el carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);






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
      icon: 'error',
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
      icon: 'error',
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
    <CartContext.Provider value={{ cart, setCart, addItem, delProduct, emptyCart, qtyTotal, total, precioFinal, setPreciofinal, shippingOption, setShippingOption, shippingPrice, setShippingPrice, name, setName, lastname, setLastname, tel, setTel, dir, setDir, cp, setCp, email, setEmail, emailConfirm, setEmailConfirm, error, setError, cartLS }}>
      {children}
    </CartContext.Provider>
  )

}