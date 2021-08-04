import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginForm(props){
    return(
        <Form>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" onChange={props.onChange}></Form.Control>
                <Form.Label>Password:</Form.Label>
                <Form.Control name="password" placeholder="Enter your password" onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={props.onSubmit}>Login</Button>
        </Form>
    )
}