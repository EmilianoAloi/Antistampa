import { Box, Typography, Stack, Container } from "@mui/material"
import './InfoBuzos.css'
import buzos1 from '../../assets/buzos1.png';
import buzos2 from '../../assets/buzos2.png';



const InfoBuzos = () => {
  return (
    <>



      <Box sx={{ backgroundColor: '#FFFF00', textAlign: 'center', padding: '1rem', margin: '0 auto', mt: '3rem', mb: '2rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
        <Typography component='h2' fontWeight={700}
          sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} >
          ASI SON NUESTROS BUZOS</Typography>
      </Box>

      <Container >
        <Stack color='white' fontFamily='Roboto'>
          <Typography component='h3' mb={3} sx={{ textAlign:'center', fontSize: { xs: '1rem', sm: '2rem' }, color: 'white', fontWeight: '700' }} >
            BUZOS y HOODIES ULTRAPREMIUM.
          </Typography>
          <Typography component='h3' sx={{textAlign:'center',  fontSize: { xs: '0.8rem', sm: '1.5rem' } }} >
            Frisa invisible 50% algodón y 50% poliéster. <br />
            Tirilla de limpieza y costura reforzada en cuello, hombro y sisa. <br />
            Talle: Oversize <br />
            Color: Negro.
          </Typography>
        </Stack>

        <Stack alignItems='center' justifyContent='center' mt={5} gap={0.5} sx={{ flexDirection: { xs: 'row', sm: 'row' } }}>

          <img src={buzos1} alt='buzo1' className='buzos1' />

          <img src={buzos2} alt='buzo2' className='buzos2' />

        </Stack>



      </Container>



    </>



  )
}

export default InfoBuzos