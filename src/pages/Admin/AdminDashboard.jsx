import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminSidebar from '../../components/SideBar/AdminSidebar';

const AdminDashboard = () => {
    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark mb-5" style={ { backgroundColor: "#E5E5E5" } }>
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <AdminSidebar></AdminSidebar>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="w-75 mt-5 mx-auto">
                        <Row>
                            <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                                <div className="bg-light text-center p-5 me-5">
                                    <div style={ {
                                        backgroundColor: "#20A2D6"
                                    } }>
                                        <small className="text-light fw-bold">Total Registered Traders</small>
                                    </div>
                                    <div>
                                        <h2>239</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                                <div className="bg-light text-center p-5 me-5">
                                    <h2>140</h2>
                                </div>
                            </Col>
                            <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                                <div className="bg-light text-center p-5 me-5">
                                    <h2>99</h2>
                                </div>
                            </Col>
                        </Row>


                    </div>
                </Col >
            </Row >
        </div >
    );
};

export default AdminDashboard;