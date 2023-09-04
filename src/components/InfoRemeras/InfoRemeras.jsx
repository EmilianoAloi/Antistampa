import './InfoRemeras.css';

import { Box, Stack, Typography, Container } from '@mui/material';
import detailShirt from '../../assets/detailShirt.png';
import colors from '../../assets/colors.jpeg';


const InfoRemeras = () => {
    return (
        <>


            <Box sx={{ backgroundColor: '#F4BF00', textAlign: 'center', padding: '1rem', margin: '0 auto', mt: '3rem', mb: '2rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>

                <Typography component='h2' fontWeight={700}
                    sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} >
                    ASI SON NUESTRAS REMERAS</Typography>
            </Box>



            <Container >
                <Stack color='white' fontFamily='Roboto'>
                    <Typography component='h3' mb={3} sx={{ textAlign:'center', fontSize: { xs: '1rem', sm: '2rem' }, color: 'white', fontWeight: '700' }} >
                        Remeras Ultrapremium de algodón 24.1 peinado.
                    </Typography>
                    <Typography component='h3' sx={{textAlign:'center',  fontSize: { xs: '0.8rem', sm: '1.5rem' } }} >
                        Costura Reforzada en hombro y sisa. <br />
                        Talles reales para adultos: Desde XS hasta XXXL.<br />
                        Talles de Niños: Desde el 2 al 14.<br /><br />
                        En Antistampa no vemos género, por ende todas nuestras prendas son unisex.
                    </Typography>
                </Stack>

                <Stack alignItems='center' mt={5} gap={3}>

                    <img src={detailShirt} alt='detailShirt' className='detailShirt' />

                    <Typography component='h3' color='white' fontWeight={500} sx={{ fontSize: { xs: '1.2rem', sm: '2rem' } }} >30 COLORES DISPONIBLES</Typography>

                    <img src={colors} alt='colors' className='colors' />

                </Stack>



            </Container>


        </>

    )
}

export default InfoRemeras