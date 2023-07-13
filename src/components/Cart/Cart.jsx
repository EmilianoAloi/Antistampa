import { CartContext } from "../Context/CartContext";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button, Container, Stack, Typography, IconButton, } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';
import './Cart.css';





const Cart = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])



    const { cart, emptyCart, total, qtyTotal, delProduct } = useContext(CartContext)

    if (qtyTotal === 0) {
        return (
            <>
                <Container sx={{ color: 'white', textAlign: 'center', border: '1px solid yellow', padding: '2rem', maxWidth: '500px !important', mt: { xs: '5rem', md: '8rem' }, mb: '15rem' }} >
                    <Typography component='h2' variant="h5" fontWeight='800' >
                        No hay productos seleccionados 😔
                    </Typography>

                    <Link to='/productos' >
                        <Button size='large' variant='contained' startIcon={<SearchIcon />}
                            sx={{ fontWeight: '800', mt: '2rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                            Ver Productos
                        </Button>
                    </Link>
                </Container>
            </>
        )
    }

    return (

        <>
            <Container>
                <Stack color='white' fontFamily='Roboto' sx={{ display: { md: 'none' } }}>

                    {cart.map(product => <CartItem key={product.item.id} {...product} />)}

                    <Stack justifyContent='space-between' alignItems='flex-end' marginTop='1rem'>
                        <Typography component='h3' variant="body2"> Cantidad total: {qtyTotal} </Typography>
                        <Typography component='h3' variant="h5"> Total: ${total} </Typography>
                    </Stack>

                    <Stack gap={2} marginTop='2rem'>
                        <Button onClick={() => emptyCart()} color="error" variant="outlined" > Vaciar Carrito </Button>

                        <Link to='/productos' >
                            <Button variant='outlined' sx={{ width: '100%' }}> Ver mas productos</Button>
                        </Link>

                        <Link to='/checkout'>
                            <Button variant="contained" sx={{ width: '100%', marginBottom: '10rem' }}>Finalizar Compra</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Container>

            <Container sx={{ display: { xs: 'none', md: 'block' } }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>PRODUCTO</TableCell>
                                <TableCell align="right">PRECIO</TableCell>
                                <TableCell align="right">CANTIDAD</TableCell>
                                <TableCell align="right">SUBTOTAL</TableCell>
                                <TableCell align="right"></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {cart.map((product) => (
                                <TableRow
                                    key={product.item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" >
                                        <Stack sx={{ minHeight: '8rem' }} direction='row' gap={3} alignItems='center'>
                                            <img src={product.item.img} className="imgTable" alt={product.item.name}></img>
                                            <Stack direction='column'>
                                                {product.item.name} <br></br>
                                                {product.item.product}
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="right">${product.item.newTotal}</TableCell>
                                    <TableCell align="right">{product.qty}</TableCell>
                                    <TableCell align="right">${product.item.newTotal * product.qty}</TableCell>
                                    <TableCell align="right"> <IconButton onClick={() => delProduct(product.item.id)} disableRipple color='error' sx={{ marginLeft: '-4.5rem' }}>
                                        <DeleteForeverIcon sx={{ fontSize: '1.5rem' }} />
                                    </IconButton></TableCell>



                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>


            <Container>
                <Stack color='white' fontFamily='Roboto' sx={{ display: { xs: 'none', md: 'block' } }}>


                    <Stack justifyContent='space-between' alignItems='flex-end' marginTop='2rem' marginRight='2%'>
                        <Typography component='h3' variant="body2"> Cantidad total: {qtyTotal} </Typography>
                        <Typography component='h3' variant="h5"> Total: ${total} </Typography>
                    </Stack>

                    <Stack gap={2} marginTop='2rem'>
                        <Button onClick={() => emptyCart()} color="error" variant="outlined" > Vaciar Carrito </Button>

                        <Link to='/productos' >
                            <Button variant='outlined' sx={{ width: '100%' }}> Ver mas productos</Button>
                        </Link>

                        <Link to='/checkout'>
                            <Button variant="contained" sx={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '10rem', width: '100%', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>Finalizar Compra</Button>
                        </Link>

                        {console.log(cart)}
                    </Stack>

                </Stack>
            </Container>

        </>

    )
}

export default Cart