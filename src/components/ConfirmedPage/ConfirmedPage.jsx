import { Box, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
// import { db } from "../../services/config";
// import { collection, addDoc } from "firebase/firestore";
import aprobado from '../../assets/aprobado.png'


const ConfirmedPage = () => {

    // eslint-disable-next-line
    const { cart, shippingPrice, total, shippingOption, name, lastname, tel, dir, cp, email, orderId, setOrderId, setError } = useContext(CartContext);



    // const order = {
    //     items: cart.map(prod => ({
    //         id: prod.item.id,
    //         prenda: prod.item.prenda,
    //         producto: prod.item.product,
    //         img: prod.item.img,
    //         talle: prod.item.talle,
    //         color: prod.item.color,
    //         medidaEstampado: prod.item.estampado,
    //         ubicacionEstampado: prod.item.ubicacion,
    //         precio: prod.item.newTotal,
    //         nombre: prod.item.name,
    //         cantidad: prod.qty,

    //     })),
    //     total: cart.reduce((total, prod) => total + shippingPrice + prod.item.newTotal * prod.qty, 0),
    //     name,
    //     lastname,
    //     tel,
    //     email,
    //     envio: { shippingOption, shippingPrice },
    //     date: new Date()
    // };



    // addDoc(collection(db, 'ordenes'), order)
    //     .then(docRef => {
    //         setOrderId(docRef.id);
    //     })
    //     .catch(error => {
    //         console.error('Error al crear la orden:', error.code, error.message);
    //         setError('Se produjo un error al crear la orden, vuelva a intentar.');
    //     })


return (

    <>
        {/* <Box sx={{ color: 'white', textAlign: 'center', margin: '0 auto', marginBottom: '3rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                <Typography component='h2' fontWeight={700} className="heroTitle"
                    sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }} >
                    Confirmacion de compra</Typography>
            </Box> */}

        <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '4rem' }}>
            <Box sx={{ color: 'white', backgroundColor: '#0d0d0d', borderRadius: '30px', width: '30%', height: 'auto', padding: '2rem', paddingTop: '1rem', textAlign: 'center', }}>


                <Stack sx={{ alignItems: 'center' }}>
                    <img src={aprobado} alt="aprobado" style={{ width: '40%' }} />
                </Stack>

                <Typography component='h3' fontWeight={500} sx={{ fontSize: '2rem' }}>Muchas gracias por tu compra!</Typography>
                <Typography component='h3' fontWeight={200} sx={{ fontSize: '1.2rem', marginTop: '.2rem' }}>Tu pedido ha sido procesado.</Typography>

                <Stack direction='row' justifyContent='center' alignItems='end' gap={1} >
                    <Typography component='h3' sx={{ fontSize: '1rem' }}>N de Orden:</Typography>
                    <Typography component='h3' fontWeight={600} sx={{ fontSize: '1.5rem', lineHeight: '1.2', marginTop: '3rem' }}>4545121221 {orderId} </Typography>
                </Stack>

                <Typography component='h3' fontWeight={500} sx={{ fontSize: '1rem', marginTop: '4rem' }}>En breve recibiras un correo de confirmacion.</Typography>





            </Box>
        </Stack>


    </>

)
}

export default ConfirmedPage