
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid >
                <Navbar.Brand href="#home">
                    <img alt="logo" src={logo} width="60" height="60" className="d-inline-block align-top" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 "  navbarScroll >
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
    );
}


export default NavBar;