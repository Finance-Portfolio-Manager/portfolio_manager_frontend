import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button,Form } from "react-bootstrap";
import "./register.css";
import logo from "./revlogo.jpg";

export default function RegisterForm(props){
    return(
        <div className = "App">
            <Form>
                <div className = "aroundLogo">
                    <img className = "logo" alt="" src = {logo}/>
                </div>
                
                <div className = "form-inner">
                    <h4>Portfolio Manager</h4>
                    <h6><em>Account Registration</em></h6>
                    <Form.Group controlId="form-fname">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control name="firstName" placeholder="Enter your first name" onChange={props.onChange}/>
                    </Form.Group>

                    <Form.Group className = "form-group" controlId="form-lname">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control name="lastName" placeholder="Enter your last name" onChange={props.onChange}/>
                    </Form.Group>

                    <Form.Group className = "form-group" controlId="form-email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" placeholder="Enter your email" onChange={props.onChange}/>
                    </Form.Group>

                    <Form.Group className = "form-group" controlId="form-username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control name="username" placeholder="Enter your username" onChange={props.onChange}/>
                    </Form.Group>

                    <Form.Group className = "form-group" controlId="form-password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name="password" placeholder="Enter your password" onChange={props.onChange}/>
                    </Form.Group>

                    <Form.Group className = "form-group" controlId="form-confirm-password">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control name="confirmPassword" placeholder="Re-enter your password" onChange={props.onChange}/>  
                    </Form.Group>

                    <button className = "submitButton mt-2" type="submit" onClick={props.onSubmit}>Register</button>
                </div>
            </Form>
        </div>
    )
}