import React from 'react';
import {Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap'
import './About.css';
const About = () => {
    return (
        <div className = 'about'>
            <h2>About Us</h2>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                <Image src="about.jpg" rounded className = 'img-fluid'/>
                </Col>

                <Col xs={12} md={6}>
                    <h3>We Build Future with Education</h3>
                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explore.</p>
                </Col>

                <Col xs={12} md={12} className = 'about_details'>
                <p>Education is one of the most powerful things in life. It allows us to find the meaning behind everything and helps improve lives in a massive way.

                    Education gives us an understanding of the world around us and offers us an opportunity to use that knowledge wisely.

                    Irrespective of race, creed, and gender, education makes it possible for people to stand out as equal with all the other persons from different walks of life.

                    Overall, education is the platform that makes it possible to defeat all barriers.

                    In that respect, here are some powerful education quotes to help us appreciate the power of learning and gaining knowledge.</p>
                    <p>
                    Irrespective of race, creed, and gender, education makes it possible for people to stand out as equal with all the other persons from different walks of life.

                    Overall, education is the platform that makes it possible to defeat all barriers.

                    In that respect, here are some powerful education quotes to help us appreciate the power of learning and gaining knowledge.

                    Don’t forget to also check out of selection of quotes about logic as well as these inspirational graduation quotes on success and dreams.
                    </p>
                </Col>

            </Row>
        </Container>
        </div>
    );
};

export default About;