import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./new_transaction_form.css";
import { Row, Col } from "react-bootstrap";
export default function NewTransactionForm(props){
    return (<div class="wholeform">
        <Form className="m-5 primary-color secondary-text">
            <div class="container">
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
            </div>
            <Row>
                <Col>
                <Button class="mx-2 secondary-text" name = "buy" value = "buy" variant="info" type="button" onClick={props.submitBuy} >Buy</Button>
                </Col>
                <Col>
                <Button class="mx-2 secondary-text" name = "sell" value = "sell" variant="info" type="button" onClick={props.submitSell} >Sell</Button>
                </Col>
            </Row>
        </Form>
    </div>)
}