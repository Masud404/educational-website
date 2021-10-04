import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';

const Service = () => {
    const [course, setCourse] = useState([]);
    // another data load
    useEffect(() => {
        fetch('./data2.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <h1 className="fw-bold my-5 text-dark">Our All Service::</h1>
            <Row xs={1} md={3} className="g-4 my-3">
                {
                    course.map((course, key) => <AllService
                        key={key}
                        course={course}
                    ></AllService>)
                }
            </Row>
        </div>
    );
};

export default Service;