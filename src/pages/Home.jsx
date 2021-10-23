import React from 'react'
import banner from './../image/banner.jpg';
import Card from './../components/Card';
import {Button} from './../components/styles/Button.styled'
import CustomerReview from '../components/CustomerReview';


const Home = () => {
    return (
        <div>
            
                <img src= {banner} alt= "banner" width= {1100} height={700} style= {{padding:'0 120px'}}  /> 
                <Card />
                <Button bg='#F7B538' color="#000"  > Subcription</Button>
                <CustomerReview />
            
        </div>  
    )
}

export default Home
