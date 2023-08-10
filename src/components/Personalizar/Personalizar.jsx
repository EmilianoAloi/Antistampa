import { Box, Typography, Stack, Grid, Container, Fab, Modal, Backdrop, Fade, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, OutlinedInput, MenuItem, FormControl, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import PaymentIcon from '@mui/icons-material/Payment';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoSizeSelectLargeOutlinedIcon from '@mui/icons-material/PhotoSizeSelectLargeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import remeraPersonalizadaFrente from '../../assets/remeraPerzonalizada.png'
import buzoPersonalizado from '../../assets/buzoPersonalizado.jpg'
import hoddiePersonalizado from '../../assets/hoddiePersonalizado.jpg'
import totePersonalizado from '../../assets/totePersonalizado.jpg'
import colors from '../../assets/colors.png';
import talles from '../../assets/talles.jpg';
import Swal from "sweetalert2";

import { v4 } from "uuid";
import Print from "../Print/Print";
import { PersonalizeContext } from "../Context/PersonalizeContext";

const styleModal = {
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

const Personalizar = () => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const { addItem } = useContext(CartContext);
    const { setSelectedImage, imageURL } = useContext(PersonalizeContext);


    const handlePersonalizado = () => {


        if (prenda === '' || color === '' || talle === '' || estampado === '' || ubicacion === '') {

            Swal.fire({
                title: 'Falta seleccionar alguna preferencia',
                icon: 'warning',
            });



        } else if (imageURL === '') {
            Swal.fire({
                title: 'Falta subir estampado',
                icon: 'warning',
            });

        }


        else {
            addItem(item, 1);
            Swal.fire({
                title: 'Prenda personalizada agregada al carrito',
                icon: 'success',
            });
            setImgItem('')
            setPrenda('Remera Unisex');
            setColor('');
            setTalle('');
            setEstampado('');
            setUbicacion('');
            setSelectedImage(false);
            window.scrollTo(0, 0);
        }
    }

    // Estados Personalizar prenda

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [imgItem, setImgItem] = useState('')
    const [prenda, setPrenda] = useState('Remera Unisex');
    const [color, setColor] = useState('');
    const [talle, setTalle] = useState('');
    const [estampado, setEstampado] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [pricePrenda, setPricePrenda] = useState(0);
    const [priceTalle, setPriceTalle] = useState(0);
    const [priceEstampado, setPriceEstampado] = useState(0);
    const [priceUbicacion, setPriceUbicacion] = useState(0);
    const [newTotal, setNewTotal] = useState(0);




    // Estados Modales (tablas de talles y colores)

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [openModal1, setOpenModal1] = useState(false);
    const handleOpenModal1 = () => setOpenModal1(true);
    const handleCloseModal1 = () => setOpenModal1(false);

    const item = {
        id: v4(),
        prenda: prenda,
        talle: talle,
        color: color,
        estampado: estampado,
        ubicacion: ubicacion,
        price: 0,
        product: prenda + ' Personalizado/a',
        img: imgItem,
        imgPrint: imageURL,
        newTotal: newTotal,
        qty: 1,
        name: 'Prenda personalizada'
    };




    // Handles Preferencias

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClickOpen4 = () => {
        setOpen4(true);
    };


    const handleChange = (e) => {
        setPrenda(e.target.value);
    };
    const handleChange1 = (e) => {
        setTalle(e.target.value);
    };
    const handleChange2 = (e) => {
        setColor(e.target.value);
    };
    const handleChange3 = (e) => {
        setEstampado(e.target.value);
    };
    const handleChange4 = (e) => {
        setUbicacion(e.target.value);
    };


    const handleClose = (e, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const handleClose1 = (e, reason) => {
        if (reason !== 'backdropClick') {
            setOpen1(false);
        }
    };

    const handleClose2 = (e, reason) => {
        if (reason !== 'backdropClick') {
            setOpen2(false);
        }
    };

    const handleClose3 = (e, reason) => {
        if (reason !== 'backdropClick') {
            setOpen3(false);
        }
    };

    const handleClose4 = (e, reason) => {
        if (reason !== 'backdropClick') {
            setOpen4(false);
        }
    };



    // Logica de precios

    useEffect(() => {
        switch (prenda) {
            case 'Remera Unisex':
                setPricePrenda(7000);
                setImgItem(remeraPersonalizadaFrente);
                break;
            case 'Remera Niño':
                setPricePrenda(6000);
                setImgItem(remeraPersonalizadaFrente);
                break;
            case 'Buzo Oversize XXXL':
                setPricePrenda(17000);
                setImgItem(buzoPersonalizado);
                break;
            case 'Hoodie Oversize XXXL':
                setPricePrenda(17000);
                setImgItem(hoddiePersonalizado);
                break;
            case 'Tote':
                setPricePrenda(14000);
                setImgItem(totePersonalizado);
                break;
            default:
                setPricePrenda(0);
                break;
        }
    }, [prenda])


    useEffect(() => {
        switch (talle) {
            case 'X':
                setPriceTalle(0);
                break;
            case 'XS':
                setPriceTalle(0);
                break;
            case 'XL':
                setPriceTalle(0);
                break;
            case 'XXL':
                setPriceTalle(500);
                break;
            case 'XXXL':
                setPriceTalle(500);
                break;
            default:
                setPriceTalle(0);
                break;
        }
    }, [talle]);


    useEffect(() => {
        switch (estampado) {
            case 'Tamaño 1':
                setPriceEstampado(0);
                break;
            case 'Tamaño 2':
                setPriceEstampado(0);
                break;
            case 'Tamaño 3':
                setPriceEstampado(0);
                break;
            case 'Tamaño 4':
                setPriceEstampado(0);
                break;
            default:
                setPriceEstampado(0);
                break;
        }
    }, [estampado]);


    useEffect(() => {
        switch (ubicacion) {
            case 'Frente':
                setPriceUbicacion(0);
                break;
            case 'Dorso':
                setPriceUbicacion(0);
                break;
            case 'Frente + Dorso':
                setPriceUbicacion(1500);
                break;
            case 'Dorso + Frente':
                setPriceUbicacion(3000);
                break;
            default:
                setPriceUbicacion(0);
                break;
        };
    }, [ubicacion]);


    useEffect(() => {
        setNewTotal(pricePrenda + priceTalle + priceEstampado + priceUbicacion)
    }, [pricePrenda, priceTalle, priceEstampado, priceUbicacion]);



    return (
        <>
            <Box sx={{ color: 'white', textAlign: 'center', margin: '0 auto', marginBottom: '1rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                <Typography component='h2' fontWeight={700} className="heroTitle"
                    sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }} >
                    PERSONALIZA TU PRENDA</Typography>
                <Typography sx={{ color: 'white', fontSize: '.8rem', marginTop: '1rem', textAlign: 'center', fontWeight: '500', display: { md: 'none' } }}><i>Selecciona tus preferencias</i> </Typography>
            </Box>

            <Container>



                <Grid container spacing={3} alignItems='center' justifyContent='center'>

                    <Grid item className="mobilePreferencias" xs={12} sm={6} sx={{ display: { md: 'none' } }} >

                        <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: { xs: '0.5rem', md: '2rem' }, marginBottom: { xs: '1rem' } }}>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen}> <CollectionsOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.8rem' }} fontWeight={400} textAlign='center'>Prenda</Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen1}> <StraightenOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.8rem' }} fontWeight={400} textAlign='center'>Talle</Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen2}> <ColorLensOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.8rem' }} fontWeight={400} textAlign='center'>Color</Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen3}> <PhotoSizeSelectLargeOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.8rem' }} fontWeight={400} textAlign='center'>Tamaño </Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen4}> <MapOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.8rem' }} fontWeight={400} textAlign='center'>Posición</Typography>
                            </Stack>
                        </Stack>



                        <Stack sx={{ flexDirection: 'row', gap: '0rem', marginLeft: { xs: '0rem' }, justifyContent: { xs: 'space-evenly', md: 'start' } }}>
                            <Button color='success' variant='text' onClick={handleOpenModal} sx={{ paddingX: { xs: '8px', sm: '30px' }, fontSize: '10px', borderRadius: '20px' }} startIcon={<StraightenOutlinedIcon sx={{ padding: '0', fontSize: '10px' }} />}>Guia de talles</Button>
                            <Button color='success' variant='text' onClick={handleOpenModal1} sx={{ paddingX: { xs: '8px', sm: '30px' }, fontSize: '10px', borderRadius: '20px' }} startIcon={<ColorLensOutlinedIcon sx={{ padding: '0', fontSize: '10px' }} />}>Guia de colores</Button>
                        </Stack>




                        <Stack direction='column'>
                            <Typography component='h3'
                                sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }} >
                                Producto: <strong>{prenda}</strong>
                            </Typography>

                        </Stack>

                        <TableContainer component={Paper} sx={{ marginBottom: '1rem' }}>
                            <Table aria-label="simple table">

                                <TableHead>
                                    <TableRow>
                                        <TableCell>PRENDA</TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="left">ESTAMPADO</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">Talle: <strong>{talle}</strong> </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="left">Tamaño: <strong>{estampado}</strong></TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Color: <strong>{color}</strong> </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="left">Ubicacion: <strong>{ubicacion}</strong></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Stack sx={{ alignItems: 'center' }}>
                            <Print />
                        </Stack>

                    </Grid>

                    <Grid className="imgRender" item xs={12} sm={6} >
                        <Stack width='80%' sx={{ margin: '0 auto' }}>

                            {prenda === 'Remera Niño' && (
                                <img src={remeraPersonalizadaFrente} alt="Remera Niño" />
                            )}

                            {prenda === 'Remera Unisex' && (
                                <img src={remeraPersonalizadaFrente} alt="Remera Unisex" />
                            )}


                            {prenda === 'Buzo Oversize XXXL' && (
                                <img src={buzoPersonalizado} alt="Buzo" />
                            )}

                            {prenda === 'Hoodie Oversize XXXL' && (
                                <img src={hoddiePersonalizado} alt="Hoddie" />
                            )}

                            {prenda === 'Tote' && (
                                <img src={totePersonalizado} alt='Tote' />
                            )}



                        </Stack>
                    </Grid>

                    <Grid item className="mobilePrice" xs={12} sx={{ display: { md: 'none' } }}>
                        <Stack>
                            <Typography component='h3'
                                sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'start' }} >
                                Producto: <strong>{prenda}</strong>
                            </Typography>
                            <Typography component='h3' fontWeight='800' mb={2} mt={0}
                                sx={{ color: 'white', fontSize: { xs: '1.3rem', md: '1.5rem' }, textAlign: 'start' }} >
                                Total: ${item.newTotal}
                            </Typography>



                            <Button variant='contained' size='large' color='success' onClick={handlePersonalizado}
                                startIcon={<PaymentIcon />}
                                sx={{ textAlign: 'left', paddingRight: '36px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                                Terminar Compra
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid item className="desktop" xs={12} sm={6} sx={{ display: { xs: 'none', md: 'block' } }}  >
                        <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: '605000', marginBottom: '1.5rem' }}>SELECCIONA TUS PREFERENCIAS </Typography>


                        <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: { xs: '0.5rem', md: '2rem' }, marginBottom: { xs: '', md: '1rem' } }}>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen}> <CollectionsOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.9rem' }} fontWeight={400} textAlign='center'>Prenda</Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen1}> <StraightenOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.9rem' }} fontWeight={400} textAlign='center'>Talle</Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen2}> <ColorLensOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.9rem' }} fontWeight={400} textAlign='center'>Color</Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen3}> <PhotoSizeSelectLargeOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.9rem' }} fontWeight={400} textAlign='center'>Tamaño </Typography>
                            </Stack>

                            <Stack width='fit-content'>
                                <Fab color="success" aria-label="add" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }} onClick={handleClickOpen4}> <MapOutlinedIcon size='' />  </Fab>
                                <Typography sx={{ color: 'success.main', fontSize: '.9rem' }} fontWeight={400} textAlign='center'>Posición</Typography>
                            </Stack>
                        </Stack>

                        <Stack sx={{ flexDirection: 'row', gap: '0rem', marginLeft: { xs: '0rem' }, justifyContent: { xs: 'space-evenly', md: 'center' } }}>
                            <Button color='success' variant='text' onClick={handleOpenModal} sx={{ paddingX: { xs: '8px', sm: '30px' }, fontSize: '10px', borderRadius: '20px' }} startIcon={<StraightenOutlinedIcon sx={{ padding: '0', fontSize: '10px' }} />}>Guia de talles</Button>
                            <Button color='success' variant='text' onClick={handleOpenModal1} sx={{ paddingX: { xs: '8px', sm: '30px' }, fontSize: '10px', borderRadius: '20px' }} startIcon={<ColorLensOutlinedIcon sx={{ padding: '0', fontSize: '10px' }} />}>Guia de colores</Button>
                        </Stack>



                        <Stack direction='column'>
                            <Typography component='h3'
                                sx={{ color: 'white', fontSize: { xs: '1.5rem', sm: '3rem' }, marginBottom: '1rem' }} >
                                Producto: <strong>{prenda}</strong>
                            </Typography>

                            <TableContainer component={Paper} sx={{ marginBottom: '1rem' }}>
                                <Table aria-label="simple table">

                                    <TableHead>
                                        <TableRow>
                                            <TableCell>PRENDA</TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="left">ESTAMPADO</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Talle: <strong>{talle}</strong> </TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="left">Tamaño: <strong>{estampado}</strong></TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">Color: <strong>{color}</strong> </TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="left">Ubicacion: <strong>{ubicacion}</strong></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Print />

                            <Typography component='h3' fontWeight='800' mb={2} mt={0}
                                sx={{ color: 'white', fontSize: { xs: '1.3rem', md: '1.5rem' }, textAlign: 'end' }} >
                                Total: ${item.newTotal}
                            </Typography>

                            <Button variant='contained' size='large' color='success' onClick={handlePersonalizado}
                                startIcon={<PaymentIcon />}
                                sx={{ textAlign: 'left', paddingRight: '36px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                                Agregar al carrito
                            </Button>

                        </Stack>

                    </Grid>

                </Grid>
            </Container>

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>ELEGIR PRENDA</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', color: 'success' }}>
                        <FormControl sx={{ m: 1, minWidth: { xs: '12rem', sm: '15rem' } }}>
                            <InputLabel id="prenda-dialog-select-label" color='success' >Prenda:</InputLabel>
                            <Select
                                color='success'
                                labelId='prenda-select-label'
                                id="prenda-dialog-select"
                                value={prenda}
                                onChange={handleChange}
                                input={<OutlinedInput label="Prenda" />}
                            >
                                <MenuItem value="Remera Unisex">Remera Unisex</MenuItem>
                                <MenuItem value="Remera Niño">Remera Niño</MenuItem>
                                <MenuItem value='Buzo Oversize XXXL'>Buzo Oversize XXXL </MenuItem>
                                <MenuItem value='Hoodie Oversize XXXL'>Hoodie Oversize XXXL </MenuItem>
                                <MenuItem value='Tote'>Tote</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='success'>Cancel</Button>
                    <Button onClick={handleClose} color='success'>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog disableEscapeKeyDown open={open1} onClose={handleClose1}>
                <DialogTitle>ELEGIR TALLE</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

                        <FormControl sx={{ m: 1, minWidth: { xs: '12rem', sm: '15rem' } }}>
                            <InputLabel id="talle-dialog-select-label" color='success'>Talle:</InputLabel>


                            {prenda === 'Remera Unisex' ? (
                                <Select
                                    color='success'

                                    value={talle}
                                    onChange={handleChange1}
                                    input={<OutlinedInput label="Talle" color='success' />}
                                >
                                    <MenuItem value='XS'>XS</MenuItem>
                                    <MenuItem value="S">S</MenuItem>
                                    <MenuItem value="M">M</MenuItem>
                                    <MenuItem value="L">L</MenuItem>
                                    <MenuItem value="XL">XL</MenuItem>
                                    <MenuItem value='XXL'>XXL ( +$500 )</MenuItem>
                                    <MenuItem value='XXXL'>XXXL ( +$500 )</MenuItem>
                                </Select>

                            ) : prenda === 'Remera Niño' ? (<Select
                                color='success'

                                value={talle}
                                onChange={handleChange1}
                                input={<OutlinedInput label="Talle" color='success' />}
                            >
                                <MenuItem value='2'>2</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="6">6</MenuItem>
                                <MenuItem value="8">8</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value='12'>12</MenuItem>
                                <MenuItem value='14'>14</MenuItem>
                            </Select>) : (<Select
                                color='success'
                                labelId="talle-select-label"
                                id="talle-dialog-select"
                                value={talle}
                                onChange={handleChange1}
                                input={<OutlinedInput label="Talle" color='success' />}
                            >
                                <MenuItem value='Talle unico'>Talle Unico</MenuItem>
                            </Select>
                            )}




                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1} color='success'>Cancel</Button>
                    <Button onClick={handleClose1} color='success'>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog disableEscapeKeyDown open={open2} onClose={handleClose2}>
                <DialogTitle>ELEGIR COLOR</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

                        <FormControl sx={{ m: 1, minWidth: { xs: '12rem', sm: '15rem' } }}>
                            <InputLabel id="color-dialog-select-label" color='success'>Color:</InputLabel>
                            <Select
                                color='success'
                                labelId="color-select-label"
                                id="color-dialog-select"
                                value={color}
                                onChange={handleChange2}
                                input={<OutlinedInput label="Color" color='success' />}
                            >
                                <MenuItem value="Blanco">Blanco</MenuItem>
                                <MenuItem value='Negro'>Negro</MenuItem>
                                <MenuItem value='Amarillo'>Amarillo</MenuItem>
                                <MenuItem value='Verde'>Verde</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2} color='success'>Cancel</Button>
                    <Button onClick={handleClose2} color='success'>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog disableEscapeKeyDown open={open3} onClose={handleClose3}>
                <DialogTitle>TAMAÑO DE ESTAMPADO:</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

                        <FormControl sx={{ m: 1, minWidth: { xs: '12rem', sm: '15rem' } }}>
                            <InputLabel id="estampado-dialog-select-label" color='success'>Tamaño de estampado:</InputLabel>
                            <Select
                                color='success'
                                labelId="estampado-select-label"
                                id="estampado-dialog-select"
                                value={estampado}
                                onChange={handleChange3}
                                input={<OutlinedInput label="Tamaño de estampado:" color='success' />}

                            >
                                <MenuItem value="Tamaño 1">Tamaño 1</MenuItem>
                                <MenuItem value='Tamaño 2'>Tamaño 2</MenuItem>
                                <MenuItem value='Tamaño 3'>Tamaño 3</MenuItem>
                                <MenuItem value='Tamaño 4'>Tamaño 4</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose3} color='success'>Cancel</Button>
                    <Button onClick={handleClose3} color='success'>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog disableEscapeKeyDown open={open4} onClose={handleClose4}>
                <DialogTitle>UBICACION DE ESTAMPADO</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

                        <FormControl sx={{ m: 1, minWidth: { xs: '12rem', sm: '15rem' } }}>
                            <InputLabel id="ubicacion-dialog-select-label" color='success'>Ubicacion:</InputLabel>
                            <Select
                                color='success'
                                labelId="ubicacion-select-label"
                                id="ubicacion-dialog-select"
                                value={ubicacion}
                                onChange={handleChange4}
                                input={<OutlinedInput label="Tamaño de ubicacion:" />}

                            >
                                <MenuItem value="Frente">Frente</MenuItem>
                                <MenuItem value='Dorso'> Dorso</MenuItem>

                                {prenda === 'Buzo Oversize XXXL' || prenda === 'Hoodie Oversize XXXL' ? (
                                    <MenuItem value='Dorso + Frente'>Frente + Dorso ( +$3000 )</MenuItem>
                                ) : (prenda === 'Remera Unisex' || prenda === 'Remera Niño') ? (
                                    <MenuItem value='Frente + Dorso'>Frente + Dorso ( +$1500 )</MenuItem>
                                ) : null}



                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose4} color='success'>Cancel</Button>
                    <Button onClick={handleClose4} color='success'>Ok</Button>
                </DialogActions>
            </Dialog>

            {/* Modal Tables */}

            <Modal
                aria-labelledby="talle-transition-modal-title"
                aria-describedby="talle-transition-modal-description"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={styleModal}>
                        <img src={talles} alt='tabla de talles' className='tablaTalles' />
                    </Box>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="color-transition-modal-title"
                aria-describedby="color-transition-modal-description"
                open={openModal1}
                onClose={handleCloseModal1}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal1}>
                    <Box sx={styleModal}>
                        <img src={colors} alt='tabla de colores' className='tablaColores' />
                    </Box>
                </Fade>
            </Modal>

        </>
    )
}

export default Personalizar



