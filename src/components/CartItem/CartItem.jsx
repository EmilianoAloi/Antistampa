import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Button } from "@mui/material"

const CartItem = ({ item, qty }) => {
    const { delProduct } = useContext(CartContext)

    return (

        <div>
            <h4>{item.name}</h4>
            <p>Cantidad: {qty}</p>
            <p>Precio: {item.price}</p>
            <Button onClick={()=> delProduct(item.id)}>Eliminar</Button>

        </div>
    )
}

export default CartItem