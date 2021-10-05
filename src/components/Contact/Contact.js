import React from 'react';
import {Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap'
import './Contact.css';


const Treat = () => {
    return (
        <div className = 'contact'>
            <Container>
            <Row>
                <Col xs={12} md={12}>
                    <h3>Contact Us</h3>
                    <p>Location:
                    123, New Lenox Chicago, IL 60606</p>
                    <p>
                    Phone:
                    1(800)-456-789</p>
                    <p>
                    Email:
                    info@yoursite.com
                    </p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Treat;