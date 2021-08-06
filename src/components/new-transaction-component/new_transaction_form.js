import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./new_transaction_form.css";

export default function NewTransactionForm(props){

    return (<div class="wholeform">
        <Form>
            <div class="container">
                <Button value = "buysell" variant="info" type="button" onClick={props.buyConfirm} >Buy</Button>
                <Button value = "buysell" variant="info" type="button" onClick={props.buyConfirm} >Sell</Button>
            </div>
            <div class="container">
                <Form.Group>
                    <Form.Label>Stock Symbol:</Form.Label>
                    <Form.Control name="stocksymbol" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control name="quantity" type="number" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Price:</Form.Label>
                    <Form.Control name="price" type="number" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Date:</Form.Label>
                    <Form.Control name="date" type="number" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Note:</Form.Label>
                    <Form.Control name="note" type="number" onChange={props.handleChange}></Form.Control>

                </Form.Group>
            </div>
            <div class="container">
                <Button variant="info" type="submit" onClick={props.submitConfirm} >Add New Transaction</Button>
            </div>
        </Form>
    </div>)
}
