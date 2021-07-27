import React from "react"
import './index.css'

const About = () => {
    return (
        <div className="about-page-container">
            <h1 className="about-page-title">Charity Tree</h1>
            <section className="about-page-section">
                <h2 className="about-page-heading">Mission and Purpose</h2>
                <div className="about-info-container">
                    <div className="about-info-image-container">
                        <img src="/images/tree-vector.svg"></img>
                    </div>
                    <div className="about-info-text-container">
                        <p className="about-info-text">
                        Charity Tree is here to give you a way to support your
                        favorite charities and nonprofit organizations. <br/>
                        We want to help the world become a better place by...
                        </p>
                    </div>
                </div>
            </section>
            <section className="about-page-section">
                <h2 className="about-page-heading">The Creators</h2>
                <div className="about-creators-container">
                <div className="creator-bubble">
                </div>
                <div className="creator-bubble">
                </div>
                <div className="creator-bubble">
                </div>
                <div className="creator-bubble">
                </div>
                </div>
            </section>
  
        </div>
    )
}

export default About
