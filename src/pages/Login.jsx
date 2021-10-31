import React from 'react';
import { Button,  Form, Row, Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {

    const {navigation } = useHistory();

    const addLogin = e => {
        e.preventDefault();
        navigation.push( '/addblogverification' );
    }
    
    

    // const signUp = e => {
    //     e.preventDefault();
    //     newSignup.push('/signUp')
    // }

    return (
        <Row  className="d-flex" style={{backgroundColor:"#1C75BA", height:"600px", marginBottom:"50px", color:"#fff"}}>
           
            <Col className="d-flex text-center mt-5 p-5 ">
                <hr /> <p className="fw-lighter "> or continue with</p> <hr/>
            </Col>
            <Col className="container mt-5 p-5">
                <h1> Sign in to your account</h1>
                <p className="fw-light"> or if you don't have an account click on <Link to="/signup"> <span className="fw-bold" > Sign up </span></Link></p>
                <Form onSubmit={ addLogin }>
                            <Form.Group className="mb-3 shadow rounded " controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="user name or email" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3 shadow rounded " controlId="blogForm.ControlInput1">
                                <Form.Control type="password" placeholder="password" className="p-3" />
                            </Form.Group>
                            
                            

                            <Button variant="warning" type="submit" className="px-5 py-3 shadow rounded fw-bold">Login</Button>
                        </Form>
            </Col>
           
        </Row> 
    );
};

export default Login;