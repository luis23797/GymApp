import { Card } from "react-bootstrap";

export default function Footer(){
  
    return (
        <>
        <Card bg="dark" className="rounded-0 w-100" style={{position:"absolute",bottom:"0"}}>
            <Card.Body>
                <h1 className="text-white">Hello</h1>
            </Card.Body>
        </Card>
        </>
    )
}