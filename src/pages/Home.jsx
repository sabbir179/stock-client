import React from 'react'

import banner from './../image/banner.jpg';

import { Image , Row, Col} from 'react-bootstrap';
import PostCard from '../components/Home/PostCard';
import Qoute from '../components/Home/Qoute';
import Button from '@restart/ui/esm/Button';
import Review from '../components/Home/Review';




const Home = () => {
    return (
        <div className= "text-center">
            
            <Image src= {banner} fluid />
            <PostCard />
            <hr style={{width: "50rem", border: '1px solid #F7B538', margin:'auto', marginTop:"50px", marginBottom:"30px"}} />
            <Button  className="btn btn-dark text-center mt-5 mb-5" > Subcription </Button>
            <hr style={{width: "50rem", border: '1px solid #F7B538', margin:'auto', marginTop:"30px", marginBottom:"50px"}} />
            <div className="align-middle ">
                <Row>
                    <Col xs={12} md={6} >
                        <Review />
                        
                    </Col>
                    <Col xs={12} md={6}>
                    <Qoute className="mb-5" />
                    </Col>
                </Row>
            </div>
                <hr />
        </div>  
    )
}

export default Home
