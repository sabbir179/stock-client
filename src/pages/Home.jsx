import React from 'react'
import { Header } from '../components/Header/Header'
import banner from './../image/banner.jpg';
import Image from 'react-bootstrap/Image'
import { Footer } from '../components/Footer/Footer';



const Home = () => {
    return (
        <div>
            <Header />
               <Image src= {banner} fluid />
            <Footer />
        </div>  
    )
}

export default Home
