import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';


const MyStock = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('/MyStock.json')
            .then(res => res.json())
            .then(data => setStocks(data))
    }, [])

    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark">
            <Row>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <SideBar />
                </Col>
                <Col xs={12} sm={12} md={10} lg={10}>
                    <div className="container mt-5 mx-auto">
                        <h1>My Stock</h1>
                        <hr />
                    </div>
                    <div className="container mt-5">
                        <Table responsive>
                            <thead style={{ backgroundColor: '#1C75BACC', color: 'white' }}>
                                <tr>
                                    <th scope="col">Sl</th>
                                    <th scope="col">Stock/Option</th>
                                    <th scope="col">Stock Name</th>
                                    <th scope="col">Entry Price</th>
                                    <th scope="col">Exit Price</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stocks.map(stock => <tr
                                        className="align-middle"
                                        key={stock.sl}
                                    >
                                        <th scope="row">{stock.sl}</th>
                                        <td>{stock.stock}</td>
                                        <td>{stock.stockName}</td>
                                        <td>{stock.entryPrice}</td>
                                        <td>{stock.exitPrice}</td>
                                        <td><a href="https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch" target="_blank" rel="noreferrer"><Button className="btn btn-warning">View</Button></a></td>
                                        <td><Link to="#"><Button className="btn btn-warning">Delete</Button></Link></td>
                                    </tr>)
                                }

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default MyStock;