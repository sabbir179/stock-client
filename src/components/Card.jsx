import React from 'react';
import {CardContainer, Cards, CardHead, CardBody} from './../components/styles/Card.styled';



const Card = () => {
    return (
        <CardContainer>
            <Cards>
                <CardHead> <h1>Who we are</h1> </CardHead>
                <CardBody><p>We are a group of enthusiastic stock finders who help to find the right stock to our subscribers.</p></CardBody>
            </Cards>
            <Cards>
                <CardHead> <h1>What do we do</h1> </CardHead>
                <CardBody><p>We filter hot stocks in the market and suggest to our subscribers.</p></CardBody>
            </Cards>
            <Cards>
                <CardHead> <h1>Get benefited</h1> </CardHead>
                <CardBody><p>We suggest same stocks we trade to our subscribers. So that they can get benefits along with us. If you follow our secret trading strategy, you will reap good profits from stock market trading..</p></CardBody>
            </Cards>
            
        </CardContainer>
    )
}

export default Card
