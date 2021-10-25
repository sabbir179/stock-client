import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar';
import useBlogs from '../Hooks/useBlogs';

const SingleBlog = () => {
    const { blogId } = useParams();
    const [ blogs ] = useBlogs( {} );
    const singleBlog = blogs.find( blog => blog.id === blogId );

    const addNewComment = e => {
        e.preventDefault();
    }

    return (
        <div className="p-0 m-0 overflow-hidden border-top border-dark">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                    <SideBar />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 10 } lg={ 10 }>
                    <div className="container mt-5">
                        <div className="mb-4">
                            <span className="bg-warning px-3 py-2 mb-5 me-4 fw-bold rounded-3">Article</span>
                            <small className="text-secondary text-thinner">Published { singleBlog?.published }</small>
                        </div>
                        <div>
                            <h1>{ singleBlog?.title }</h1>
                            <br />
                            <p className="text-secondary w-75">{ singleBlog?.description }</p>
                        </div>
                        <br />
                        <hr />
                        <div className="mt-4">
                            <Form onSubmit={ addNewComment }>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={ 5 } placeholder="Comments" />
                                </Form.Group>
                                <Button variant="warning" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <div className="mt-5">
                            <h5>Mahesh</h5>
                            <small className="text-secondary text-thinner">Commented 1 days ago</small>
                            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quas!</p>
                        </div>
                        <br />
                        <hr />
                        <div className="mt-4">
                            <h5>Shushantha</h5>
                            <small className="text-secondary text-thinner">Commented 3 days ago</small>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet laudantium, placeat accusantium explicabo repellendus quia ea quae voluptatibus ullam.</p>
                        </div>
                        <br />
                        <hr />
                        <div className="mt-4">
                            <h5>Pankaj</h5>
                            <small className="text-secondary text-thinner">Commented 6 days ago</small>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet laudantium, placeat accusantium explicabo repellendus quia ea quae voluptatibus ullam.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default SingleBlog;