import './Contact.css'

import { Typography, Paper, Stack, Container, Link } from "@mui/material"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])


    return (
        <>

            <Typography className='faqsTitle' color='#F4BF00' fontWeight={500} sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' }, textAlign: { xs: 'center', sm: 'center' }, marginY: '1.5rem' }} >
                CONTACTO</Typography>

            {/* <Typography color='#F4BF00'>Cualquier consulta que tengas, no dudes en escribirnos.
                Envianos un mail y nos pondremos en contacto contigo.</Typography> */}

            <Container >

                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: { xs: '0rem', md: '2rem' } }}>

                    <Link href="tel:+5491144034628" target="_blank" rel="noopener noreferrer" underline="none">


                        <Paper elevation={12} className='contact1' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem' >
                                <PhoneIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '2rem', fontWeight: '600' }}> Llamanos </Typography>
                                <Typography textAlign='center'>
                                    TEL: 1144034628 <br />
                                    <i>de 8:30 a 18:00hs</i>
                                </Typography>
                            </Stack>
                        </Paper>

                    </Link>

                    <Link href="https://www.instagram.com/antistampa" target="_blank" rel="noopener noreferrer" underline="none">

                        <Paper elevation={12} className='contact2' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem'>
                                <InstagramIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '2rem', fontWeight: '600' }}> Seguinos </Typography>
                                <Typography textAlign='center'>
                                    @antistampa<br />
                                    <i> on Instagram</i>
                                </Typography>
                            </Stack>
                        </Paper>

                    </Link>


                    <Link href="https://wa.me/5491144034628?text=Hola! Envianos tu consulta, en Antistampa te respondemos al instante!" target="_blank" rel="noopener noreferrer" underline="none">

                        <Paper elevation={12} className='contact3' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} >
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem'>
                                <WhatsAppIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '2rem', fontWeight: '600' }}> Escribinos  </Typography>
                                <Typography textAlign='center'>
                                    Chatea 24/7<br />
                                    <i> on Whatsapp</i>

                                </Typography>
                            </Stack>
                        </Paper>

                    </Link>

                    <Link href="mailto:antistampa@gmail.com" target="_blank" rel="noopener noreferrer" underline="none">


                        <Paper elevation={12} className='contact4' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem'>
                                <EmailIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '2rem', fontWeight: '600' }}> EMAIL </Typography>
                                <Typography textAlign='center'>
                                    Envianos un correo
                                    <br />
                                    <i>antistampa@gmail.com</i>

                                </Typography>
                            </Stack>
                        </Paper>

                    </Link>

                </Stack>


            </Container>



        </>
    )
}

export default Contact