import React from 'react';
import './service.css'
import {Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap'


const ServiceH = (props) => {
    // console.log(props)
    // const homeSlice = props.service.slice(3);
    // console.log(homeSlice);
    const {title, para, img} = props.service;


    return (
        <Col xs={12} md={3} className = 'main'>
            <div>
                <Image src = {img} className = 'img-fluid img'></Image>
                <h4 className = 'h4'>{title}</h4>
                <p className = 'p'>{para}</p>
            </div>
        </Col>        
    );
};

export default ServiceH;