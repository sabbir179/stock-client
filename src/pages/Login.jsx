import React, { useState } from 'react';
import { Button,  Form, Row, Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { API } from '../api'
import { fetchAuthUser } from '../redux/slices/auth.slice';


const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onEmailInput = ({target:{value}}) => setEmail(value)
    const onPasswordInput = ({target:{value}}) => setPassword(value)
    const onFormSubmit = e => {
        e.preventDefault()
        if(email && password ) {
            API.login({email, password} ) 
                .then((res) => {
                localStorage.setItem('authToken', res.data.token)
                dispatch(fetchAuthUser())
            })
        }
    }

    return (
        <Row  className="d-flex" style={{backgroundColor:"#1C75BA", height:"600px", marginBottom:"50px", color:"#fff"}}>
            <Col className="d-flex text-center mt-5 p-5 ">
                <hr /> <p className="fw-lighter "> or continue with</p> <hr/>
            </Col>
            <Col className="container mt-5 p-5">
                <h1> Sign in to your account</h1>
                <p className="fw-light">
                    or if you don't have an account click on
                    <Link to="/signup">
                        <span className="fw-bold" > Sign up </span>
                    </Link>
                </p>
                <Form onSubmit={ onFormSubmit}> 
                    <Form.Group className="mb-3 shadow rounded " controlId="blogForm.ControlInput1">
                        <Form.Control type="text" placeholder="user name or email" onChange={ onEmailInput} className="p-3" />
                    </Form.Group>
                    <Form.Group className="mb-3 shadow rounded " controlId="blogForm.ControlInput1">
                        <Form.Control type="password" placeholder="password" onChange={ onPasswordInput} className="p-3" />
                    </Form.Group>
                    <Button variant="warning" type="submit" className="px-5 py-3 shadow rounded fw-bold">Login</Button>
                </Form>
            </Col>
        </Row> 
    );
};

export default Login;