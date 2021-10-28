import React from 'react';
import { Button,  Form, Row, Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Contact = () => {

    const navigation = useHistory();

    const addEmail = e => {
        e.preventDefault();
        navigation.push( '/addblogverification' );
    }
    return (
        <Row className="d-flex" style={{backgroundColor:"#1C75BA", height:"600px", marginBottom:"50px", color:"#fff"}}>
           
            <Col className="container p-5 xs={12} md={2}">
                <h1  >We are avaliable</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h5 className="fw-lighter " >Mon to Fri : 9 am to 5 pm</h5>
                <h5 className="fw-lighter" >Sat : On special appointment</h5>
            </Col>
            <Col className="xs={12} md={2} container mt-2 p-5">
            <Form onSubmit={ addEmail }>
                <Row className="d-flex ">
                    <Col className="xs={12} md={4} ">
                            <Form.Group className="mb-3 w-75 shadow rounded  "  controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="First name" className="p-3" />
                            </Form.Group>
                            </Col>
                            <Col className="xs={12} md={4} ">
                            <Form.Group className="mb-3 w-75 shadow rounded "  controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Middle name" className="p-3" />
                            </Form.Group>
                            </Col>

                            <Col className="xs={12} md={4} ">
                            <Form.Group className="mb-3 w-75 shadow rounded " controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Last name" className="p-3" />
                            </Form.Group>
                            </Col>
                        </Row>
                            <Form.Group className="mb-3 shadow rounded  " controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Email" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3 shadow rounded " controlId="blogForm.ControlInput1">
                                <Form.Control as="textarea" rows={ 10 } placeholder="Description" />
                                
                            </Form.Group>
                            
                            

                            <Button variant="warning" type="submit" className="px-5 py-3 fw-bold shadow rounded ">Submit</Button>
                        </Form>
                        </Col>
        </Row>
    )
}

export default Contact;
