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
                                            <td><a href="https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch" target="_blank" rel="noreferrer"> APPL</a></td>
                                            <td>149.52</td>
                                            <td>+0.25</td>
                                            <td>+0.16%</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://finance.yahoo.com/quote/%5EGSPC?p=%5EGSPC" target="_blank" rel="noreferrer"> S&P 500</a></td>
                                            <td>4,581.23</td>
                                            <td>+6.47</td>
                                            <td>+0.14%</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://finance.yahoo.com/quote/ORPH?p=ORPH&.tsrc=fin-srch" target="_blank" rel="noreferrer">ORPH </a></td>
                                            <td>3.9050</td>
                                            <td>-0.0205</td>
                                            <td>-0.715%</td>
                                        </tr>
                                        <tr>
                                            <td>Nasdaq</td>
                                            <td>15,358.05</td>
                                            <td>+15</td>
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