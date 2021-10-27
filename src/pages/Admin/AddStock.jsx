import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import AdminSidebar from '../../components/SideBar/AdminSidebar';
import { useHistory } from 'react-router-dom';

const AddStock = () => {
    const navigation = useHistory();

    const addStock = e => {
        e.preventDefault();
        navigation.push( '/addblogverification' );
    }
    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark mb-5">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <AdminSidebar></AdminSidebar>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="container mt-5 mx-auto">
                        <h2>Admin Add Stock Page</h2>
                        <Form onSubmit={ addStock }>
                            <Form.Group className="mb-3" controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="No of Contracts" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Stock Name" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Entry price" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Exit price" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Subcriptions type" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="URLs" className="p-3" />
                            </Form.Group>
                            

                            <Button variant="warning" type="submit" className="px-5 py-3 fw-bold">Add Stock</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AddStock;