import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminSingleBlog = ( props ) => {
    const { id, title, description, published } = props.blog;

    return (
        // div for each column
        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
            {/* card for each Blog Article*/ }
            <div className="rounded-3">
                <span className="bg-warning ms-3 px-3 py-2 fw-bold rounded-3">Article</span>
                <div className="card-body">
                    <h4 className="card-title fw-bold text-dark">{ title }</h4>
                    <br />
                    <p className="card-text text-dark fw-lighter">{ description.slice( 0, 150 ) }</p>
                    <p className="card-text"><small><b>Published:</b> <br />{ published }</small></p>
                    <Link to={ `/addblogdetail/${ id }` } className="text-secondary text-decoration-none w-100"><small className="text-right">Read More...</small></Link>
                </div>
            </div>
        </Col>
    );
};

export default AdminSingleBlog;