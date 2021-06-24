import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {useParams} from 'react-router-dom'
// import 'main.css'

export default function ProjectPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const project = useSelector(state => state.allProjects.projects[id])
    const category = useSelector(state => state.allCategories.categories)
    console.log(`*****************${JSON.stringify(category)}***************`)

    return (
        <div>
            <h1>{project?.name}</h1>
            <h1>{category?:category[project?.category_id - 1]}</h1>
            <h1>{project?.description}</h1>
            <h1>{`$${project?.goal.toLocaleString("en-US")}`}</h1>
            <h1>{`$${project?.current_amount.toLocaleString("en-US")}`}</h1>
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