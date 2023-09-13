import { useState, useContext } from "react";
import { CartContext } from '../Context/CartContext'
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography, Stack, Divider } from "@mui/material";
import Shipping from "../Shipping/Shipping";
import Resume from "../Resume/Resume";

const Checkout = () => {


    const { cart, shippingPrice, shippingOption, emptyCart, total } = useContext(CartContext);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [tel, setTel] = useState('');
    const [dir, setDir] = useState('');
    const [cp, setCp] = useState('');

    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState(null);
    const [orderId, setOrderId] = useState();
    // const [payStatus, setPayStatus] = useState();


    ////////////////////////////////////////////////// Integracion MercadoPago/////////////////////////////////////////////


    const titleMP = cart.map(prod => (prod.item.product + ' ' + prod.item.name + prod.item.color));
    console.log(titleMP)

    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-df6f7270-27a1-4961-a889-aa0fadf77fcf');

    const createPreference = async () => {
        try {
            const response = await axios.post(`https://antistampa-backend-2.vercel.app/create_preference`, {
                description: 'Orden de compra Antistampa',
                price: total + shippingPrice,
                quantity: 1,
            });


            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };


    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

        if (error === null) {
            handleBuy()
        }
        handleBuy()
        const order = {
            items: cart.map(prod => ({
                id: prod.item.id,
                prenda: prod.item.prenda,
                producto: prod.item.product,
                img: prod.item.img,
                talle: prod.item.talle,
                color: prod.item.color,
                medidaEstampado: prod.item.estampado,
                ubicacionEstampado: prod.item.ubicacion,
                precio: prod.item.newTotal,
                nombre: prod.item.name,
                cantidad: prod.qty,

            })),
            total: cart.reduce((total, prod) => total + shippingPrice + prod.item.newTotal * prod.qty, 0),
            name,
            lastname,
            tel,
            email,
            envio: { shippingOption, shippingPrice },
            // payStatus,
            date: new Date()
        };

        addDoc(collection(db, 'ordenes'), order)
            .then(docRef => {
                setOrderId(docRef.id);
                emptyCart();
            })
            .catch(error => {
                console.error('Error al crear la orden:', error.code, error.message);
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
                        <Stack key={prod.item.id} direction='row' alignItems='start' gap={3} color='white' marginBottom={2}   >
                            <Typography variant="body" width='10rem'>{prod.item.product}</Typography>
                            <Typography variant="body" width='18rem'> {prod.item.name}</Typography>
                            <Typography variant="body" width='10rem'>Cantidad: {prod.qty} </Typography>
                            <Typography variant="body" width='10rem'>Precio: ${prod.item.newTotal}</Typography>
                        </Stack>
                    ))}
                    <Divider sx={{ width: '100%' }} />

                    <Typography color='primary' variant="h5" textAlign='end' marginTop='1rem' >Subtotal: ${total}</Typography>

                    <Typography color='grey' variant="h6" textAlign='end'  >(sin envio)</Typography>


                    <Shipping />

                  


                 
                    <Stack direction='row' marginTop='4rem' display='flex' justifyContent="center" alignItems='start' >



                        <Stack width='50%' >
                            <Typography textAlign='start' component='h3' color='white' sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, marginTop: '2rem', marginBottom:'0.5rem' }}>DATOS DE FACTURACION</Typography>
                            <Divider />


                            <Stack gap={3} marginTop={4} marginBottom={3}  >
                                <Stack direction='row' justifyContent='space-between' gap={2}>
                                    <TextField sx={{ width: '50%' }} id="outlined-basic" label="Nombre" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
                                    <TextField sx={{ width: '50%' }} id="outlined-basic" label="Apellido" variant="outlined" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                                </Stack>


                                <TextField id="outlined-basic" label="Direccion" variant="outlined" value={dir} onChange={(e) => setDir(e.target.value)} required />

                                <Stack direction='row' justifyContent='space-between' gap={2}>
                                    <TextField sx={{ width: '30%' }} id="outlined-basic" label="CP" variant="outlined" value={cp} onChange={(e) => setCp(e.target.value)} required />

                                    <TextField sx={{ width: '70%' }} id="outlined-basic" label="Telefono" variant="outlined" value={tel} onChange={(e) => setTel(e.target.value)} required />

                                </Stack>

                                <Stack direction='row' justifyContent='space-between' gap={2}>
                                    <TextField sx={{ width: '50%' }} id="outlined-basic" label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                    <TextField sx={{ width: '50%' }} id="outlined-basic" label="Confirmar Email" type="email" variant="outlined" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required />
                                </Stack>
                            </Stack>
                            {error && <Typography textAlign='start' color='red' > {error} </Typography>}

                        </Stack>





                        <Stack>
                            <Stack sx={{ m: 8, paddingTop: '2rem' }} >
                            <Divider />
                                <Resume />

                            </Stack>
                        </Stack>



                    </Stack>



                    <Stack>
                        <Button
                            type='submit'
                            onClick={() => { handleBuy(); console.log(5); }}
                            variant="contained"
                            color="primary"
                            size="medium"
                            sx={{ width: '100%', paddingX: '50px', paddingY: '0.5rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}
                        >CONTINUAR</Button>
                        {preferenceId &&
                            <Wallet initialization={{ preferenceId }} />
                        }


                        {
                            orderId && (
                                <>
                                    <Typography textAlign='start' color='primary' sx={{ fontSize: { xs: '2rem', sm: '4rem' } }} marginTop='2rem' > GRACIAS POR TU COMPRA ! 🥳
                                    </Typography>

                                    <Typography textAlign='start' color='white' variant="h6" marginBottom='2rem'>   N de orden: {orderId}</Typography>
                                </>
                            )
                        }
                    </Stack>
                    {/* <Button color='warning' onClick={() => { handleBuy(); console.log(5); }}
                        >PAGAR CON MERCADOPAGO</Button> */}
                </Box>




            </Container>
        </>
    )
}

export default Checkout