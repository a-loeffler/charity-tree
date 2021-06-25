import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import './project_page.css'
import silverStar from "./silverStar.png"
import goldStar from "./goldStar.png"
import platinumStar from "./platinumStar.png"
import { Link } from "react-router-dom"

export default function ProjectPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const allProjects = useSelector(state => state.allProjects.projects)
    const project = allProjects?.find(obj => obj.id == Number(id));
    // const category = useSelector(state => state.allCategories.categories)
    const project_medias = useSelector(state => state.MediaList.project_medias)
    const project_medias2 = project_medias.filter(obj => obj['project_id'] === Number(id));
    const all_tiers = useSelector(state => state.allTiers.tiers.tiers)
    const filtered_tiers = all_tiers?.filter(obj => obj['project_id'] === Number(id));
    const projectHtml = document.querySelector('.project_html')
    const user = useSelector(state => state.session.user)

    // ============ adds the project html ========
    if (projectHtml) projectHtml.innerHTML = project?.page_html

    const daysLeft = () => {
        const milliseconds = Date.parse(project?.deadline) - Date.parse(new Date())
        const days = milliseconds / 1000 / 60 / 60 / 24
        if (days === NaN){
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
        if(total === NaN) return "The math is not adding up..."
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



    return (
        <div className="projectPage--container">
            <div className="project_name"> <h1>{project?.name}</h1></div>
            <div className="project_description"><p>{project?.description}</p></div>

            <div className="pics_and_goals--container">

                <div className="pic_and_thumbnails">
                    <div className="pics_container" >
                        <div style={{ backgroundImage: `url(${project_medias2[0]?.media_url})` }} className="background_image"></div>
                        <img src={project_medias2[0]?.media_url} className="mainImage"></img>
                    </div>

                    <div className="thumbnail--container">
                        {/* <div className="thumbnail--container">
                                {project_medias2?.map(item => {
                                    return (
                                <span className="thumbnail--span">
                                    <img src={item.media_url} className="thumbnails"></img>
                                </span>
                                )
                                })}
                        </div> */}
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
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="business" value="AAAYWPX9MSRSE" />
                        <input type="hidden" name="no_recurring" value="0" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
            </div>
            {user?.id === project?.owner_id &&
                <Link to={`/projects/${project?.id}/edit`}> Edit page - and please style this link!!!!</Link>
                }

            <div className="users_project_website_tiers">

                <div className="project_website">
                    <div className="project_html">
                </div>
            </div>

                <div className="tiers">

                   { filtered_tiers?.map((obj) =>
                    <div className="tier--container" key={`tier-container-${obj.id}`}>
                        <div className="tierName" key={`tier-name-${obj.id}`}>
                            { obj.name == "Silver" ? <img src={silverStar} className="tierStar" key={`star-${obj.id}`}></img>
                                : obj.name == "Gold" ? <img src={goldStar} className="tierStar" key={`star-${obj.id}`}></img>
                                : <img src={platinumStar} className="tierStar" key={`star-${obj.id}`}></img>
                            }
                                <h1 key={`name-${obj.id}`}>{obj.name}</h1>
                        </div>

                        <div className="tierDescription" key={`description-${obj.id}`}>{obj.description}</div>
                        <h1 className="tierValue" key={`value-${obj.id}`}>${obj.value}</h1>
                    </div>

                   )}

                </div>
            </div>

            {/* End Container*/}
        </div>
    )
}
