// import './NavBar.css'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, NavLink } from "react-router-dom"

import { AppBar, Button, Container, Drawer, IconButton, Stack, Toolbar } from "@mui/material";
import NavListDrawer from "../NavListDrawer/NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from '../CartWidget/CartWidget';
import SearchButton from "../SearchButton/SearchButton";


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

            <AppBar position="fixed">
                <Toolbar sx={{ gap: 5, justifyContent: 'space-between' }} >

                    <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>

                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <Stack sx={{ 
                        display: { xs: 'none', sm: 'block' } }}
                        display='flex'
                        flexDirection='row'
                        s
                    >
                        <Button component='a' >INICIO</Button>
                        <Button component='a'>PRODUCTOS</Button>
                        <Button component='a'>PERSONALIZADOS</Button>
                        <Button component='a'>DUDAS</Button>
                        <Button component='a'>CONTACTO</Button>
                    </Stack>

                    <CartWidget />



                </Toolbar>
            </AppBar>

            <Button
                variant="contained"
            >
                ABRIR
            </Button>

            <Drawer
                open={open}
                anchor='left'
                onClose={() => setOpen(false)}
            >



                <NavListDrawer />

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