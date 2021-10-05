import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap'
import AboutH from '../About/AboutH';
import Service from '../Service/Service';
import HomeH from './HomeH';



const Home = () => {

    // for hope page display
    const [servicesH, setServicesH] = useState([]);

    useEffect(() => {
        fetch('./servicesDbH.JSON')
        .then(res => res.json())
        .then(data =>setServicesH(data))
    }, [])

    return (
        <div>
            <Image src="edu.jpg" rounded className = 'img-fluid'/>
            
                
        {
            servicesH.map(serviceH => <HomeH serviceH = {serviceH}></HomeH>)
        }

              
        </div>
    );
};

export default Home;