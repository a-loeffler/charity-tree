import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const ProjectCard = ({width, display, minHeight, title, cardId, description, image, ownerId}) => {


    return (
        <>
        <Link to={`/projects/${cardId}`} className="card_anchor">
            <div className="project-card-container" id={cardId} style={{width: width, display: display, minHeight: minHeight}}>
                <div className="project-card-image-container">
                    <img className="project-card-image" src={image?.media_url} alt={`Image for project "${title}" was either deleted by the owner or not uploaded`}></img>
                </div>
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <div className="project-card-creator">
                    {/* <span>Creator Info</span> */}
                    <Link to={`/profile/${ownerId}`} className="project-card-creator-link ">Creator Info</Link>
                </div>
            </div>
        </Link>
        </>
    )
}

export default ProjectCard
