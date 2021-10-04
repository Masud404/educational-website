import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        // from section
        <div className="row align-items-center">
            <div className="col-6">
                <h1 className="my-5 fw-bold">Stay <span className="text-success">Connected</span></h1>
                <Form className="ms-5">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <button type="button" className="btn btn-primary mb-5">Submit</button>
                </Form>
            </div>
            <div className="col-6 my-5">
                {/* Address section */}
                <div className="text-secondary fw-bold">
                    <h3>Address: Fulbari, Khulna, Banglades</h3>
                    <h4>
                        Phone :

                        +091111111111
                        <br></br>
                        +091111111111
                    </h4>
                    <h5>Email:</h5>
                    <h5>masud215502@gmail.com</h5>
                    <h5>education@email.com</h5>
                </div>

            </div>
        </div>
    );
};

export default Contact;