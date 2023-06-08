import './ItemDetail.css'
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Container, Grid, Stack, Typography } from '@mui/material';

const ItemDetail = ({ id, name, price, img, product, description, cat, stock }) => {

    const [addQty, setAddQty] = useState(0);



    const { addItem } = useContext(CartContext);

    const handleQty = (qty) => {
        setAddQty(qty);
        console.log("Productos Agregados:" + qty);
        const item = { id, name, price, product };
        addItem(item, qty);

    }

    return (
        <>


            <Container>

                <Grid container color='white'>

                    <Grid item xs={12} mb={3}  >
                        <Typography component='h2' variant='h5' fontWeight='500' letterSpacing={2} mb={0.5}>
                            DETALLES DE PRODUCTO
                        </Typography>
                        <Stack className="line"></Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} mt={1}>
                        <img className='imgDetail' src={img} alt={name} />
                    </Grid>

                    <Grid item xs={12} sm={6} mt={2}>
                        <Typography component='h2' variant='h5'>
                            Producto: {product}
                        </Typography>

                        <Typography component='h2' variant='h2' fontWeight='800'>
                            {name} <br /> ${price}
                        </Typography>

                        {
                            addQty > 0 ? (<Link to='/cart'>Terminar Compra</Link>) : <Counter initial={1} stock={stock} addFunction={handleQty} />
                        }


                    </Grid>


                    <Grid className='desc' item xs={12}>

                        {product === 'Remera unisex' && (
                            <>
                                <Typography component='h3' variant='h4' mb={3}>
                                    Remeras Ultrapremium de algodón 24.1 peinado.
                                </Typography>
                                <Typography component='h3' variant='h5'>
                                    Costura Reforzada en hombro y sisa.
                                </Typography>
                                <Typography component='h3' variant='h5'>
                                    Talles reales para adultos: Desde XS hasta XXXL.
                                </Typography>
                                <Typography component='h3' variant='h5'>
                                    Talles de Niños: Desde el 2 al 14.
                                </Typography>
                                <Typography component='h3' variant='h5'>Colores: 30 disponibles.</Typography>
                                <Typography component='h3' variant='h5' mt={3}>
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
            </Container>






        </>
    )
}

export default ItemDetail