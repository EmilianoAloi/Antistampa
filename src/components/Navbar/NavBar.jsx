import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (

        <header>
            <Navbar variant="dark" bg="dark" expand="lg" className='nav'  >
                <Container fluid className='justify-content-around'>
                    <Navbar.Brand href="#home" >
                        <img alt="logo" src={logo} width="120" height="120" className="d-inline-block align-top ms-5" />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-center' >
                        <Nav className="my-2 my-lg-0 gap-4" navbarScroll >
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <NavDropdown title="Productos" id="navbarScrollingDropdown" menuVariant="dark">
                                <NavDropdown.Item href="#">Bandas Internacionales</NavDropdown.Item>
                                <NavDropdown.Item href="#">Bandas Nacionales</NavDropdown.Item>
                                <NavDropdown.Item href="#">Peliculas y Series</NavDropdown.Item>
                                <NavDropdown.Item href="#">Totes</NavDropdown.Item>
                                <NavDropdown.Item href="#">Antistampa</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Talles</Nav.Link>
                            <Nav.Link href="#">Calidad</Nav.Link>
                            <Nav.Link href="#">Personalizados</Nav.Link>
                            <Nav.Link href="#">Preguntas Frecuentes</Nav.Link>
                            <Nav.Link href="#">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    );
}


export default NavBar;