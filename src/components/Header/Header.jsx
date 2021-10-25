import React from 'react';
import {Navbar, Nav,Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../image/logo.png'


export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand >
            <NavLink to="/home">
                <img style= {{ width: '150px' }} src= {logo} alt="stockreaperlogo" />
            </NavLink>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            
            
          </Nav>
          <Nav>
            <NavLink className="me-3 text-dark text-decoration-none"  to="/">Home</NavLink>
            <NavLink className="me-3 text-dark text-decoration-none"  to="#about us">About us</NavLink>
            <NavLink className="me-3 text-dark text-decoration-none"  to="membership">Membership</NavLink>
            <NavLink className="me-3 text-dark text-decoration-none"  to="contact">Contact us</NavLink>
            <NavLink  className="me-3 text-dark text-decoration-none" to="login">Login </NavLink>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
