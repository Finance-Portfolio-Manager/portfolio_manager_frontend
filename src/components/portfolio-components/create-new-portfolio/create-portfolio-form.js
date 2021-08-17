import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Label, Check } from "reactstrap"

export default function CreatePortfolio(props){
    return(
            <Form onSubmit={props.onSubmit}>
                <Form.Group>
                    <Form.Label>
                        Portfolio Name
                    </Form.Label>
                    <Form.Control
                        name="name"
                        value={props.name}
                        onChange={props.onChange}/>
                    <Form.Check type="checkbox" label="Public" name="isPublic" checked={props.isPublic} onChange={props.onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>            
        </Form>
    )
}