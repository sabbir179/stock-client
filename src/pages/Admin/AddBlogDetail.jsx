import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AdminSidebar from '../../components/SideBar/AdminSidebar';
import AdminStats from '../../components/SideBar/AdminStats';
import useBlogs from '../../hooks/useBlogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const AddBlogDetail = () => {
    const [ blogs ] = useBlogs( {} );
    const { blogId } = useParams();
    const addedBlog = blogs.find( blog => parseInt( blog.id ) === parseInt( blogId ) );

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
                    <div className="container mt-5">
                        <div className="mb-4">
                            <span className="bg-warning px-3 py-2 mb-5 me-4 fw-bold rounded-3">Article</span>
                            <small className="text-secondary text-thinner">Published { addedBlog?.published }</small>
                        </div>
                        <div>
                            <h1>{ addedBlog?.title } <Button className="btn btn-success"><FontAwesomeIcon icon={ faEdit } /></Button> <Button className="btn btn-danger"><FontAwesomeIcon icon={ faTrash } /></Button></h1>
                            <br />
                            <p className="text-secondary w-75">{ addedBlog?.description }</p>
                        </div>
                        <br />
                        <hr />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AddBlogDetail;