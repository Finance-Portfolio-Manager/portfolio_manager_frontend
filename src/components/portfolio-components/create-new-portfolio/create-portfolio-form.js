import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Label, Check } from "reactstrap"
import Account from "../../account-component/account-component"

export default function CreatePortfolioForm(props){
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
                    <Form.Check type="checkbox" label="Public" name="public" checked={props.isPublic} onChange={props.onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>            
        </Form>
    )
}