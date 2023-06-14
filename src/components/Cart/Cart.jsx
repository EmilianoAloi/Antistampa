import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button, Container, Stack, Typography } from "@mui/material";


const Cart = () => {
    const { cart, emptyCart, total, qtyTotal } = useContext(CartContext)

    if (qtyTotal === 0) {
        return (
            <>
                <Container sx={{ color: 'white', textAlign: 'center', border: '1px solid yellow', padding: '2rem', maxWidth: '500px !important', mt: { xs: '5rem', md: '8rem' } }} >
                    <Typography component='h2' variant="h5" fontWeight='800' >
                        No hay productos seleccionados 😔
                    </Typography>

                    <Link to='/' >
                        <Button size='large' variant='contained' sx={{ fontWeight: '800', mt: '2rem' }}>
                            Ver Productos
                        </Button>
                    </Link>
                </Container>
            </>
        )
    }

    return (
        <Container>
            <Stack>
                    {cart.map(product => <CartItem key={product.item.id} {...product} />)}
                    <h3>Total: ${total}</h3>
                    <h3>Cantidad total: {qtyTotal}</h3>


                    <Button onClick={() => emptyCart()} > Vaciar Carrito </Button>

                    <Link to='/checkout' className="detailLinks" >
                        <Button>Finalizar Compra</Button>
                    </Link>

            </Stack>
        </Container>
    )
}

export default Cart