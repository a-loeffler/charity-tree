import React from 'react'
import './index.css'
import Carousel from './Carousel'

const LandingPage = () => {


    const mockCarouselData = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa"];


    return (
        <div className="main-container">
            <div className="side-space"></div>
            <div className="main-content">
                <Carousel list={mockCarouselData}/>
                <Carousel list={mockCarouselData}/>
                <Carousel list={mockCarouselData}/>
            </div>
            <div className="side-space"></div>
        </div>
    )
}

export default LandingPage;
