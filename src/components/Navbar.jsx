import React from 'react';

import {Container , Wrapper, Logo,  Right, Language} from './styles/Navbar.styled';
import logo from './../image/logo.png'
import { NavLink } from 'react-router-dom';




const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src = {logo} alt="stockReaperLogo" />
                
                <Right>
                    <Language><p>
                         <NavLink exact
                        to="/" 
                        activeStyle={{
                            fontWeight: "bold",
                            color: '#F7B538',
                          }}
                    > Home
                     </NavLink> </p> </Language>
                    <Language><p> <NavLink 
                        to="/abouts" exact
                        activeStyle={{
                            fontWeight: "bold",
                            color: '#F7B538',
                          }}
                    > About us </NavLink> </p> </Language>
                    <Language><p><NavLink 
                        to="/membership" exact
                        activeStyle={{
                            fontWeight: "bold",
                            color: '#F7B538',
                          }}
                        
                        > Membership</NavLink></p> </Language>
                    <Language><p><NavLink 
                        to="/contact" exact
                        activeStyle={{
                            fontWeight: "bold",
                            color: '#F7B538',
                          }} 
                        
                        > Contact</NavLink></p> </Language>
                    <Language><p><NavLink to="/login" > LogIn</NavLink></p> </Language>
                        
                        
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
