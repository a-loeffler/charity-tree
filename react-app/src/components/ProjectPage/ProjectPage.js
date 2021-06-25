import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {useParams} from 'react-router-dom'
import './project_page.css'
import avengers from './avengers.jpg'

export default function ProjectPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const allProjects = useSelector(state => state.allProjects.projects)
    const project = allProjects?.find(obj => obj.id == Number(id));
    const category = useSelector(state => state.allCategories.categories)
    const project_medias = useSelector(state => state.MediaList.project_medias)
    const daysLeft = () => {
        const milliseconds = Date.parse(project?.deadline) - Date.parse( new Date())
        const days = milliseconds/1000/60/60/24
        if(milliseconds <= 0) {
            return 0
        } else {
           return Math.trunc(days)
        }
    }
    const getPercent = () => {
        const total = Math.trunc(project?.current_amount / project?.goal * 100)
        return total > 100 ? 100 : total;
    }
    const project_medias2 = project_medias.filter(obj => {
        return obj['project_id'] === Number(id)
    });

    return (
        <div className="projectPage--container">
           <div className="project_name"> <h1>{project?.name}</h1></div>
            <div className="project_description"><p>{project?.description}</p></div>

            <div className="pics_and_goals--container">
                    <div className="pics_container" >
                        <div style={{backgroundImage: `url(${avengers})`}} className="background_image"></div>
                        <img src={avengers} className="images"></img>
                    </div>

                    <div className="stuff_on_right--container">

                        <div className="projectGoal--container">
                            <div className="statusBar">
                                    <div className="statusBar-back"></div>
                                    <div className="statusBar-front" style={{width: `${getPercent()}%`}}></div>
                            </div>
                            <h2 className="currentAmount">{`$${project?.current_amount.toLocaleString("en-US")}`}</h2>
                            <div className="goalAmount">{`pledged of $${project?.goal.toLocaleString("en-US")} goal`}</div>
                        </div>

                        { daysLeft() < 0 ?  <div className="daysLeft"><h2>{daysLeft()}</h2>project date expired</div>
                        : daysLeft() === 1 ?  <div className="daysLeft"><h2>{daysLeft()}</h2> day to go!!</div>
                        :  <div className="daysLeft"><h2>{daysLeft()}</h2> days to go</div>
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

            <div className="users_project_website_tiers">
                        <div className="project_website">
                            {/* ================================== Project Website ============================ */}
                        </div>

                        <div className="tiers">
                            {/* ================================== Tiers go here ============================ */}
                        </div>
            </div>

        {/* End Container*/}
        <div>
           
            <h1>{project?.name}</h1>    
            <h1>{category[project?.category_id]?.name}</h1>
            <h1>{project?.description}</h1>
            <h1>{`$${project?.goal.toLocaleString("en-US")}`}</h1>
            <h1>{`$${project?.current_amount.toLocaleString("en-US")}`}</h1>
            {/* TODO: div for completion percentage */}
            <h1>{project?.deadline}</h1>
            <h1>{project?.owner}</h1>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="AAAYWPX9MSRSE" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    )
}
