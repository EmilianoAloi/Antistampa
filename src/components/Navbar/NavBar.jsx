import './NavBar.css'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom"
 

const NavBar = () => {

    return (

        <header className=''>
            <Navbar variant="dark" bg="dark" expand="lg" className='nav'  >
                <Container fluid className='navbarContent d-flex flex-column justify-content-around '>
                    <Navbar.Brand as={Link} to='/'>
                        <img alt="logo" src={logo} width="100" height="100" className="d-inline-block align-top ms-5" />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-center' >
                        <Nav className="my-2 my-lg-0 gap-4" navbarScroll >
                            <Nav.Link as={NavLink} to='/'>INICIO</Nav.Link>
                            <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown" menuVariant="dark">
                                <NavDropdown.Item as={NavLink} to='./categoria/internacional'>Bandas Internacionales</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='./categoria/nacional'>Bandas Nacionales</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#">Peliculas y Series</NavDropdown.Item> */}
                                <NavDropdown.Item as={NavLink} to='./categoria/tote'>Totes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link disabled>PERSONALIZADOS</Nav.Link>
                            <Nav.Link disabled>DUDAS</Nav.Link>
                            <Nav.Link disabled>ESCRIBINOS</Nav.Link>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


export default NavBar;


