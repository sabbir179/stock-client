import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AdminStats = () => {
    return (
        <div>
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <div className="bg-light text-center me-4">
                        <Card>
                            <Card.Header as="h5" className="bg-primary text-white">Total Registered Traders</Card.Header>
                            <Card.Body>
                                <Card.Title as="h1">239</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <div className="bg-light text-center me-4">
                        <Card>
                            <Card.Header as="h5" className="bg-success text-white">Total Active Traders</Card.Header>
                            <Card.Body>
                                <Card.Title as="h1">140</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <div className="bg-light text-center me-4 mb-5">
                        <Card>
                            <Card.Header as="h5" className="bg-dark text-white">Total Deactive Traders</Card.Header>
                            <Card.Body>
                                <Card.Title as="h1" className="text-secondary">99</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminStats;