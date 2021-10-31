import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import './project_page.css'
import silverStar from "./silverStar.png"
import goldStar from "./goldStar.png"
import platinumStar from "./platinumStar.png"
import { Link } from "react-router-dom"
import { addADonor } from "../../store/allDonors"
import RedirectModal from "../RedirectModal"
import { getAllProjects } from "../../store/allProjects"
import { getUserLikes, addNewLike, removeALike } from "../../store/likes"
import { mediaGetter } from "../../store/media"

export default function ProjectPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const allProjects = useSelector(state => state.allProjects.projects)
    const project_medias = useSelector(state => state.MediaList.project_medias)
    const all_tiers = useSelector(state => state.allTiers.tiers.tiers)
    const user = useSelector(state => state.session.user)
    const project = allProjects?.find(obj => obj.id === Number(id));
    const [dollar, setDollar] = useState(0)
    const [cardNumber, setCardNumber] = useState(undefined)
    const project_medias2 = project_medias.filter(obj => obj['project_id'] === Number(id));
    const filtered_tiers = all_tiers?.filter(obj => obj['project_id'] === Number(id));
    const userLikes = useSelector(state => state?.userLikes.likes)
    
    useEffect(() => {
        const likes = async () => {
            await dispatch(getUserLikes(user?.id))
        }
        if(user) {
            likes()
        }
        dispatch(mediaGetter())
    }, [user, dispatch])
    
    // ============ adds the project html ========
    
    if (allProjects?.length && !project) {
        return (
            <>
                <RedirectModal destination={'/'} message={'Requested project does not exist.'}/>
            </>
        )
    }
    
    const daysLeft = () => {
        const milliseconds = Date.parse(project?.deadline) - Date.parse(new Date())
        const days = milliseconds / 1000 / 60 / 60 / 24
        if (isNaN(days) === true){
            return 'Hmm... something is broken'
        }
        else if (milliseconds <= 0) {
            return 0
        } else {
            return Math.trunc(days)
        }
    }
    const getPercent = () => {
        const total = Math.trunc(project?.current_amount / project?.goal * 100)
        if(isNaN(total) === true) return "The math is not adding up..."
        return total > 100 ? 100 : total;
    }


    if (project_medias2) {
        const thumbnails = document.querySelector('.thumbnail--container')

        if (thumbnails !== null) {
            thumbnails.innerHTML = '';
            for (let i = 0; i < project_medias2?.length; i++) {
                let obj = project_medias2[i]
                let newSpan = document.createElement("span")
                newSpan.setAttribute("class", 'thumbnail--span')
                let newImg = `<img src="${obj.media_url}" class="thumbnails"></img>`
                newSpan.innerHTML = newImg
                thumbnails.appendChild(newSpan)

                newSpan.addEventListener("click", (e) => {
                    document.querySelector(".background_image").style.backgroundImage = `url("${e.target.src}")`
                    document.querySelector(".mainImage").src = e.target.src
                })
            }
        }
    }

    const  donateSubmit = async (e) => {
        e.preventDefault()
        if (user) {
            await dispatch(addADonor({amount: dollar, user_id: user.id, project_id: id}))
            setDollar(Number(undefined))
            setCardNumber(Number(undefined))
            dispatch(getAllProjects())
        }
        else {
            await dispatch(addADonor({amount: dollar, user_id: null, project_id: id}))
            setDollar(Number(undefined))
            setCardNumber(Number(undefined))
            dispatch(getAllProjects())
        }
    }

    const liked = () => {
        if(userLikes.some(like => like.project_id === Number(id))) {
            return true
        } else {
            return false
        }
    }

    const addLike = async () => {
        await dispatch(addNewLike(user.id, Number(id)))
    }

    const removeLike = async () => {
        await dispatch(removeALike(user.id, Number(id)))
    }

    return (
        <div className="projectPage--container">
            <div className="header">
                <div className="project_name"> <h1>{project?.name}</h1></div>
                <div className="project_description"><p>{project?.description}</p></div>
            </div>

            <div className="pics_and_goals--container">

                <div className="pic_and_thumbnails">
                    <div className="pics_container" >
                        <div style={{ backgroundImage: `url(${project_medias2[0]?.media_url})` }} className="background_image"></div>
                        <img src={project_medias2[0]?.media_url} alt={`${project?.name}`} className="mainImage"></img>
                    </div>

                    <div className="thumbnail--container">
                        {/* Dynamic content here */}
                    </div>
                </div>

                <div className="stuff_on_right--container">

                    <div className="projectGoal--container">
                        <div className="statusBar">
                            <div className="statusBar-back"></div>
                            <div className="statusBar-front" style={{ width: `${getPercent()}%` }}></div>
                        </div>
                        <h2 className="currentAmount">{`$${project?.current_amount.toLocaleString("en-US")}`}</h2>
                        <div className="goalAmount">{`pledged of $${project?.goal.toLocaleString("en-US")} goal`}</div>
                    </div>

                    {daysLeft() < 0 ? <div className="daysLeft"><h2>{daysLeft()}</h2>project date expired</div>
                        : daysLeft() === 1 ? <div className="daysLeft"><h2>{daysLeft()}</h2> day to go!!</div>
                        : <div className="daysLeft"><h2>{daysLeft()}</h2> days to go</div>
                    }


                    {/* <h1>{category[project?.category_id]?.name}</h1> */}
                    <form onSubmit={e => donateSubmit(e)}>
                        <div>
                        <input className="project-creator-input extended-width" type='number' required placeholder="Enter Donation Amount" value={dollar} onChange={(e) => {
                            setDollar(e.target.value)}
                        }/>
                        </div>
                        <div>
                        <input className="project-creator-input extended-width" type='number' required placeholder="Enter Card Number" value={cardNumber} onChange={(e) => {
                            setCardNumber(e.target.value)
                        }}></input>
                        </div>
                        <button className="project-creator-next-button center">Donate</button>
                    </form>
                    {liked() === true && user?
                        <button className='like-button' onClick={removeLike}>Unlike</button>
                    :null}
                    {liked() === false && user?
                        <button className='like-button' onClick={addLike}>Like</button>
                    :null}
                </div>
            </div>





             {/* If project page exists, this will render two columns. Otherwise just the tiers. */}
             {project?.page_html ?
                    <>
                    {user?.id === project?.owner_id && <Link to={`/projects/${project?.id}/edit`} className="edit-page-btn"> &#8681; Edit page &#8681;</Link>}
                <div className="users_project_website_tiers">
                <div className="project_website">

                <div dangerouslySetInnerHTML={{__html: `${project?.page_html}`}} />
                    <div className="project_html">
                </div>
            </div>

                <div className="tiers">

                   { filtered_tiers?.map((obj) =>
                    <div className="tier--container" key={`tier-container-${obj.id}`}>
                        <div className="tierName" key={`tier-name-${obj.id}`}>
                            { obj.name === "Silver" ? <img src={silverStar} alt='silver star' className="tierStar" key={`star-${obj.id}`}></img>
                                : obj.name === "Gold" ? <img src={goldStar} alt='gold star' className="tierStar" key={`star-${obj.id}`}></img>
                                : <img src={platinumStar} alt='platinum star' className="tierStar" key={`star-${obj.id}`}></img>
                            }
                                <h1 key={`name-${obj.id}`}>{obj.name}</h1>
                        </div>

                        <div className="tierDescription" key={`description-${obj.id}`}>{obj.description}</div>
                        <h1 className="tierValue" key={`value-${obj.id}`}>${obj.value}</h1>
                    </div>

                   )}

                </div>
            </div>
            </>
        // Else, just the tiers will render
        :
        <>

        <div className="justTiers">
            { filtered_tiers?.map((obj) =>
            <div className="tier--container" key={`tier-container-${obj.id}`}>
                <div className="tierName" key={`tier-name-${obj.id}`}>
                    { obj.name === "Silver" ? <img src={silverStar} alt='silver star' className="tierStar" key={`star-${obj.id}`}></img>
                        : obj.name === "Gold" ? <img src={goldStar} alt='gold star' className="tierStar" key={`star-${obj.id}`}></img>
                        : <img src={platinumStar} className="tierStar" alt='platinum star' key={`star-${obj.id}`}></img>
                    }
                        <h1 key={`name-${obj.id}`}>{obj.name}</h1>
                </div>
                <div className="tierDescription" key={`description-${obj.id}`}>{obj.description}</div>
                <h1 className="tierValue" key={`value-${obj.id}`}>${obj.value}</h1>
            </div>

            )}
        </div>
        {user?.id === project?.owner_id && <Link to={`/projects/${project?.id}/edit`} className="add-page-btn">Add Page</Link>}
        </>
        }

            {/* End Container*/}
        </div>
    )
}
