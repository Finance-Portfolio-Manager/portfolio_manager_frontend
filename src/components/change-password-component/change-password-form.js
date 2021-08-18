import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";
//import './login.css';
import logo from '../images/logo-white.svg';

export default function ChangePasswordForm(props){
    return(
        <div data-testid="login-form" className='App__container text-white'>
            <Form className="form__style global__blur-effect global__dropshadow global__zoom">
                <div className="aroundLogo">
                    <img className="logo" src={logo} alt="revature logo"/>
                </div>
                <div className="form-inner">
                    <h4 className='form-header'>APEX Stocks</h4>
                    <Form.Group className="form-group" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control className="ChangePasswordInput" name="email" placeholder="Enter your Email" onChange={props.handleEmailChangeEventListener}></Form.Control>
                    </Form.Group>
                    <button className="submitButton mt-2 global__button-effect" type="submit" onClick={props.handleGetCodeEventListener}>Get Code</button>
                    <h5 className='pt-3'>{props.codeMessageState}</h5>
                    <Form.Group className="form-group" controlId="formBasicCode">
                        <Form.Label>Confirmation Code:</Form.Label>
                        <Form.Control type="number" className="ChangePasswordInput" name="code" placeholder="Enter your code" onChange={props.handleOtherChangeEventListener}></Form.Control>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" className="ChangePasswordInput" name="password" placeholder="Enter your password" onChange={props.handleOtherChangeEventListener}></Form.Control>
                    </Form.Group>

                    <Form.Group className = "form-group" controlId="form-confirm-password">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control name="confirmPassword" type="password" placeholder="Re-enter your password" onChange={props.handleOtherChangeEventListener} required/>  
                    </Form.Group>
                    {/* {props.cPasswordError ? (<div id="cPasswordIssue" className="form-group inner-form mt-3 text-danger">Passwords do not match</div>) : null} */}
                    <button className="submitButton mt-2 global__button-effect" type="submit" onClick={props.handleSubmitEventListener}>Confirm</button>
                    <h5 className='pt-3'>{props.confirmMessageState}</h5>
                </div>
            </Form>
    </div>
    )
}