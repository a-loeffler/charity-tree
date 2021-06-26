import React, {useEffect} from 'react'
import ProjectCard from "../LandingPage/ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from '../../store/allProjects';
import { mediaGetter } from '../../store/media';

export default function Discover() {
    const allProjects = useSelector(state => state.allProjects.projects)
    const projectMedia = useSelector(state => state.MediaList.project_medias)
    const dispatch = useDispatch()

    // useEffect(()=> {
    //     dispatch(getAllProjects())
    //     dispatch(mediaGetter())
    // }, [dispatch])

    // if(!allProjects || !projectMedia) {
    //     return(
    //         null
    //     )
    // } 
    console.log('***********************************', allProjects[0]?.name)

    return (
        <div className="parentGrid">
            {allProjects?.map(project => {
                return (
                    <ProjectCard key={project.id} title={project?.name} description={project?.description} id={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                    )[0]}/>
                )
            })}
        </div>
    )
}