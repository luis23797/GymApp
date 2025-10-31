import { Col, FloatingLabel, Form, Row, Modal, Button } from "react-bootstrap";
import { useEffect } from "react"
import "./register.css"
export const Register = ({ show, handleClose }: any) => {
    useEffect(() => {
        console.log("Abierto");
        return () => {
            console.log("Cerrado");

        }
    }, [])
    return (
        <Modal show={show} onHide={handleClose} size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Registro de usuario</Modal.Title>
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
                                controlId="lastName"
                                label="Apellido"
                            >
                                <Form.Control type="text" placeholder="Martinez Sanchez" className="shadow mb-3" />
                            </FloatingLabel>
                        </Col>
                        <Col xs="12">
                            <FloatingLabel
                                controlId="phone"
                                label="Telefono"
                            >
                                <Form.Control type="text" placeholder="3320458945" className="shadow mb-3" />
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
                    Registrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}