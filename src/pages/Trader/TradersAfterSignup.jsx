import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../../components/SideBar/SideBar';


const TradersAfterSignup = () => {
    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <SideBar />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="container mt-5">
                        <h1>Your account is pending for approval</h1>
                        <p className="mt-3 ps-2"><small className="text-dark fw-lighter">Within 24 hours your account will be active</small></p>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default TradersAfterSignup; <h2>This is traders after signup</h2>