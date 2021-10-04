import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Event1 from '../../images/event-1.png'
import Event2 from '../../images/event-2.png'
import Event3 from '../../images/event-3.png'

const Courses = () => {
    return (
        <div>
            <h1 className="fw-bold text-dark mt-5">Our Event::</h1>
            <Row xs={1} md={3} className="g-4 my-5">
                {/* University all Event */}
                <Col>
                    {/* global*/}
                    <Card>
                        <Card.Img variant="top" src={Event1} />
                        <Card.Body>
                            <Card.Title>Global Conference on Business.</Card.Title>
                            <Card.Text>
                                Date: 1st December
                            </Card.Text>
                            <Card.Text>
                                Time: 10:00 am
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* social sciences and education event */}
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Event2} />
                        <Card.Body>
                            <Card.Title>Social Sciences & Education.</Card.Title>
                            <Card.Text>
                                Date:23 December
                            </Card.Text>
                            <Card.Text>
                                Time: 11:00 am
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* adcdemic conference maui */}
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Event3} />
                        <Card.Body>
                            <Card.Title>Academic Conference Maui.</Card.Title>
                            <Card.Text>
                                Date:15 January
                            </Card.Text>
                            <Card.Text>
                                Time: 1:00 pm
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Courses;