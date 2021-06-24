import React from 'react'
import './index.css'
import Carousel from './Carousel'
import FeaturedProject from './FeaturedProject'
import Recommended from './Recommended'

const LandingPage = () => {


    const mockCarouselData = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa"];
    const mockFeaturedProjectData = {
        title: "We be broke, y’all!",
        bannerUrl: "https://i.ibb.co/YWvkzkf/mock-banner.png",
        creator: "Poor Boy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }

    const mockRecommendedData = {
        title: "Can I has moneyz?!",
        bannerUrl: "https://i.ibb.co/tQL7qFm/mock-tile.png",
        funded: 14,
        creator: "Mr. Whiskers"
    }

    const mockRecommendedList = [mockRecommendedData, mockRecommendedData, mockRecommendedData, mockRecommendedData, mockRecommendedData, mockRecommendedData, mockRecommendedData, mockRecommendedData, mockRecommendedData]


    return (
        <div className="main-container">
            <div className="side-space"></div>
            <div className="main-content">
                <div className="upper-content-container">
                    <FeaturedProject featuredProject={mockFeaturedProjectData} />
                    <Recommended recommendedList={mockRecommendedList} />
                </div>
                <Carousel id={"car-1"} list={mockCarouselData}/>
                <Carousel id={"car-2"} list={mockCarouselData}/>
                <Carousel id={"car-3"} list={mockCarouselData}/>
            </div>
            <div className="side-space"></div>
        </div>
    )
}

export default LandingPage;
