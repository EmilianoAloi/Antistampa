import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Divider, IconButton, Stack, Typography } from "@mui/material"
import './CartItem.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = ({ item, qty }) => {
    const { delProduct } = useContext(CartContext)

    return (
        <>
            <Stack direction='row' sx={{ color: 'white', fontFamily: 'Roboto', alignItems: 'center', justifyContent: 'center', gap: '2rem', mb: '0.8rem'}} >

                <img className="imgCartItem" src={item.img} alt={item.name} />

                <Stack>
                    <Typography component='h2' variant='subtitle1' fontWeight={600}>{item.name}</Typography>
                    <Typography component='h2' variant='body2'>{item.product}</Typography>
                    <Typography component='h2' variant='body2'>Cantidad: {qty}</Typography>

                    <Typography component='h2' variant='body2'>Precio: ${item.newTotal}</Typography>
                    <IconButton onClick={() => delProduct(item.id)} disableRipple color='error' sx={{ marginLeft: '0 auto' }}>
                        <DeleteForeverIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                </Stack>

            </Stack>
            <Divider sx={{ mb: '0.8rem' }} />
        </>
    )
}

export default CartItem;