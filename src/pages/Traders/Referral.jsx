import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import SideBar from '../../components/SideBar/SideBar';

const Referral = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
    }

    const handleCloseButton = e => {
        e.preventDefault();
    }

    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <SideBar />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="container mt-5">
                        <h1>Refer A Friend</h1>
                        <br />
                        <hr />
                    </div>
                    <div className="container my-5 w-50 mx-auto p-5" style={ { backgroundColor: '#1C75BA' } }>
                        <h5 className="text-center text-white mb-5">Refer A Friend</h5>
                        <Form onSubmit={ handleFormSubmit }>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="p-3" type="email" placeholder="Enter email address" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <div className="d-flex justify-content-between">
                                <Button variant="warning" type="submit" className="w-50 me-3">Submit</Button>
                                <Button className="w-50" onClick={ handleCloseButton } variant="warning" type="close">Close</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default Referral;