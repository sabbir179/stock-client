import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../../components/SideBar/SideBar';

const SubscriptionStatus = () => {
    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark mb-5">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <SideBar />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="container mt-5 mx-auto">
                        <h1>Subscription Status</h1>
                        <hr />
                    </div>
                    <div className="container my-5">
                        <table className="table table-responsive caption-top w-50">
                            <caption className="text-dark fs-4">Trader's Information</caption>
                            <tbody>
                                <tr>
                                    <th className="fw-lighter">Full Name</th>
                                    <td>Sabbir Ahmed</td>

                                </tr>
                                <tr>
                                    <th className="fw-lighter">Type</th>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <th className="fw-lighter">Crate Date</th>
                                    <td>January 02, 2021</td>
                                </tr>
                                <tr>
                                    <th className="fw-lighter">Expiry Date</th>
                                    <td>February 02, 2022</td>
                                </tr>
                                <tr>
                                    <th className="fw-lighter">Phone No.</th>
                                    <td>+198273889290</td>
                                </tr>
                                <tr>
                                    <th className="fw-lighter">Email</th>
                                    <td>sa@gmail.com</td>
                                </tr>
                                <tr>
                                    <th className="fw-lighter">Status</th>
                                    <td>With referral</td>
                                </tr>
                                <tr>
                                    <th className="fw-lighter">Payment Status</th>
                                    <td>Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default SubscriptionStatus;