import React from 'react'
import './index.css'


const FeaturedProject = ({featuredProject}) => {



    return (
        <div className="featured-project-container">
            <h2 className="featured-project-container-title">Featured Project</h2>
            <div className="featured-project-image-container">
                <img className="featured-project-image" src={featuredProject.bannerUrl} alt="banner for featured project"></img>
            </div>
            <div className="featured-project-description-container">
                <h3 className="featured-project-title">{featuredProject.title}</h3>
                <p className="featured-project-description">{featuredProject.description}</p>
                <a href="" className="featured-project-creator">{featuredProject.creator}</a>
            </div>
        </div>
    )
}

export default FeaturedProject;
