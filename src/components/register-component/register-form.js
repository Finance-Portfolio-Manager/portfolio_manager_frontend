import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function RegisterForm(props){
    return(
        <Form>
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your first name" onChange={props.onChange}></Form.Control>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control name="lastName" placeholder="Enter your last name" onChange={props.onChange}></Form.Control>
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" onChange={props.onChange}></Form.Control>
                <Form.Label>Username:</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" onChange={props.onChange}></Form.Control>
                <Form.Label>Password:</Form.Label>
                <Form.Control name="password" placeholder="Enter your password" onChange={props.onChange}></Form.Control>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control name="confirmpassword" placeholder="Enter your password" onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={props.onSubmit}>Register</Button>
        </Form>
    )
}