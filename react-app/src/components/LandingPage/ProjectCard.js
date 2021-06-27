import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const ProjectCard = ({width, display, minHeight, title, cardId, description, image}) => {


    return (
        <Link to={`/projects/${cardId}`} className="card_anchor">
            <div className="project-card-container" id={cardId} style={{width: width, display: display, minHeight: minHeight}}>
                <div className="project-card-image-container">
                    <img className="project-card-image" src={image?.media_url} alt={`Banner for project ${title}`}></img>
                </div>
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <a className="project-card-creator" href="">Creator Info</a>
            </div>
        </Link>
    )
}

export default ProjectCard
