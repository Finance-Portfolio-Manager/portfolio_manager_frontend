import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./new_transaction_form.css";
<<<<<<< HEAD
import Navigation from "../navigation/navigation";
// new-transaction__wholeform
//new-transaction__form'
export default function NewTransactionForm(props) {
  return (
    <div className="container-fluid p-0">
      <div className="App__container secondary-color">
        <Form className="form__style global__blur-effect--light global__dropshadow global__zoom">
          <div className="new-transaction__container">
            <Button
              className="new-transaction__button global__button-effect"
              name="buy"
              value="buysell"
              variant="info"
              type="button"
              onClick={props.buyConfirm}
            >
              Buy
            </Button>
            <Button
              className="new-transaction__button global__button-effect"
              name="sell"
              value="buysell"
              variant="info"
              type="button"
              onClick={props.buyConfirm}
            >
              Sell
            </Button>
          </div>
          <div className="new-transaction__container">
            <Form.Group>
              <Form.Label>Stock Symbol:</Form.Label>
              <Form.Control
                name="stocksymbol"
                onChange={props.handleChange}
              ></Form.Control>
=======
import { Row, Col } from "react-bootstrap";
>>>>>>> team1

              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                name="shareAmount"
                type="number"
                onChange={props.handleChange}
              ></Form.Control>

<<<<<<< HEAD
              <Form.Label>Price:</Form.Label>
              <Form.Control
                name="sharePrice"
                type="number"
                onChange={props.handleChange}
              ></Form.Control>
=======
    return (<div class="wholeform">
        <Form className="m-5 primary-color secondary-text">

            <div class="container">
                <Form.Group>
                    <Form.Label className="m-2">Stock Symbol:</Form.Label>
                    <Form.Control name="stockSymbol" onChange={props.handleChange}></Form.Control>
>>>>>>> team1

              <Form.Label>Date:</Form.Label>
              <Form.Control
                name="date"
                type="date"
                onChange={props.handleChange}
              ></Form.Control>

<<<<<<< HEAD
              <Form.Label>Note:</Form.Label>
              <Form.Control
                name="note"
                onChange={props.handleChange}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="new-transaction__container ">
            <Button
              className="new-transaction__button global__button-effect"
              variant="info"
              type="submit"
              onClick={props.submitConfirm}
            >
              Add New Transaction
            </Button>
            <Button
              className="new-transaction__button global__button-effect"
              variant="info"
              type="submit"
              onClick={props.getTransaction}
            >
              Test Get Transaction
            </Button>
          </div>
=======
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
>>>>>>> team1
        </Form>
      </div>
    </div>
  );
}
