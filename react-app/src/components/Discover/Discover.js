import React, {useEffect} from 'react'
import ProjectCard from "../LandingPage/ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from '../../store/allProjects';
import { mediaGetter } from '../../store/media';
import "./index.css"

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
    const limitText = (str) => str.length > 70 ? `${str.substring(0, 70)}...` : str;
    let width = "300px"
    let minHeight = "300px"
    let display = "flex"


    return (
        <div className="parentGrid">
            {allProjects?.map(project => {
                return (
                    <ProjectCard key={project.id} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                    )[0]}/>
                )
            })}
        </div>
    )
}
