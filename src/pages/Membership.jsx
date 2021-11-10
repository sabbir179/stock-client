import React from 'react'
import { Row , Col} from 'react-bootstrap'
import PriceTag from '../components/Membership/PriceTag'



const Membership = () => {
    return (
        <div>
       
            <div style={{backgroundColor: "#1C75BA", height:"500px" }}>
                <h1 className="text-white text-center fw-lighter  p-5" >MEMBERSHIP</h1>
                <h2 className="text-white text-center " >The right price for you, whowever you are</h2>
            </div>
            <div className="text-center container mt-5">
                <Row className="mb-5" style={{marginTop:"-300px"}}>
                    <Col>
                        <PriceTag />
                    </Col>
                    <Col>
                        <PriceTag />
                    </Col>
                </Row>
                
            </div>
            <div className="text-center container mt-5">
                <Row className="mb-5">
                    <Col>
                        <h2>Refund</h2>
                    </Col>
                    <Col>
                        <h2>After Payment</h2>
                    </Col>
                </Row>
                
            </div>
        </div>
    )
}

export default Membership
