import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './login.css';
import logo from './revlogo.jpg';

export default function LoginForm(props){
    return(
        <div className="App">
            <Form>
                <div className="aroundLogo"><img className="logo" src={logo}/></div>
                <div className="form-inner">
                {/* <div> */}
                    
                {/* </div> */}
                <h4>Portfolio Manager</h4>
                <Form.Group className="form-group" controlId="formBasicUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control className="loginInput" placeholder="Enter your username" onChange={props.onChange}></Form.Control>
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" className="loginInput" placeholder="Enter your password" onChange={props.onChange}></Form.Control>
                </Form.Group>
                <button className="submitButton mt-2" type="submit" onClick={props.onSubmit}>Login</button>
                </div>
            </Form>
    </div>
    )
}