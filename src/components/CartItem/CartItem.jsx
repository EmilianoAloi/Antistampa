import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Button, Stack, Typography } from "@mui/material"
import './CartItem.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = ({ item, qty }) => {
    const { delProduct } = useContext(CartContext)

    return (

        <>

            <Stack direction='row' sx={{ color: 'white', fontFamily: 'Roboto', alignItems: 'center', justifyContent: 'center', gap: '2rem', mb: '2rem'}} >
                <img className="imgCartItem" src={item.img} alt={item.name} />

                <Stack justifyContent='left'>
                    <Typography component='h2' variant='subtitle1' fontWeight={600}>{item.name} </Typography>
                    <Typography component='h2' variant='body2'>Precio: ${item.price} </Typography>
                    <Typography component='h2' variant='body2'>{item.product} </Typography>
                    <Typography component='h2' variant='body2'>Cantidad: {qty} </Typography>
                    <Button color="error" variant="outlined" startIcon={<DeleteForeverIcon />} sx={{ mt: '1rem' }} onClick={() => delProduct(item.id)}>Eliminar</Button>
                </Stack>

            </Stack>
        </>

    )
}

export default CartItem