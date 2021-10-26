import React from 'react';
import {  Row, Col} from 'react-bootstrap'; 


const PostCard = () => {
    return (
        <div className= "container">
            
            <Row className="g-9 text-center " >
                <Col xs={12} md={4} className="#box" >
                    <div className= " text-white p-2 rounded-3" style={{backgroundColor: "#1C75BA", borderRadius: "15px"}} >
                        <h1> Who we are</h1>
                    </div>
                    <div>
                        <p className="text-start p-2"> 
                            We are a group of enthusiastic stock finders 
                            who help to find the right stock to our subscribers
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} >
                <div className= " text-white p-2 rounded-3" style={{backgroundColor: "#1C75BA", borderRadius: "15px"}} >
                        <h1> What do we are do</h1>
                    </div>
                    <div>
                        <p className="text-start p-2"> 
                          We filter hot stocks in the market and suggest to our subscribers.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} >
                <div className= " text-white p-2 rounded-3" style={{backgroundColor: "#1C75BA", borderRadius: "15px"}} >
                        <h1> Get benefited</h1>
                    </div>
                    <div>
                        <p className="text-start p-2"> 
                        We suggest same stocks we trade to our subscribers. 
                        So that they can get benefits along with us. If you 
                        follow our secret trading strategy, you will reap good 
                        profits from stock market trading.
                        </p>
                    </div>
                </Col>
               
            </Row>
            
        </div>
    );
};

export default PostCard;