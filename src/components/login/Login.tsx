import { Col, FloatingLabel, Form, Row, Modal, Button } from "react-bootstrap";
import { useEffect } from "react";
import "./login.css"
export default function Login({show,handleClose}){
     useEffect(() => {
        console.log("Abierto");
        return () => {
            console.log("Cerrado");

        }
    }, [])
     return (
        <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Inicio de sesion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col xs="12">
                            <FloatingLabel
                                controlId="name"
                                label="Nombre"
                            >
                                <Form.Control type="text" placeholder="Edgar " className="shadow mb-3" />
                            </FloatingLabel>
                        </Col>

                        <Col xs="12">
                            <FloatingLabel
                                controlId="password"
                                label="Password"
                            >
                                <Form.Control type="secret" placeholder="" className="shadow mb-3" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Iniciar sesion
                </Button>
            </Modal.Footer>
        </Modal>
    )
}