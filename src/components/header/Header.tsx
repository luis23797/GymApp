import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { NavLink } from "react-router";
import { ModalHandler } from '../../hooks/ModalHandler';
import { Register } from "../modals/register/Register";
import Login from "../login/Login";

export const Header = () => {
    const ROUTES = {
        deubts: "debts"
    }
    const RegisterModal = ModalHandler();
    const LoginModal = ModalHandler();
    return (
        <>
            <Navbar bg="primary" expand="lg" variant="dark" className="justify-content-around sticky-top">
                <Col xs="auto" lg={4}>
                    <Navbar.Brand >Gym App</Navbar.Brand>
                </Col>
                <Col xs={3} lg="auto" className="align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex gap-2">
                            <NavLink className="nav-link" to={`/${ROUTES.deubts}`}>Administrar</NavLink>
                            <NavLink className="nav-link" to={`/`}>Home</NavLink>
                            <li className="btn nav-link" onClick={RegisterModal.handleShow}>Registro</li>
                            <li className="btn nav-link" onClick={LoginModal.handleShow}>Login</li>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
            {RegisterModal.show && <Register show={RegisterModal.show} handleClose={RegisterModal.handleClose}/>}
            {LoginModal.show && <Login show={LoginModal.show} handleClose={LoginModal.handleClose} />}
        </>
    )
}