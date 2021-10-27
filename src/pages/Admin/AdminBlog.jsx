import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../../components/SideBar/AdminSidebar';
import AdminStats from '../../components/SideBar/AdminStats';
import useBlogs from '../../Hooks/useBlogs';
import AdminSingleBlog from './AdminSingleBlog';

const AdminBlog = () => {
    const [ blogs ] = useBlogs( {} );
    const navigation = useHistory();

    const addBlog = e => {
        e.preventDefault();
        navigation.push( '/addblogverification' );
    }
    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark mb-5">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <AdminSidebar></AdminSidebar>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="my-5 container rounded-3">
                        <AdminStats></AdminStats>
                    </div>
                    <div className="my-5 me-5 ms-4">
                        <h4 className="my-4">Add Blog</h4>
                        <Form onSubmit={ addBlog }>
                            <Form.Group className="mb-3" controlId="blogForm.ControlInput1">
                                <Form.Control type="text" placeholder="Title" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="blogForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={ 10 } placeholder="Description" />
                            </Form.Group>

                            <Button variant="warning" type="submit" className="px-5 py-3 fw-bold">Add Blog</Button>
                        </Form>
                    </div>
                    <hr />
                    <div>
                        <Row className="container mx-auto">
                            <Row className="gy-5">
                                {
                                    blogs.map( blog => <AdminSingleBlog
                                        key={ blog.id }
                                        blog={ blog }>
                                    </AdminSingleBlog> )
                                }
                            </Row>
                        </Row >
                    </div>
                </Col >
            </Row >
        </div >
    );
};

export default AdminBlog;