import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminSidebar from '../../components/SideBar/AdminSidebar';

const AddStock = () => {
    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark mb-5">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <AdminSidebar></AdminSidebar>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="container mt-5 mx-auto">
                        <h2>Admin Add Stock Page</h2>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AddStock;