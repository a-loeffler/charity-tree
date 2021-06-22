import React from 'react'
import './index.css'
import Carousel from './Carousel'

const LandingPage = () => {





    return (
        <div className="main-container">
            <div className="side-space"></div>
            <div className="main-content">
                <Carousel />
                <Carousel />
                <Carousel />
            </div>
            <div className="side-space"></div>
        </div>
    )
}

export default LandingPage;
