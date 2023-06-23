import { Box, Typography, Container, Button, Stack } from "@mui/material"
import CheckroomIcon from '@mui/icons-material/Checkroom';

const ChooseDesing = () => {
    return (

        <>

            <Box sx={{ color: 'white', textAlign: 'center', padding: '1rem', margin: '0 auto', mt: '3rem', mb: '1rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                <Typography component='h2' fontWeight={700} className="heroTitle"
                    sx={{ fontSize: { xs: '2rem', sm: '4rem' } }} >
                    ELEGI TU DISEÑO</Typography>
            </Box>


            <Container>

                <Stack mb={15} >
                    <Typography color='white' mb={4} sx={{ textAlign:'center' ,fontSize: { xs: '0.8rem', sm: '1.5rem' } }} >
                        1. Elegi que prenda queres personalizar. <br />
                        2. Elegir Color y Talle.<br />
                        3. Elegi tamaño de la impresion.<br />
                        4. Ubicacion: en el frente o en la parte de atrás. <br />
                        5. Y por ultimo, envianos tu diseño en formato jpg, jpeg o png y HD.
                    </Typography>

                    <Button variant='contained' size='large' endIcon={<CheckroomIcon />} 
                        sx={{ fontSize: { xs: '1rem', sm: '1.4rem' }, margin:'0 auto', marginTop:'2rem', maxWidth: '25rem', fontWeight: '800', borderRadius: '10px', paddingY: '1rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                        Personaliza tu prenda
                    </Button>
                </Stack>

            </Container>



        </>





    )
}

export default ChooseDesing