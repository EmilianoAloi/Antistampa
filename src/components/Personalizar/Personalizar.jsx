import { Box, Typography, Stack, Grid, Container } from "@mui/material"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import PaymentIcon from '@mui/icons-material/Payment';


import remeraPersonalizada from '../../assets/remeraPerzonalizada.png'
// import buzoPersonalizado from '../../assets/buzoPersonalizado.jpg'
// import hoddiePersonalizado from '../../assets/hoddiePersonalizado.jpg'

const Personalizar = () => {


    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [prenda, setPrenda] = useState('');
    const [color, setColor] = useState('');
    const [talle, setTalle] = useState('');
    const [estampado, setEstampado] = useState('');
    const [ubicacion, setUbicacion] = useState('');



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


    return (




        <>
            <Box sx={{ color: 'white', textAlign: 'center', margin: '0 auto', marginBottom: '2rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                <Typography component='h2' fontWeight={700} className="heroTitle"
                    sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }} >
                    PERSONALIZA TU PRENDA</Typography>
                <Typography sx={{ color: 'white' }}><i>Con la foto o frase que elijas estampar</i> </Typography>
            </Box>

            <Container>
                <Grid container spacing={0} alignItems='center' justifyContent='center'>

                    <Grid item xs={12} md={12}>
                        <Stack gap={2} mb={2} mt={1} sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>
                            <Button variant="outlined" color="success" onClick={handleClickOpen}>1. tipo de prenda </Button>
                            <Button variant="outlined" color="success" onClick={handleClickOpen1}>2. Elegir talle</Button>
                            <Button variant="outlined" color="success" onClick={handleClickOpen2}>3. Elegir  color</Button>
                            <Button variant="outlined" color="success" onClick={handleClickOpen3}>4. tamaño del estampado</Button>
                            <Button variant="outlined" color="success" onClick={handleClickOpen4}>5. ubicacion del estampado</Button>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} sm={6} >
                        <Stack width='80%' sx={{ margin:'0 auto' }}><img src={remeraPersonalizada} alt="Remera Unisex" /></Stack>
                    </Grid>

                    <Grid item xs={6} sm={6}>

                        <Stack direction='column' gap={2}>
                            <Typography component='h3'
                                sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '3rem' } }} >
                                Personalizado:  <strong>{prenda}</strong>
                            </Typography>
                            <Stack direction='column' gap={0}>
                                <Typography sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '0.8rem' } }}>PRENDA</Typography>
                                <Typography component='h3'
                                    sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '1.7rem' } }} >
                                    Talle: <strong>{talle}</strong>
                                </Typography>
                                <Typography component='h3'
                                    sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '1.7rem' } }} >
                                    Color: <strong>{color}</strong>
                                </Typography>
                            </Stack>
                            <Stack direction='column'>
                                <Typography sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '0.8rem' } }}>ESTAMPADO</Typography>
                                <Typography component='h3'
                                    sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '1.2rem' } }} >
                                    Tamaño: <strong>{estampado}</strong>
                                </Typography>
                                <Typography component='h3'
                                    sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '1.2rem' } }} >
                                    Ubicacion: <strong>{ubicacion}</strong>
                                </Typography>
                            </Stack>
                            <Typography component='h3' fontWeight='800' mb={2}
                                sx={{ color: 'white', fontSize: { xs: '1.3rem', md: '3rem' } }} >
                                Precio: $3500
                            </Typography>
                            <Button variant='contained' size='large' color='success'
                                startIcon={<PaymentIcon />}
                                sx={{ textAlign: 'left', paddingRight: '36px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                                Terminar Compra
                            </Button>

                        </Stack>

                    </Grid>

                </Grid>
            </Container>











            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>ELEGIR PRENDA</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', color: 'success' }}>

                        <FormControl sx={{ m: 1, minWidth: '15rem', color: 'success' }}>
                            <InputLabel id="prenda-dialog-select-label" color='success' >Prenda:</InputLabel>
                            <Select
                                color='success'
                                labelId='prenda-select-label'
                                id="prenda-dialog-select"
                                value={prenda}
                                onChange={handleChange}
                                input={<OutlinedInput label="Prenda" />}
                            >
                                <MenuItem value="Remera">Remera</MenuItem>
                                <MenuItem value='Buzo'>Buzo</MenuItem>
                                <MenuItem value='Hoddie'>Hoodie</MenuItem>
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

                        <FormControl sx={{ m: 1, minWidth: '15rem' }}>
                            <InputLabel id="talle-dialog-select-label" color='success'>Talle:</InputLabel>
                            <Select
                                color='success'
                                labelId="talle-select-label"
                                id="talle-dialog-select"
                                value={talle}
                                onChange={handleChange1}
                                input={<OutlinedInput label="Talle" color='success' />}
                            >
                                <MenuItem value="X">X</MenuItem>
                                <MenuItem value='XS'>XS</MenuItem>
                                <MenuItem value='XL'>XL</MenuItem>
                                <MenuItem value='XXL'>XXL</MenuItem>
                            </Select>
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

                        <FormControl sx={{ m: 1, minWidth: '15rem' }}>
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

                        <FormControl sx={{ m: 1, minWidth: '15rem' }}>
                            <InputLabel id="estampado-dialog-select-label" color='success'>Tamaño de estampado:</InputLabel>
                            <Select
                                color='success'
                                labelId="estampado-select-label"
                                id="estampado-dialog-select"
                                value={estampado}
                                onChange={handleChange3}
                                input={<OutlinedInput label="Tamaño de estampado:" color='success' />}

                            >
                                <MenuItem value="Tamaño1">Tamaño 1</MenuItem>
                                <MenuItem value='Tamaño2'>Tamaño 2</MenuItem>
                                <MenuItem value='Tamaño3'>Tamaño 3</MenuItem>
                                <MenuItem value='Tamaño4'>Tamaño 4</MenuItem>
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
                <DialogTitle>SELECCION DE UBICACION</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

                        <FormControl sx={{ m: 1, minWidth: '15rem' }}>
                            <InputLabel id="ubicacion-dialog-select-label" color='success'>Tamaño de estampado:</InputLabel>
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
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose4} color='success'>Cancel</Button>
                    <Button onClick={handleClose4} color='success'>Ok</Button>
                </DialogActions>
            </Dialog>






        </>



    )
}

export default Personalizar