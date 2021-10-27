import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import AdminSidebar from '../../components/SideBar/AdminSidebar';
import AdminStats from '../../components/SideBar/AdminStats';

const DeactiveTraders = () => {
    const handleDownload = () => {
        //Put your code here
    }

    return (
        <div className="p-0 overflow-hidden border-top border-dark mb-5" style={ { backgroundColor: "#E5E5E5" } }>
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <AdminSidebar />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="my-5 container">
                        <AdminStats></AdminStats>
                    </div>
                    <div className="container mt-5">
                        <Button onClick={ handleDownload } variant="warning" type="submit" className="px-5 py-3 fw-bold mt-5">Download</Button>
                    </div>
                    <div className="container mt-5">
                        <Table responsive className="table-striped">
                            <thead style={ { backgroundColor: '#1C75BACC', color: 'white' } }>
                                <tr>
                                    <th scope="col"><input type="checkbox" name="brand" /></th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">DOJ</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Subscription Type</th>
                                    <th scope="col">Join Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>Sami Meadad</td>
                                    <td>Choudhury</td>
                                    <td>sami@gmail.com</td>
                                    <td>01711000000</td>
                                    <td>Jan 08, 2020</td>
                                    <td>Deactive</td>
                                    <td>Free</td>
                                    <td>Referral</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>Sabbir</td>
                                    <td>Ahmed</td>
                                    <td>sabbir17@gmail.com</td>
                                    <td>01711000000</td>
                                    <td>Jan 08, 2020</td>
                                    <td>Deactive</td>
                                    <td>Free</td>
                                    <td>Referral</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>Sabbir</td>
                                    <td>Ahmed</td>
                                    <td>sabbir17@gmail.com</td>
                                    <td>01711000000</td>
                                    <td>Jan 08, 2020</td>
                                    <td>Deactive</td>
                                    <td>Free</td>
                                    <td>Referral</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>Sabbir</td>
                                    <td>Ahmed</td>
                                    <td>sabbir17@gmail.com</td>
                                    <td>01711000000</td>
                                    <td>Jan 08, 2020</td>
                                    <td>Deactive</td>
                                    <td>Free</td>
                                    <td>Referral</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>Sabbir</td>
                                    <td>Ahmed</td>
                                    <td>sabbir17@gmail.com</td>
                                    <td>01711000000</td>
                                    <td>Jan 08, 2020</td>
                                    <td>Deactive</td>
                                    <td>Free</td>
                                    <td>Referral</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default DeactiveTraders;