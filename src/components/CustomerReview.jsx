import React from 'react'
import { Bx, Quote, Comments, Customer, Line, Speeched, Box } from './styles/Review.styled'

const CustomerReview = () => {
    return (
        <>
            <Customer>
                <h1>Customer review</h1>
                <Line />
            </Customer>
            <Comments>
                <Bx>
                    <Quote>
                    <p>Ut vulputate lectus risus, id scelerisque 
                           ipsum venenatis et.<br /> Sed ut risus ut leo ultr
                           icies dapibus vel quis purus. <br/> Suspendisse 
                           potenti. Pellentesque ornare auctor erat,</p>
                    </Quote>
                    <Speeched>
                        <p>-Tom James </p>
                        <p> CEO</p>
                    </Speeched>
                </Bx>
                <Box />
            </Comments>
        </>
    )
}

export default CustomerReview
