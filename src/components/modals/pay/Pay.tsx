import { useEffect } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"

export const Pay = ({ show, handleClose }: any) => {
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
                <Modal.Title>Abono a mensualidad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="Mounth">
                        <Form.Label column xs="6">
                            Mes
                        </Form.Label>
                        <Col xs="6" >
                            <Form.Select aria-label="Default select example" className="text-white" >
                                <option>Jul-ago</option>
                                <option value="1">ago-sep</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="Cuantitive">
                        <Form.Label column xs="6">
                            Cantidad
                        </Form.Label>
                        <Col xs="6" >
                            <Form.Control type="number" placeholder="100" className="text-white" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Abonar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}