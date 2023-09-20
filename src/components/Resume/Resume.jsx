import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography } from "@mui/material"
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

import mpIcon from '../../assets/mercadopago.png'


const Resume = () => {

    const { shippingOption, shippingPrice, total } = useContext(CartContext);

    return (

        <>


            <TableContainer component={Paper} sx={{ maxWidth: 400, borderRadius: '10px', border: '3px solid yellow', margin: '0 auto', paddingX: '2rem', paddingY:'2.5rem' }}>
                <Typography color='primary' variant="h5" textAlign='center' marginBottom='1rem' >RESUMEN DE COMPRA</Typography>

                <Table sx={{ width: '100%', justifyContentL: 'center' }} aria-label="simple table">


                    <TableBody>
                        <TableRow>
                            <TableCell>Cantidad de productos:</TableCell>
                            <TableCell align="right">1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ display: 'flex', alignItems: 'center' }} >Opcion de Envio:</TableCell>
                            <TableCell align="right"> {shippingOption} </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mt={2}>
                    <Stack width='40%' >
                        <img src={mpIcon} alt='MercadoPago'/>
                    </Stack>
                    <Typography color='primary' fontSize='1.2rem' fontWeight={500}  >Total: ${total + shippingPrice}</Typography>
                </Stack>

            </TableContainer>
        </>
    );




}

export default Resume