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
            <Stack color='white' fontFamily='Roboto'>
                {cart.map(product => <CartItem key={product.item.id} {...product} />)}

                <Stack justifyContent='space-between' alignItems='flex-end' marginTop='1rem'>
                    <Typography component='h3' variant="body2"> Cantidad total: {qtyTotal} </Typography>
                    <Typography component='h3' variant="h5"> Total: ${total} </Typography>
                </Stack>

                <Stack gap={2} marginTop='2rem'>
                    <Button onClick={() => emptyCart()} color="error" variant="outlined" > Vaciar Carrito </Button>

                    <Link to='/checkout'>
                        <Button variant="contained" sx={{ width: '100%', maxWidth: '20rem', marginBottom:'10rem'}}>Finalizar Compra</Button>
                    </Link>
                </Stack>

            </Stack>
        </Container>
    )
}

export default Cart