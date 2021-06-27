import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const ProjectCard = ({title, cardId, description, image}) => {



    return (
        <div className="project-card-container" id={cardId}>
            <Link to={`/projects/${cardId}`}>
                <div className="project-card-image-container">
                    <img className="project-card-image" src={image?.media_url} alt={`Banner for project ${title}`}></img>
                </div>
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <a className="project-card-creator" href="">Creator Info</a>
            </Link> 
        </div>
    )
}

export default ProjectCard
