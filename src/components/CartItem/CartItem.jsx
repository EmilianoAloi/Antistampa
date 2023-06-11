import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Button, Container } from "@mui/material"

const CartItem = ({ item, qty }) => {
    const { delProduct } = useContext(CartContext)

    return (

        <Container sx={{color: 'white', fontFamily:'Roboto'}} >
            
 
      

            <h4>{item.name}</h4>
            <p>Cantidad: {qty}</p>
            <p>Precio: {item.price}</p>
            <Button onClick={()=> delProduct(item.id)}>Eliminar</Button>

            


        </Container>
    )
}

export default CartItem