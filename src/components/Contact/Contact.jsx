import './Contact.css'

import { Typography, Paper, Stack, Container, Link, Box } from "@mui/material"
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

            <Box sx={{ color: 'white', textAlign: 'center', margin: '0 auto', marginBottom: '1rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                <Typography component='h2' fontWeight={700} className="heroTitle"
                    sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }} >
                    CONTACTO</Typography>
            </Box>


            <Container >

                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: { xs: '0rem', md: '2rem' } }}>

                    <Link href="tel:+5491144034628" target="_blank" rel="noopener noreferrer" underline="none">


                        <Paper elevation={12} className='contact1' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem' >
                                <PhoneIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}> LLAMANOS </Typography>
                                <Typography textAlign='center'>
                                    TEL: 1144034628 <br />
                                    de 8:30 a 18:00hs
                                </Typography>
                            </Stack>
                        </Paper>

                    </Link>

                    <Link href="https://www.instagram.com/antistampa" target="_blank" rel="noopener noreferrer" underline="none">

                        <Paper elevation={12} className='contact2' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem'>
                                <InstagramIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}> SEGUINOS </Typography>
                                <Typography textAlign='center'>
                                    @antistampa<br />
                                    Instagram
                                </Typography>
                            </Stack>
                        </Paper>

                    </Link>


                    <Link href="https://wa.me/5491144034628?text=Hola! Envianos tu consulta, en Antistampa te respondemos al instante!" target="_blank" rel="noopener noreferrer" underline="none">

                        <Paper elevation={12} className='contact3' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} >
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem'>
                                <WhatsAppIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}> ESCRIBINOS  </Typography>
                                <Typography textAlign='center'>
                                    Chatea 24/7<br />
                                 Whatsapp

                                </Typography>
                            </Stack>
                        </Paper>

                    </Link>

                    <Link href="mailto:antistampa@gmail.com" target="_blank" rel="noopener noreferrer" underline="none">


                        <Paper elevation={12} className='contact4' sx={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                            <Stack justifyContent='center' alignItems='center' gap={2} margin={5} minWidth='10rem' minHeight='18rem'>
                                <EmailIcon color="primary" sx={{ fontSize: '5rem' }} />
                                <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}> EMAIL </Typography>
                                <Typography textAlign='center'>
                                    Envianos un correo
                                    <br />
                                antistampa@gmail.com

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