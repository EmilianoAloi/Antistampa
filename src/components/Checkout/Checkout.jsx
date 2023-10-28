import { useState, useContext } from "react";
import { CartContext } from '../Context/CartContext'
// import { db } from "../../services/config";
// import { collection, addDoc } from "firebase/firestore";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography, Stack, Divider } from "@mui/material";
import Shipping from "../Shipping/Shipping";
import Resume from "../Resume/Resume";
import LinearProgress from '@mui/material/LinearProgress';


const Checkout = () => {



    const { cart, shippingPrice, total, name, setName, lastname, setLastname, tel, setTel, dir, setDir, cp, setCp, email, setEmail, emailConfirm, setEmailConfirm } = useContext(CartContext);

    // const [name, setName] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [tel, setTel] = useState('');
    // const [dir, setDir] = useState('');
    // const [cp, setCp] = useState('');

    // const [email, setEmail] = useState('');
    // const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState(null);
    // eslint-disable-next-line
    const [orderId, setOrderId] = useState();

    const [showButton, setShowButton] = useState(true);
    const [showLinear, setShowLinear] = useState(true);
    const [showWallet, setShowWallet] = useState(false);

    // const handleContinueClick = () => {
    //     setShowButton(false);
    //     setShowLinear(true);
    // };



    ////////////////////////////////////////////////// Integracion MercadoPago/////////////////////////////////////////////


    const titleMP = cart.map(prod => (prod.item.product + ' ' + prod.item.name + prod.item.color));
    console.log(titleMP)

    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-df6f7270-27a1-4961-a889-aa0fadf77fcf', { locale: 'es' });

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

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleBuy = async () => {

        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
            setShowButton(false);
            setShowLinear(false);
            setShowWallet(true);
        }
    };

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

        if (email === emailConfirm) {
            setError(null);
            handleBuy();
        }

        console.log(error);

    }

    ////////////////////// creacion de orden en firebase ////////////////////////////////////////////////////////////////////



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
    //         emptyCart();
    //     })
    //     .catch(error => {
    //         console.error('Error al crear la orden:', error.code, error.message);
    //         setError('Se produjo un error al crear la orden, vuelva a intentar.');
    //     })




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (

        <>
            <Container >

                <Box sx={{ color: 'white', textAlign: 'center', margin: '0 auto', marginBottom: '3rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                    <Typography component='h2' fontWeight={700} className="heroTitle"
                        sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }} >
                        Checkout</Typography>
                </Box>

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





                    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, mt: '4rem', justifyContent: 'center', alignItems: 'center', gap: { md: '5rem' } }} >



                        <Stack >
                            <Typography textAlign='start' component='h3' color='white' sx={{ fontWeight: '500', fontSize: { xs: '1.2rem', sm: '2rem' }, marginTop: '2rem', marginBottom: '0.5rem' }}>DATOS DE FACTURACION</Typography>
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
                            <Resume />
                        </Stack>



                    </Stack>



                    <Stack>
                        {showButton && (
                            <Button
                                type='submit'
                                variant="contained"
                                color="primary"
                                size="medium"
                                sx={{ width: '100%', paddingX: '50px', paddingY: '0.5rem', mt: '2rem', borderBottomLeftRadius: '0', borderBottomRightRadius: '0', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}
                            >
                                CONTINUAR
                            </Button>)}


                        {showLinear && <LinearProgress />}

                        {showWallet && (
                            <Wallet
                                initialization={{ preferenceId }}
                                customization={{
                                    visual: {
                                        texts: {
                                            action: 'buy'
                                        }
                                    }
                                }}
                            />
                        )}


                        {/* {
                            orderId && (
                                <>
                                    <Typography textAlign='start' color='primary' sx={{ fontSize: { xs: '2rem', sm: '4rem' } }} marginTop='2rem' > GRACIAS POR TU COMPRA ! 🥳
                                    </Typography>

                                    <Typography textAlign='start' color='white' variant="h6" marginBottom='2rem'>N de orden: {orderId}</Typography>
                                </>
                            )
                        } */}
                        
                    </Stack>

                </Box>




            </Container>
        </>
    )
}

export default Checkout