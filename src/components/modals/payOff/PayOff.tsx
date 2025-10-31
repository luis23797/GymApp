import { useEffect } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"

export const PayOff = ({ show, handleClose }: any) => {
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
                <Modal.Title>Liquidación de la Deuda</Modal.Title>
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
                </Form>
                <div>Estas seguro de que quieres liquidar esta Deuda?</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Liquidar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}