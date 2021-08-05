import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./register.css";
import logo from "./revlogo.jpg";

export default function RegisterForm(props){
    return(
        <div className = "App">
            <Form>
                <div className = "aroundLogo">
                    <img className = "logo" src = {logo}/>
                </div>
                <h4>Portfolio Manager</h4>
                <Form.Group className = "form-group" controlId="form-fname">
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
                    <Form.Control name="confirmpassword" placeholder="Enter your password" onChange={props.onChange}/>  
                </Form.Group>

                <button className = "submitButton" type="submit" onClick={props.onSubmit}>Register</button>
            </Form>
        </div>
    )
}