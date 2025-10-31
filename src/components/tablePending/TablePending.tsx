import { Button, Col, FloatingLabel, Form, Row, Table } from "react-bootstrap";
import './tablePending.css';
export const TablePending = () => {
    const curr = new Date();
    curr.setDate(curr.getDate());
    const date = curr.toISOString().substr(0,10);
    return (
        <>
            <Row className="justify-content-end">
                <Col xs="12" sm="4">
                    <FloatingLabel
                        controlId="search"
                        label="Buscar"
                    >
                        <Form.Control type="text" placeholder="Buscar " className="shadow mb-3 mb-sm-0" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Table responsive="sm" className="table text-center align-middle ">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luis Jesus</td>
                        <td>Isaac Torres</td>
                        <td>
                            <Row className="justify-content-center">
                                <Col xs="auto">
                                    <input type="date" className="form-control text-white mb-3 mb-sm-0"  defaultValue={date}/>
                                </Col>
                                <Col xs="auto">
                                    <Button variant="outline-success mb-2 mb-sm-0">
                                        Crear mensualidad
                                    </Button>        
                                </Col>
                             </Row>
                </td>
            </tr>
        </tbody>
        </Table>
        </>
            )
}