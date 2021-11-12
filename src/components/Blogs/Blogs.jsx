import React from 'react';
import { Row } from 'react-bootstrap';
import useBlogs from '../../hooks/useBlogs';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [ blogs ] = useBlogs( {} );
    return (
        <Row className="container mx-auto">
            <Row className="gy-5">
                {
                    blogs.map( blog => <Blog
                        key={ blog.id }
                        blog={ blog }>
                    </Blog> )
                }
            </Row>
        </Row >
    );
};

export default Blogs;