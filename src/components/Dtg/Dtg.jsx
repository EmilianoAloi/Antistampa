import { Typography, Box, Stack, Container } from "@mui/material"
import machine from '../../assets/machine.mp4'
import './Dtg.css'

const Dtg = () => {
    return (
        <>

            <Box sx={{ backgroundColor: '#FFFF00', textAlign: 'center', padding: '1rem', margin: '0 auto', mt: '3rem', mb: '2rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                <Typography component='h2' fontWeight={700}
                    sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} >
                    CALIDAD ESTAMPADOS</Typography>
            </Box>

            <Container >

                <Stack color='white' fontFamily='Roboto'>
                    <Typography component='h3' mb={3} sx={{textAlign:'center',  fontSize: { xs: '1rem', sm: '2rem' }, color: 'white', fontWeight: '700' }} >
                        La técnica que usamos en Antistampa es DTG (impresión digital).
                    </Typography>
                    <Typography component='h3' sx={{textAlign:'center', fontSize: { xs: '0.8rem', sm: '1.2rem' } }} >
                        Es un sistema que imprime directo sobre la prenda con tintas importadas de alta durabilidad y muy suave al tacto. <br />
                        Permite imprimir la imagen que ustedes quieran o cualquiera de nuestro catálogo sobre la prenda del color que elijan. <br /><br />
                        Ultima tecnología en lo que respecta a estampados sobre remeras. <br />
                    </Typography>
                </Stack>

                <Stack alignItems='center' mt={4} mb={0}>
                    <video muted autoPlay src={machine} loop playsInline className='machine' ></video>
                </Stack>

            </Container>
        </>
    )
}

export default Dtg