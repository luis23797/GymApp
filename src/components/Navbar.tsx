import {Container, Nav, NavDropdown, Navbar as NavbarBs} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
export default function Navbar(){
    return (
        <>
        <NavbarBs expand="lg" bg='light' sticky='top'>
        <Container>
            <NavbarBs.Brand>Store</NavbarBs.Brand>
            <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBs.Collapse>
                <Nav className='d-flex justify-content-around w-100'>
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <NavDropdown title="Drop">
                        <NavDropdown.Item as={Link} to={"/"}>Hello</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </NavbarBs.Collapse>
        </Container>
        </NavbarBs>
        <Outlet></Outlet>
        </>
    )
}