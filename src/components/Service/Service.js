import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap'
import ServiceH from './ServiceH';
import Home from '../Home/Home';



const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    

    

  
    return (

        <div>
        <Container>
        <Row>
            
        <h2 className = 'top_title'>Our Services</h2>
        {
            services.map(service => <ServiceH service = {service}></ServiceH>)
        }


        </Row>
        </Container>

        </div>
    );
};


export default Service;