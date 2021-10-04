import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Course from '../../Course/Course';
import Header from '../Header/Header';

const Home = () => {
    const [course, setCourse] = useState([]);
    // json data load
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            {/* header component */}
            <Header></Header>
            <h1 className="fw-bold mt-5"><span className="text-success">Our</span> Courses:</h1>
            <Row xs={1} md={3} className="g-4 my-5">

                {
                    course.map((course, key) => <Course
                        key={key}
                        course={course}
                    ></Course>)
                }

            </Row>
        </div>
    );
};

export default Home;