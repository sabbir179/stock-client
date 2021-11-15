import React from 'react';
import {Navbar, Nav,Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../constants';
import { useAuth } from '../../hooks/useAuth';
import logo from './../../image/logo.png'
import './Header.css'

export const Header = () => {
    const {authUser} = useAuth()
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand >
            <NavLink to="/">
                <img style= {{ width: '150px' }} src= {logo} alt="stockreaperlogo" />
            </NavLink>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            
            
          </Nav>
          <Nav className="">
            <NavLink className="me-3 text-dark nav-link text-decoration-none active"  to="/">Home</NavLink>
            <NavLink className="me-3 text-dark nav-link text-decoration-none"  to="/about-us">About us</NavLink>
            <NavLink className="me-3 text-dark nav-link text-decoration-none"  to="/membership">Membership</NavLink>
            <NavLink className="me-3 text-dark nav-link text-decoration-none"  to="/contact">Contact us</NavLink>
            {
                !authUser && <NavLink  className="me-3 text-dark nav-link text-decoration-none" to={Routes.LOGIN}>Login</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
