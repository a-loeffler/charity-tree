import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'


const FeaturedProject = ({featuredProject}) => {

    const project_medias = useSelector(state => state.MediaList.project_medias)
    const project_medias2 = project_medias?.filter(obj => obj['project_id'] === featuredProject?.id);

    useEffect(() => {
    }, [project_medias2])

    return (
        <Link to={`/projects/${featuredProject?.id}`} style={{textDecoration:"none"}}>
            <div className="featured-project-container">
                <h2 className="featured-project-container-title">Featured Project</h2>
                <div className="featured-project-image-container">
                    {project_medias2[0] && <img className="featured-project-image" src={project_medias2[0].media_url} alt="banner for featured project"></img>}
                </div>
                <div className="featured-project-description-container">
                    <h3 className="featured-project-title">{featuredProject?.name}</h3>
                    <p className="featured-project-description">{featuredProject?.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedProject;
