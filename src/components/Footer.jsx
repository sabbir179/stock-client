
import React from 'react';

import { FooterContainer, FooterWrapper,  } from './styles/Footer.styled';

import { WhatsApp } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <WhatsApp />  +1-408 600 2293 
            </FooterWrapper>
            <FooterWrapper>
                <EmailIcon /> contact@stockreaper.com 
            </FooterWrapper>
            <FooterWrapper>
                <CopyrightIcon />   StockRaper Inc 2021 
            </FooterWrapper>
           
          
        </FooterContainer>
    )
}

export default Footer
