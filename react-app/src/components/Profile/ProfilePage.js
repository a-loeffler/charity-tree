import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProjectCard from "../LandingPage/ProjectCard";
import './ProfilePage.css'
import RedirectModal from "../RedirectModal";
import { getUserLikes } from "../../store/likes";

export default function ProfilePage() {
    const {id} = useParams();
    const dispatch = useDispatch()
    const allProjects = useSelector(state => state.allProjects.projects)
    const projectMedia = useSelector(state => state.MediaList.project_medias)
    const Users = useSelector(state => state.allUsers.users)
    const userLikes = useSelector(state => state?.userLikes.likes)
    const donations = useSelector(state => state?.allDonors.donors)
    const tiers = useSelector(state => state?.allTiers.tiers.tiers)
    const userProjects = allProjects?.filter(obj => obj.owner_id === Number(id));
    const likedProjectsIds = userLikes?.map(like => like.project_id)
    const likedProjects = likedProjectsIds?.map(id => allProjects.filter(project => project.id === id)).flat()
    const selectedUser = Users?.filter(user => user.id === Number(id))[0]
    const userDonations = donations?.filter(donation => donation.user_id === Number(id))
    const userDonationProjects = userDonations?.map(donation => allProjects.filter(project => project.id === donation.project_id)).flat()
    const projectTiers = id => tiers?.filter(set => set.project_id === id)
    
    const tiersReached = (projectId) => {
        const tierNames = []
        const donation = userDonations.find(donation => donation.project_id === projectId)
        const joiner = projectTiers(projectId)?.forEach(tier => {
            if(donation?.amount >= tier.value) {
                tierNames.push(tier.name)
            }
        })

        return(
            <>
                {tierNames.length > 0 ?
                    <td>
                        {tierNames.join(', ')}
                    </td>
                    : 'No Tiers Reached'
                }
            </>        
        )
    }

    const limitText = (str) => str?.length > 70 ? `${str.substring(0, 70)}...` : str;
    let width = "300px"
    let minHeight = "300px"
    let display = "flex"

    useEffect(() => {
        const likes = async () => {
            await dispatch(getUserLikes(selectedUser?.id))
        }
        likes()

    }, [selectedUser, dispatch])
    if (Users?.length && !selectedUser) {
        return (
            <>
                <RedirectModal destination={'/'} message={'Requested profile page does not exist.'}/>
            </>
        )
    }

    return(
        <div className="container">
            <h3 className="myProjects">{`${selectedUser?.username}'s Projects:`}</h3>
            <div className="users_projects">
                {userProjects.length > 0 ?
                <>

                {userProjects.map(project => {
                    return(
                        <ProjectCard key={project.id} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id)[0]} />
                    )
                })}
                </>

             : <div className="noProjects">{`${selectedUser?.username}`} currently has no projects. Shame on you {`${selectedUser?.username}`}</div>

            }
            </div>
            <h3 className="myProjects">{`Projects ${selectedUser?.username} Is Following:`}</h3>
            <div className='liked_projects'>
                {likedProjects?
                    <>
                        {likedProjects.map(project => {
                            return(
                                <ProjectCard key={`l.${project.id}`} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id)[0]} />
                                )
                            })}
                    </>
                :null}
            </div>
            <h3 className="myProjects">{`Projects ${selectedUser?.username} Has Donated To:`}</h3>
            <div className='donations'>
                {userDonations?
                    <>
                    {userDonationProjects.map(project => {
                        return(
                            <div className='donation-card'>
                                <ProjectCard key={`l.${project.id}`} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id)[0]} />
                                <div className='donation-info'>
                                    <div className='amount-info'>
                                        <label>Amount Donated</label>
                                        <p>{`$${userDonations.find(donation => donation.project_id === project.id).amount.toLocaleString("en-US")}`}</p>
                                    </div>
                                    <div className='tiers-info'>
                                        <label>Project Tiers Reached</label>
                                        <p>{tiersReached(project.id)}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </>
                :null}
            </div>
        </div>
    )
}
