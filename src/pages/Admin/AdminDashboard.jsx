import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import AdminSidebar from '../../components/SideBar/AdminSidebar';
import AdminStats from '../../components/SideBar/AdminStats';

const AdminDashboard = () => {
    const handleSearch = e => {
        e.preventDefault();
    }

    return (
        <div className="p-0 overflow-hidden border-top border-dark mb-5" style={ { backgroundColor: "#E5E5E5" } }>
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <AdminSidebar></AdminSidebar>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="w-75 mt-5 mx-auto">
                        <Row>
                            <div>
                                <AdminStats></AdminStats>
                            </div>
                            <div className="my-5 pt-5 w-75 mx-auto">
                                <Form className="text-end">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Search by Email" className="p-4 rounded-3" />
                                    </Form.Group>
                                    <h6 className="text-center my-5">OR</h6>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Search by Phone Number" className="p-4 rounded-3" />
                                    </Form.Group>
                                    <h6 className="text-center my-5">OR</h6>
                                    <Form.Group className="mb-5" controlId="formBasicEmail">
                                        <Form.Control type="date" placeholder="Search by Date of Join" className="p-4 rounded-3" />
                                    </Form.Group>
                                    <Button onClick={ handleSearch } variant="warning" type="submit" className="px-5 py-3 fw-bold mt-5">Search</Button>
                                </Form>
                            </div>
                        </Row>
                    </div>
                </Col >
            </Row >
        </div >
    );
};

export default AdminDashboard;