import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button } from "@mui/material";


const Cart = () => {
    const { cart, emptyCart, total, qtyTotal } = useContext(CartContext)

    if (qtyTotal === 0) {
        return (
            <>
                <h2>No hay productos</h2>
                <Link to='/'>Ver Productos</Link>
            </>
        )
    }
    return (
        <div>
            {cart.map(product => <CartItem key={product.item.id} {...product} />)}
            <h3>Total: ${total}</h3>
            <h3>Cantidad total: {qtyTotal}</h3>
            <Button onClick={()=> emptyCart()}> Vaciar Carrito </Button>
            <Link to='/checkout' > Finalizar Compra</Link>
        </div>

    )
}

export default Cart