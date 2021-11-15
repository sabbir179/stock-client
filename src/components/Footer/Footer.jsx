import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faMailBulk, faCopyright } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
       <Row  className="text-center ">  
            <Col xs={12} md={4} >
                <span className="me-3"><FontAwesomeIcon icon={faMobile} /></span><span>+1-408 600 2293</span> 
            </Col>
            <Col xs={12} md={4} >
            <span className="me-3"><FontAwesomeIcon icon={faMailBulk } /></span><span>contact@stockreaper.com</span> 
                
            </Col>
            <Col xs={12} md={4} >
            <span className="me-3"><FontAwesomeIcon icon={ faCopyright} /></span><span>2021 StockReaper Inc</span> 
            </Col>
        </Row>
    )
}
