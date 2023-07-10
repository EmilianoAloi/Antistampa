import { useState, useContext } from "react";
import { CartContext } from '../Context/CartContext'
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography, Stack, Divider } from "@mui/material";

const Checkout = () => {

    const { cart, emptyCart, total } = useContext(CartContext);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState();
    const [orderId, setOrderId] = useState();


    const handleForm = (e) => {
        e.preventDefault();
        if (!name || !lastname || !tel || !email || !emailConfirm) {
            setError('Por favor llena todos los campos');
            return;
        }

        if (email !== emailConfirm) {
            setError('Los campos de email no coinciden');
            return
        }

        const order = {
            items: cart.map(prod => ({
                id: prod.item.id,
                prenda: prod.item.prenda,
                talle: prod.item.talle,
                color: prod.item.color,
                producto: prod.item.product,
                medidaEstampado: prod.item.estampado,
                ubicacionEstampado: prod.item.ubicacion,
                precio: prod.item.newTotal,
                nombre: prod.item.name,
                cantidad: prod.qty,

            })),
            total: cart.reduce((total, prod) => total + prod.item.newTotal * prod.qty, 0),
            name,
            lastname,
            tel,
            email,
            date: new Date()
        };

        addDoc(collection(db, 'ordenes'), order)
            .then(docRef => {
                setOrderId(docRef.id);
                emptyCart();
            })

            .catch(error => {
                setError('Se produjo un error al crear la orden, vuelva a intentar.');
            })
    }



    return (

        <>

            <Container >
                <Typography component='h2' fontWeight='500' letterSpacing={2} sx={{ fontSize: { xs: '1.2rem', sm: '2rem' }, marginTop: { sm: '2rem' }, marginBottom: '2rem' }} color='white'> Checkout </Typography>

                <Box
                    component="form"

                    noValidate
                    autoComplete="off"
                    onSubmit={handleForm}
                    fontFamily='Roboto'

                >

                    {cart.map(prod => (
                        <Stack key={prod.item.id} direction='row' alignItems='center' gap={3} color='white' marginBottom={2}   >
                            <Typography variant="body" width='10rem'>{prod.item.product}</Typography>
                            <Typography variant="body" width='10rem'> {prod.item.name} x {prod.qty} </Typography>
                            <Typography variant="body" width='10rem'> Precio: ${prod.item.price}</Typography>
                        </Stack>
                    ))}
                    <Divider sx={{ width: { xs: '100%', md: '100%' } }} />

                    <Typography color='primary' variant="h5" textAlign='end' marginTop='1rem' >Total Compra: ${total}</Typography>

                    <Typography textAlign='start' component='h3' color='white' sx={{ fontSize: { xs: '1rem', sm: '1rem' }, marginTop: '2rem', }}>DATOS DE FACTURACION</Typography>


                    <Stack gap={3} marginTop={4} marginBottom={3}  >
                        <TextField id="outlined-basic" label="Nombre" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />

                        <TextField id="outlined-basic" label="Apellido" variant="outlined" value={lastname} onChange={(e) => setLastname(e.target.value)} required />


                        <TextField id="outlined-basic" label="Telefono" variant="outlined" value={tel} onChange={(e) => setTel(e.target.value)} required />

                        <TextField id="outlined-basic" label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <TextField id="outlined-basic" label="Confirmar Email" type="email" variant="outlined" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required />

                    </Stack>
                    {error && <Typography textAlign='center' color='red' marginBottom={3}> {error} </Typography>}

                    {
                        orderId && (
                            <>
                                <Typography textAlign='start' color='primary' sx={{ fontSize: { xs: '2rem', sm: '4rem' } }} marginTop='2rem' > GRACIAS POR TU COMPRA ! 🥳
                                </Typography>

                                <Typography textAlign='start' color='white' variant="h6" marginBottom='2rem'>   N de orden: {orderId}</Typography>
                            </>
                        )
                    }

                    <Box textAlign='center' marginBottom={10}>
                        <Button type='submit'
                            variant="contained"
                            size="large"
                            sx={{ paddingX: '50px', paddingY: '20px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}
                        >Finalizar compra</Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Checkout