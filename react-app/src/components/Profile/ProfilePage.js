import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "../LandingPage/Carousel";
import ProjectCard from "../LandingPage/ProjectCard";

export default function ProfilePage() {
    const {id} = useParams();
    const allProjects = useSelector(state => state.allProjects.projects)
    const projectMedia = useSelector(state => state.MediaList.project_medias)
    const userProjects = allProjects?.filter(obj => obj.owner_id == Number(id));
    const Users = useSelector(state => state.allUsers.users)
    const selectedUser = Users?.filter(user => user.id === Number(id))[0]
    console.log(selectedUser)
    console.log(allProjects)
    console.log(userProjects)

    return(
        <>
            <div className="header">
                <h1>{`Welcome to ${selectedUser?.username}'s Page!`}</h1>
            </div>

            <div className="user's_projects">
                {userProjects.map(project => {
                    return(
                        <ProjectCard key={project.id} title={project?.name} description={project?.description} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                            )[0]}/>
                    )
                })}
            </div>
            
        </>
    )
}