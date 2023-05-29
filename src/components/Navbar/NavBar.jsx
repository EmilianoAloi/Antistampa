import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom"
import { useState } from 'react';


import SearchButton from '../SearchButton/SearchButton';



const NavBar = () => {

    const [showNav, setShowNav] = useState(false);
    



    return (

        <header className=''>
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
                                {/* <NavDropdown.Item href="#">Peliculas y Series</NavDropdown.Item> */}
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
        </header>
    );
}


export default NavBar;


