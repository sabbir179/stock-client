import React from 'react'
import banner from './../image/banner.jpg';
import { Image , Row, Col} from 'react-bootstrap';
import PostCard from '../components/Home/PostCard';
import Qoute from '../components/Home/Qoute';
import Button from '@restart/ui/esm/Button';
import Review from '../components/Home/Review';
import Stock from '../components/Home/Stock';





const Home = () => {
    return (
        <div >
             <Stock />
            <div className= "text-center">
            <Image src= {banner} fluid />
            <PostCard />
                <hr style={{width: "50rem", border: '1px solid #F7B538', margin:'auto', marginTop:"50px", marginBottom:"30px"}} />
            <Button  className="btn btn-dark text-center mt-5 mb-5" > Subcription </Button>
                <hr style={{width: "50rem", border: '1px solid #F7B538', margin:'auto', marginTop:"30px", marginBottom:"50px"}} />
            <div className="align-middle ">
                <Row className="justify-content-between ">
                    <Col xs={12} md={6} className="align-middle  " >   
                        <Qoute  />
                    </Col>
                    <Col xs={12} md={6} >
                        <Review />
                    </Col>
                </Row>
            </div>
                <hr />
                </div>
        </div>  
    )
}

export default Home
