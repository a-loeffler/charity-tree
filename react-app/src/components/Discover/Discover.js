import React, { useState } from 'react';
import ProjectCard from "../LandingPage/ProjectCard";
import { useSelector } from "react-redux";
import "./index.css"

export default function Discover() {
    const allProjects = useSelector(state => state.allProjects.projects)
    const projectMedia = useSelector(state => state.MediaList.project_medias)
    const categories = useSelector(state => state.allCategories.categories);
    
    const [category, setCategory] = useState(0)
    
    const selectedCategory = allProjects?.filter(project => project.category_id === category)

    const limitText = (str) => str?.length > 70 ? `${str.substring(0, 70)}...` : str;
    let width = "300px"
    let minHeight = "300px"
    let display = "flex"

    
    return (
        <div className='test'>
            <br></br>
            <h1>What types of charities are you interested in?</h1>
            <br></br>
            <select className='category-selector' value={category} onChange={e => setCategory(Number(e.target.value))}>
                <option value={0}>All Charities</option>
                {categories.map((category, index) => <option value={category.id} key={`c ${index}`}>{category.name}</option>)}                

            </select>
            <br></br>
            <div className="parentGrid">
                {category !== 0 ? 
                    selectedCategory?.map(project => {
                        return (
                            <ProjectCard key={`s ${project.id}`} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id)[0]} ownerId={project.owner_id}/>    
                        )
                    })
                    :allProjects.map(project => {
                        return (
                            <ProjectCard key={project.id} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id)[0]} ownerId={project.owner_id}/>
                        )
                    })}
            </div>
        </div>
    )
}
