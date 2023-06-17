import './ItemDetail.css'
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';

const ItemDetail = ({ id, name, price, img, product, stock }) => {

    const [addQty, setAddQty] = useState(0);



    const { addItem } = useContext(CartContext);

    const handleQty = (qty) => {
        setAddQty(qty);
        console.log("Productos Agregados:" + qty);
        const item = { id, name, price, product, img };
        addItem(item, qty);
    }

    return (
        <>
            <Container sx={{mb:'10rem'}}>
                <Grid container color='white' >

                    <Grid item xs={12} mb={3} gap={3}>
                        <Typography component='h2' fontWeight='500' letterSpacing={2} mb={0.5}
                            sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, marginTop: { sm: '2rem' } }} >
                            DETALLES DE PRODUCTO
                        </Typography>
                        <Stack className="line"></Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} mt={1} textAlign='center'>
                        <img className='imgDetail' src={img} alt={name} />
                    </Grid>

                    <Grid item xs={12} sm={6}  >
                        <Typography component='h3'
                            sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, marginTop: { sm: '4rem' } }} >

                            Producto: {product}
                        </Typography>

                        <Typography component='h3' fontWeight='800' mb={2}
                            sx={{ fontSize: { xs: '1.3rem', md: '2.2rem' } }} >

                            {name} <br /> ${price}
                        </Typography>

                        <Grid item mb={3}>
                            {/* <Talles /> */}
                        </Grid>

                        {

                            addQty > 0 ?
                                <Grid item xs={12}>


                                    <Link to='/cart' className='detailLinks'>
                                        <Button variant='contained' size='large' sx={{ width: '15rem' }}>
                                            Terminar Compra
                                        </Button>
                                    </Link>
                                </Grid> :
                                <Counter initial={1} stock={stock} addFunction={handleQty} />

                        }

                        {
                            addQty > 0 ?
                                <Grid item xs={12}>
                                    <Link to='/' className='detailLinks'>
                                        <Button variant='outlined'
                                            size='large'
                                            sx={{ width: '15rem', mt: '1rem', }}> Ver mas productos</Button>
                                    </Link>
                                </Grid> : ''
                        }






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
                                    TOTETOTETETOTETOTETETOTETOTETOTETETOTETETOTETOTETETOTETOTETE
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