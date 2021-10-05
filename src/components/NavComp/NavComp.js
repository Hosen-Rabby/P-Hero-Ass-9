import React from 'react';
import {Navbar, Container, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import Service from '../Service/Service';
import ServiceH from '../Service/ServiceH';
  

const NavComp = () => {
    return (
        <Router>
        <div>
            <Navbar bg="dark" variant = {'dark'} expand="lg">
  <Container>
    <Navbar.Brand href=''>Endowment</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link as = {Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as = {Link} to={"/about"}>About Us</Nav.Link>
        <Nav.Link as = {Link} to={"/services"}>Services</Nav.Link>
        <Nav.Link as = {Link} to={"/contact"}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>

</Navbar>


<Switch>
<Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
              <Service></Service>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        </div>
        </Router>
    );
};

export default NavComp;