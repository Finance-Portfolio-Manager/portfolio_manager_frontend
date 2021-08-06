import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";
import './login.css';
import logo from './revlogo.jpg';

export default function LoginForm(props){
    return(
        <div className="App">
            <Form>
                <div className="aroundLogo"><img className="logo" src={logo} alt="revature logo"/></div>
                <div className="form-inner">
                <h4>Portfolio Manager</h4>
                <Form.Group className="form-group" controlId="formBasicUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control className="loginInput" name="username" placeholder="Enter your username" onChange={props.onChange}></Form.Control>
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" className="loginInput" name="password" placeholder="Enter your password" onChange={props.onChange}></Form.Control>
                </Form.Group>
                <button className="submitButton mt-2" type="submit" onClick={props.onSubmit}>Login</button>
                {props.error ? (<div id="wrongCredentials" className="form-group inner-form mt-2 mb-0 text-danger">Invalid username or password, please try again.</div>) : null}
                {props.networkError ? (<div id="networkIssue" className="form-group inner-form mt-2 text-danger">Uh oh, something went wrong.<br/>Please try again later.</div>) : null}
                </div>
            </Form>
    </div>
    )
}