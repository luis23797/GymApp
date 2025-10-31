import { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap"
import { TableDebts } from '../../components/tableDebts/TableDebts';
import { TablePending } from "../../components/tablePending/TablePending";

export const Debst = () => {
    const [key, setKey] = useState('nearToExpire');
    return (<>
        <Container>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k:any) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="nearToExpire" title="Por Expirar">
                    {key==="nearToExpire" && <TableDebts/>}
                </Tab>
                <Tab eventKey="deubts" title="Deudas">
                    {key==="deubts" && <TableDebts/>}    
                </Tab>
                <Tab eventKey="pending" title="Pendientes" >
                   {key==="pending" && <TablePending/>}
                </Tab>
                <Tab eventKey="waiting" title="En espera" >
                   {key==="waiting" && <TablePending/>}
                </Tab>
            </Tabs>
        </Container>
    </>)
}