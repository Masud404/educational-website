import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllService = (props) => {
    const { name, img, duration, cost } = props.course;
    return (
        // some courses list
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="fw-bold">Duration: {duration}</Card.Text>
                    <Card.Text className="fw-bold">Cost: ${cost}</Card.Text>
                    <button type="button" className="btn btn-success mb-3 px-3">Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllService;