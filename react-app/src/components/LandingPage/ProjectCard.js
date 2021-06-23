import React from 'react'

import './index.css'

const ProjectCard = ({title, cardId}) => {



    return (
        <div className="project-card-container" id={cardId}>
            <div className="project-card-image-container">
                <img className="project-card-image" src="" alt={`Banner for project ${title}`}></img>
            </div>
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-description">Project Description Lorem ipsum blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            <a className="project-card-creator" href="">Creator Info</a>
        </div>
    )
}

export default ProjectCard
