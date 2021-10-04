import React from 'react';
import './Menubar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png'

const Menubar = () => {
    return (
        // navber section
        <Navbar bg="light p-4" variant="light">
            <Container>
                <img src={logo} alt="" />
                <Nav className="fs-6 fw-bold">
                    <Link to="/home" className="items">
                        <li>Home</li>
                    </Link>
                    <Link to="/service" className="items">
                        <li>Service</li>
                    </Link>
                    <Link to="/about" className="items">
                        <li>About</li>
                    </Link>
                    <Link to="/courses" className="items">
                        <li>Programmes</li>
                    </Link>
                    <Link to="/contact" className="items">
                        <li>Contact</li>
                    </Link >
                </Nav >
            </Container >
        </Navbar >
    );
};

export default Menubar;