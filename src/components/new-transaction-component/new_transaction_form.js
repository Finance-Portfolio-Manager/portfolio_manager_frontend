import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./new_transaction_form.css";

export default function NewTransactionForm(props){

    return (<div class="wholeform">
        <Form>
            <div class="container">
                <Button className='new-transaction__button' name = "buy" value = "buysell" variant="info" type="button" onClick={props.buyConfirm} >Buy</Button>
                <Button className='new-transaction__button' name = "sell" value = "buysell" variant="info" type="button" onClick={props.buyConfirm} >Sell</Button>
            </div>
            <div class="container">
                <Form.Group>
                    <Form.Label>Stock Symbol:</Form.Label>
                    <Form.Control name="stocksymbol" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control name="shareAmount" type="number" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Price:</Form.Label>
                    <Form.Control name="sharePrice" type="number" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Date:</Form.Label>
                    <Form.Control name="date" type="date" onChange={props.handleChange}></Form.Control>

                    <Form.Label>Note:</Form.Label>
                    <Form.Control name="note" onChange={props.handleChange}></Form.Control>

                </Form.Group>
            </div>
            <div class="container">
                <Button className='new-transaction__button' variant="info" type="submit" onClick={props.submitConfirm} >Add New Transaction</Button>
                <Button className='new-transaction__button' variant="info" type="submit" onClick={props.getTransaction} >Test Get Transaction</Button>
            </div>
        </Form>
    </div>)
}
