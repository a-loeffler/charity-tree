import React from 'react';
import './index.css'

import ProjectCard from './ProjectCard'

const Carousel = () => {



    return (
        <div className="carousel-container">
            <div className="carousel-title-info">
                <h2 className="carousel-title">Title</h2>
                <a className="carousel-title-link" href="">Link</a>
            </div>
            <div className="carousel-buttons-container">
                <p>Buttons!</p>
            </div>
            <div className="carousel-items-container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Carousel;
