import React from 'react';
import ProjectCard from "../LandingPage/ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import "./index.css"

export default function Discover() {
    const allProjects = useSelector(state => state.allProjects.projects)
    const projectMedia = useSelector(state => state.MediaList.project_medias)

    const limitText = (str) => str.length > 70 ? `${str.substring(0, 70)}...` : str;
    let width = "300px"
    let minHeight = "300px"
    let display = "flex"

    return (
        <div className="parentGrid">
            {allProjects?.map(project => {
                return (
                    <ProjectCard key={project.id} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                    )[0]} ownerId={project.owner_id}/>
                )
            })}
        </div>
    )
}
