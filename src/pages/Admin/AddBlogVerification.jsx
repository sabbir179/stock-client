import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../../components/SideBar/AdminSidebar';
import AdminStats from '../../components/SideBar/AdminStats';
import useBlogs from '../../Hooks/useBlogs';

const AddBlogVerification = () => {
    const [ blogs ] = useBlogs( {} );
    const addedBlog = blogs.find( blog => parseInt( blog.id ) === 101 );
    const navigation = useHistory();

    const handleSubmit = () => {
        navigation.push( `/addblogdetail/${ addedBlog.id }` )
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
                    <div className="container mt-5">
                        <div className="mb-4">
                            <span className="bg-warning px-3 py-2 mb-5 me-4 fw-bold rounded-3">Article</span>
                            <small className="text-secondary text-thinner">Published { addedBlog?.published }</small>
                        </div>
                        <div>
                            <h1>{ addedBlog?.title }</h1>
                            <br />
                            <p className="text-secondary w-75">{ addedBlog?.description }</p>
                        </div>
                        <br />
                        <hr />
                    </div>
                    <div className="container d-flex justify-content-around">
                        <Button variant="warning" type="submit" className="px-5 py-4 fs-4" style={ { width: '300px', height: '100px' } }>Cancel</Button>
                        <Button onClick={ handleSubmit } variant="warning" type="submit" className="px-5 py-4 fs-4" style={ { width: '300px', height: '100px' } }>Submit</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AddBlogVerification;