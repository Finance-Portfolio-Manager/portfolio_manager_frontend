import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./new_transaction_form.css";
import { Row, Col } from "react-bootstrap";
import { Container } from "reactstrap";
export default function NewTransactionForm(props){
    return (
        <Form className="mx-5 mb-5">
                <Form.Group>
                    <Form.Label className="m-2">Stock Symbol:</Form.Label>
                    <Form.Control name="stockSymbol" onChange={props.handleChange}></Form.Control>
                    <Form.Label  className="m-2">Quantity:</Form.Label>
                    <Form.Control name="transactionQuantity" type="number" onChange={props.handleChange}></Form.Control>
                    <Form.Label  className="m-2">Price:</Form.Label>
                    <Form.Control name="sharePrice" type="number" onChange={props.handleChange}></Form.Control>
                    <Form.Label  className="m-2">Date:</Form.Label>
                    <Form.Control name="dateTime" type="date" onChange={props.handleChange}></Form.Control>
                </Form.Group>
            <Container className='d-flex justify-content-end pt-3'>
            <Row >
                <Col >
                <Button className="mx-2 global__button-effect" name = "buy" value = "buy" variant="info" type="button" onClick={props.submitBuy} >Buy</Button>
                </Col>
                <Col>
                <Button className="mx-2 global__button-effect" name = "sell" value = "sell" variant="info" type="button" onClick={props.submitSell} >Sell</Button>
                </Col>
            </Row>
            </Container>
        </Form>
    )
}
