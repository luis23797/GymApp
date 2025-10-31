import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { NavLink } from "react-router";
import { ModalHandler } from '../../hooks/ModalHandler';
import { Register } from "../modals/register/Register";

export const Header = () => {
    const ROUTES = {
        deubts: ""
    }
    const RegisterModal = ModalHandler();
    return (
        <>
            <Navbar bg="primary" expand="lg" variant="dark" className="justify-content-around sticky-top mb-4">
                <Col xs="auto" lg={4}>
                    <Navbar.Brand >Noth Division</Navbar.Brand>
                </Col>
                <Col xs={3} lg="auto" className="align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink className="nav-link" to={`/${ROUTES.deubts}`}>Administrar</NavLink>
                            <li className="btn nav-link" onClick={RegisterModal.handleShow}>Registro</li>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
            {RegisterModal.show && <Register show={RegisterModal.show} handleClose={RegisterModal.handleClose}/>}
        </>
    )
}