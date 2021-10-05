import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className = 'footer'>
            <Container>
                <Row>
                    <Col md={12}>
                        <p>Endowment <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2021 All rights reserved. Terms of use and Privacy Policy
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;