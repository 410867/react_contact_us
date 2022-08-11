import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <>
                <Container style={{width: '600px'}}>
                    <h1 className="text-center">Contact us</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail" className = "mb-2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text>
                                We`ll never share your email with anyone else
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className = "mb-2">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder={"111111111111111111"}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox" className = "mb-2">
                            <Form.Check type="checkbox" label={"Check me out"}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </>
        );
    }
}

export default Contacts;