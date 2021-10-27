import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import AdminSidebar from '../../components/SideBar/AdminSidebar';
import AdminStats from '../../components/SideBar/AdminStats';

const AdminReferral = () => {
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
                    <div className="w-75 mx-auto my-5">
                        <div className="my-5">
                            <Button onClick={ handleDownload } variant="warning" type="submit" className="px-5 py-3 fw-bold mt-5">Download</Button>
                        </div>
                        <Table responsive className="table-striped">
                            <thead style={ { backgroundColor: '#1C75BACC', color: 'white' } }>
                                <tr>
                                    <th scope="col"><input type="checkbox" name="brand" /></th>
                                    <th scope="col">Reference Email</th>
                                    <th scope="col">Referred Email</th>
                                    <th scope="col">Date of Reference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>sami@gmail.com</td>
                                    <td>sabbir@gmail.com</td>
                                    <td>Jan 08, 2020</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>sami@gmail.com</td>
                                    <td>sabbir@gmail.com</td>
                                    <td>Jan 08, 2020</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>sami@gmail.com</td>
                                    <td>sabbir@gmail.com</td>
                                    <td>Jan 08, 2020</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>sami@gmail.com</td>
                                    <td>sabbir@gmail.com</td>
                                    <td>Jan 08, 2020</td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"><input type="checkbox" name="brand" /></th>
                                    <td>sami@gmail.com</td>
                                    <td>sabbir@gmail.com</td>
                                    <td>Jan 08, 2020</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default AdminReferral;