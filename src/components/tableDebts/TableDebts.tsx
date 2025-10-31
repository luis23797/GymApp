import { Table,Button, Col, Row, FloatingLabel, Form } from 'react-bootstrap';
import { Pay } from '../../components/modals/pay/Pay';
import { PayOff } from '../../components/modals/payOff/PayOff';
import { ModalHandler } from '../../hooks/ModalHandler';
import { useEffect } from 'react';
export const TableDebts = ()=>{
    const payOffModal = ModalHandler();
    const payModal = ModalHandler();
    useEffect(()=>{
        console.log("Table abierta");
        return ()=>{
            console.log("Table Cerrada");
        }
    })
    return (
        <>
         <Row className="justify-content-end">
                    <Col xs="12" sm="4">
                        <FloatingLabel
                            controlId="search"
                            label="Buscar"
                        >
                            <Form.Control type="text" placeholder="Buscar " className="shadow mb-3 mb-sm-0"/>
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
                            <Button variant="outline-light mb-2 mb-sm-0" onClick={payModal.handleShow}>
                                Abonar
                            </Button>
                            </Col>
                            <Col xs="auto">
                            <Button variant="outline-success mx-2" onClick={payOffModal.handleShow}>
                                Liquidar
                            </Button>
                            </Col>
                        </Row>
                    </td>
                </tr>
            </tbody>
            {payOffModal.show && <PayOff show={payOffModal.show} handleClose={payOffModal.handleClose}/>}
            {payModal.show && <Pay show={payModal.show} handleClose={payModal.handleClose}/>}
        </Table>
        </>
       
    )
}