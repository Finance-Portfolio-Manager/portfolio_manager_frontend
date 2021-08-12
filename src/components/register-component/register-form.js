import 'bootstrap/dist/css/bootstrap.min.css';
import {Form } from "react-bootstrap";
import "./register.css";
import logo from "./revlogo.jpg";

export default function RegisterForm(props) {
    return (
        <div className="App primary-color">
            <Form>
                <div className="aroundLogo primary-color primary-text">
                    <img className="logo mx-5 primary-color" alt="" src={logo} />
                </div>

                <div className="form-inner primary-color primary-text">
                    <div className="primary-text h4">Portfolio Manager</div>
                    <h6><em>Account Registration</em></h6>
                    <Form.Group className="form-group" controlId="form-email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" placeholder="Enter your email" onChange={props.onChange} required />
                    </Form.Group>
                    {props.emailError ? (<div id="emailIssue" className="form-group inner-form mt-3 text-danger">Please enter a valid email.</div>) : null}

                    <Form.Group className="form-group" controlId="form-username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control name="username" placeholder="Enter your username" onChange={props.onChange} required />
                    </Form.Group>
                    {props.usernameError ? (<div id="usernameIssue" className="form-group inner-form mt-3 text-danger">Sorry, this username is taken.</div>) : null}

                    <Form.Group className="form-group" controlId="form-password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Enter your password" onChange={props.onChange} required />
                    </Form.Group>
                    {props.passwordError ? (<div id="passwordIssue" className="form-group inner-form mt-3 text-danger">Invalid password. Must be at least 8 characters long and contain at least 1 special character.</div>) : null}

                    <Form.Group className="form-group" controlId="form-confirm-password">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control name="confirmPassword" type="password" placeholder="Re-enter your password" onChange={props.onChange} required />
                    </Form.Group>
                    {props.cPasswordError ? (<div id="cPasswordIssue" className="form-group inner-form mt-3 text-danger">Passwords do not match</div>) : null}

                    <button className="submitButton mt-2 accent-color" type="submit" onClick={props.onSubmit}>Register</button>
                </div>
            </Form>
        </div>
    )
}