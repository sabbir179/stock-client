import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Blogs from '../components/Blogs/Blogs';

import SideBar from '../components/SideBar/SideBar';

const HomeAfterLogin = () => {
    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <SideBar />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="container mt-5">
                        <h1>Recent Publications</h1>
                        <br />
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, corporis?</p>
                        <br />
                        <hr />
                    </div>
                    <Row>
                        <Col xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                            <div>
                                <Row>
                                    <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                                        <div>
                                            <Blogs></Blogs>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <div className="me-4">
                                <h2 className="mt-5">Trading Tickers</h2>
                                <Table bordered hover size="sm" className="mt-5">
                                    <thead>
                                        <tr>
                                            <th>Symbol</th>
                                            <th>Last Price</th>
                                            <th>Change</th>
                                            <th>%Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ORPH</td>
                                            <td>21.00</td>
                                            <td>+15.78</td>
                                            <td>+306.97%</td>
                                        </tr>
                                        <tr>
                                            <td>ORPH</td>
                                            <td>21.00</td>
                                            <td>+15.78</td>
                                            <td>+306.97%</td>
                                        </tr>
                                        <tr>
                                            <td>ORPH</td>
                                            <td>21.00</td>
                                            <td>+15.78</td>
                                            <td>+306.97%</td>
                                        </tr>
                                        <tr>
                                            <td>ORPH</td>
                                            <td>21.00</td>
                                            <td>+15.78</td>
                                            <td>+306.97%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </div >
    );
};

export default HomeAfterLogin;