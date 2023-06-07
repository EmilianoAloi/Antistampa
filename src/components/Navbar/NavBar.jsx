
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar } from "@mui/material";
import NavListDrawer from "../NavListDrawer/NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


// import SearchButton from '../SearchButton/SearchButton';

// const navLinks = [
//     {title: 'INICIO', path: '#'},
//     {title: 'REMERAS', path: '#'},
//     {title: 'PERSONALIZADOS', path: '#'},
//     {title: 'DUDAS', path: '#'},
//     {title: 'CONTACTO', path: '#'}
// ]


const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="sticky" sx={{ width: { lg: '60vw' } }}>
                <Toolbar component='nav' sx={{ gap: 5, justifyContent: 'space-evenly' }}>
                    <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
                        <MenuIcon color='primary' fontSize='medium' />
                    </IconButton>

                    <img className="logoMobile" src="../img/logo.png" alt="Logo" />

                    <IconButton sx={{ display: { xs: 'block', sm: 'none' }, }}>
                        <CartWidget />
                    </IconButton>

                    <Stack
                        className='navlinks'
                        component='ul'
                        textAlign='center'
                        flexDirection='row'
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            color: 'primary',
                            textDecoration: 'none'
                        }}
                    >
                        <Button component={NavLink} to='/' >INICIO</Button>
                        <Button component='li'>PRODUCTOS</Button>
                        <Button component='li'>PERSONALIZADOS</Button>
                        <Button component='li'>DUDAS</Button>
                        <Button component='li'>CONTACTO</Button>
                    </Stack>

                    <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <CartWidget />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor='left'
                onClose={() => setOpen(false)}
            >
                <NavListDrawer setOpen={setOpen} />
            </Drawer>
        </>
    );
}

export default NavBar;


/*
<Navbar variant="dark" bg="dark" expand="lg" className='nav'  >
                <Container fluid className='navbarContent d-flex flex-column justify-content-around '>
                    <Navbar.Brand as={Link} to='/'>
                        <img alt="logo" src='../img/logo.png' className="logo ms-3 align-top" />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-center' >

                        <Nav className="my-2 my-lg-0 gap-4 d-flex align-items-center" navbarScroll >

                            <SearchButton />

                            <Nav.Link as={NavLink} to='/'>INICIO</Nav.Link>
                            <NavDropdown className='navLink' title="PRODUCTOS" id="navbarScrollingDropdown" menuVariant="dark">
                                <NavDropdown.Item as={NavLink} className='navLink' to='./categoria/internacional'>Bandas Internacionales</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} className='navLink' to='./categoria/nacional'>Bandas Nacionales</NavDropdown.Item>
                                 <NavDropdown.Item href="#">Peliculas y Series</NavDropdown.Item> 
                                <NavDropdown.Item as={NavLink} className='navLink' to='./categoria/tote'>Totes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='navLink' disabled>PERSONALIZAR</Nav.Link>
                            <Nav.Link className='navLink' disabled>DUDAS</Nav.Link>
                            <Nav.Link className='navLink' disabled>ESCRIBINOS</Nav.Link>
                            <CartWidget />


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            */