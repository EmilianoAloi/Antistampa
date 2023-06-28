import { Button, Stack, Typography } from '@mui/material'
import heroVideo from '../../assets/hero.mp4'
import './Hero.css'

import SendIcon from '@mui/icons-material/Send';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import InfoRemeras from '../InfoRemeras/InfoRemeras';
import InfoBuzos from '../InfoBuzos/InfoBuzos';
import Dtg from '../Dtg/Dtg';
import ChooseDesing from '../ChooseDesing/ChooseDesing';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Hero = () => {

const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);


    }, [location])


    return (
        <>

            <Stack alignItems='center' gap={7} marginBottom={5} >


                <video muted autoPlay src={heroVideo} loop playsInline className='videoHero' ></video>

                <Button variant='contained' className='btnPersonalizar' size='large' endIcon={<SendIcon />} component={Link} to={'./personalizados'}
                    sx={{ fontWeight: '800', borderRadius: '10px', paddingY: '1rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                    Personaliza tu prenda
                </Button>



                <Typography
                    component='h2'
                    className='heroTitle'
                    color='white'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '1.5rem', sm: '3rem' } }}
                >NUESTROS PRODUCTOS</Typography>

            </Stack>

            <ItemListContainer />

            <InfoRemeras />

            <InfoBuzos />

            <Dtg />

            <ChooseDesing />

        </>
    )
}

export default Hero