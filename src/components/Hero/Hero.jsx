import { Button, Stack, Typography } from '@mui/material'
import heroVideo from '../../assets/hero.mp4'
import './Hero.css'

const Hero = () => {

    return (
        <>

            <Stack alignItems='center' gap={7} marginBottom={5} >

                {/* <img src={heroVideo} className='videoHero' /> */}

                <video muted="true" autoPlay='true' src={heroVideo} loop='true' playsInline  className='videoHero' ></video>

                <Button variant='contained' size='large' className='btn-hero'>
                    Personaliza tu remera
                </Button>

                <Typography
                    component='h1'
                    color='white'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '1.5rem', sm: '3rem' } }}
                >NUESTROS PRODUCTOS</Typography>

            </Stack>

        </>
    )
}

export default Hero