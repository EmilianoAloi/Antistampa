import './ItemDetail.css'
import Counter from '../Counter/Counter';
import colors from '../../assets/colors.png';
import talles from '../../assets/talles.jpg'

import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Button, Container, Grid, Stack, Typography, FormControl, InputLabel, Select, MenuItem, Box, Backdrop, Modal, Fade } from '@mui/material';
import { useLocation } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PaymentIcon from '@mui/icons-material/Payment';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', sm: '70%', md: '40%' },
    margin: '0 auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const ItemDetail = ({ id, name, price, img, product, stock }) => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [talle, setTalle] = useState('');
    const handleChange = (e) => {
        setTalle(e.target.value);
    }

    const [color, setColor] = useState('');
    const handleChange2 = (e) => {
        setColor(e.target.value);
    }





    const [addQty, setAddQty] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleAddItem = (qty) => {



        let newTotal = parseInt(price);
        switch (talle) {

            case 'XS':
                newTotal = price + 1000
                break;
            case 'XL':
                newTotal = price + 1100
                break;
            case 'XXL':
                newTotal = price + 1200
                break;

            default:
                newTotal = price;
                break;
        }

        const item = { id, name, price, product, img, color, talle, newTotal };



        if (color !== '' && talle !== '') {
            addItem(item, qty);
            alert('item agregado');
        } else {
            alert('faltan completar campos');
            return;
        }




        setAddQty(qty);


    }

    // MODALES

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);


    return (
        <>
            <Container sx={{ mb: '10rem' }}>
                <Grid container color='white' >

                    <Grid item xs={12} mb={3} gap={3}>
                        <Typography component='h2' fontWeight='500' letterSpacing={2} mb={0.5}
                            sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, marginTop: { sm: '2rem' } }} >
                            DETALLES DE PRODUCTO
                        </Typography>
                        <Stack className="line"></Stack>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className='imgDetail' src={img} alt={name} />
                    </Grid>

                    <Grid item xs={12} md={6}  >

                        <Typography component='h3'
                            sx={{ fontSize: { xs: '1rem', sm: '1rem' }, marginTop: { sm: '2rem' } }} >
                            Producto: {product}
                        </Typography>

                        <Typography component='h3' fontWeight='800' mb={4}
                            sx={{ fontSize: { xs: '2rem', sm: '2.2rem' } }} >
                            {name} <br /> ${price}
                        </Typography>


                        <Stack sx={{ justifyContent: 'center', gap: '2rem' }}>

                            <Stack sx={{ flexDirection: 'row', gap: '1rem', marginLeft: { xs: '0rem' }, justifyContent: { xs: 'space-evenly', md: 'start' } }}>
                                <Button onClick={handleOpen} color='success' variant='outlined' sx={{ paddingX: { xs: '8px', sm: '30px' }, fontSize: '10px', borderRadius: '20px' }} startIcon={<StraightenOutlinedIcon sx={{ padding: '0', fontSize: '10px' }} />}>Guia de talles</Button>
                                <Button onClick={handleOpen1} color='success' variant='outlined' sx={{ paddingX: { xs: '8px', sm: '30px' }, fontSize: '10px', borderRadius: '20px' }} startIcon={<ColorLensOutlinedIcon sx={{ padding: '0', fontSize: '10px' }} />}>Guia de colores</Button>
                            </Stack>

                            <Modal
                                aria-labelledby="talle-transition-modal-title"
                                aria-describedby="talle-transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <img src={talles} alt='tabla de talles' className='tablaTalles' />
                                    </Box>
                                </Fade>
                            </Modal>

                            <Modal
                                aria-labelledby="color-transition-modal-title"
                                aria-describedby="color-transition-modal-description"
                                open={open1}
                                onClose={handleClose1}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={open1}>
                                    <Box sx={style}>
                                        <img src={colors} alt='tabla de colores' className='tablaColores' />
                                    </Box>
                                </Fade>
                            </Modal>

                            <Stack sx={{ flexDirection: 'column', gap: '2rem', justifyContent: { xs: 'center', md: 'start' }, alignItems: { xs: 'center', md: 'start' } }}>
                                <FormControl variant="standard" sx={{ width: { xs: '100%', md: '65%' }, padding: '0', margin: '0' }} >
                                    <InputLabel id="talle-simple-select-standard-label" >Seleccionar Talle</InputLabel>
                                    <Select
                                        labelId="talle-simple-select-standard-label"
                                        id="talle-simple-select-standard"
                                        value={talle}
                                        onChange={handleChange}
                                        label="Talle"
                                        color='primary'
                                    >
                                        <MenuItem value='XS'>XS</MenuItem>
                                        <MenuItem value='XL'>XL</MenuItem>
                                        <MenuItem value='XXL'>XXL</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl variant="standard" sx={{ width: { xs: '100%', md: '65%' }, padding: '0', margin: '0' }} >
                                    <InputLabel id="color-simple-select-standard-label" >Seleccionar Color</InputLabel>
                                    <Select
                                        labelId="color-simple-select-standard-label"
                                        id="color-simple-select-standard"
                                        value={color}
                                        onChange={handleChange2}
                                        label="color"
                                        color='primary'
                                    >

                                        <MenuItem value='Blanco'>Blanco</MenuItem>
                                        <MenuItem value='Negro'>Negro</MenuItem>
                                        <MenuItem value='Amarillo'>Amarillo</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            <Stack sx={{ justifyContent: 'center', alignItems: { xs: 'center', md: 'start' } }}>
                                {
                                    addQty > 0 ?
                                        <Grid item xs={12}>
                                            <Link to='/cart' className='detailLinks'>
                                                <Button variant='contained' size='large'
                                                    startIcon={<PaymentIcon />}
                                                    sx={{ textAlign: 'left', paddingRight: '36px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                                                    Terminar Compra
                                                </Button>
                                            </Link>
                                        </Grid>
                                        :
                                        <Counter initial={1} stock={stock} addFunction={handleAddItem} />
                                }

                                {
                                    addQty > 0 ?
                                        <Grid item xs={12}>
                                            <Link to='/' className='detailLinks'>
                                                <Button variant='outlined'
                                                    size='large'
                                                    startIcon={<SearchIcon />}
                                                    sx={{ mt: '1rem', }}> Ver mas productos</Button>
                                            </Link>
                                        </Grid>
                                        : ''
                                }
                            </Stack>
                        </Stack>



                        <Grid item xs={12} mt={5}>
                            {product === 'Remera unisex' && (
                                <>
                                    <Typography component='h3' mb={3} sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: '700' }} >
                                        Remeras Ultrapremium de algodón 24.1 peinado.
                                    </Typography>
                                    <Typography component='h3' sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} >
                                        Costura Reforzada en hombro y sisa. <br />
                                        Talles reales para adultos: Desde XS hasta XXXL.<br />
                                        Talles de Niños: Desde el 2 al 14.<br /><br />
                                        En Antistampa no vemos género, por ende todas nuestras prendas son unisex.
                                    </Typography>
                                </>
                            )}

                            {product === 'Tote' && (
                                <Typography variant='body1'>
                                    Bolsa de lienzo para acompañarte a todos lados. Llenala con tus libros, ambos y apuntes!
                                    <br /> Medida: 40x45 cm <br /> Tela: 100% algodón. Estampado.
                                </Typography>
                            )}

                            {product === 'antistampa' && (
                                <Typography variant='body1'>ANTISTAMPAANTISTAMPAANTISTAMPAANTISTAMPAANTISTAMPAANTISTAMPAANTISTAMPAANTISTAMPA</Typography>
                            )}
                            {product === 'buzo' && (
                                <Typography variant='body1'>BuzoBuzoBuzoBuzoBuzoBuzoBuzoBuzoBuzoBuzo</Typography>
                            )}

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ItemDetail