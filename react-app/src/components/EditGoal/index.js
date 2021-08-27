import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getAllProjects } from "../../store/allProjects";

const EditGoal = () => { 
    const dispatch = useDispatch();
    const allProjects = useSelector((state) => state.allProjects.projects)
    const { id } = useParams();
    const project = allProjects.filter(proj => {
        return proj.id === Number(id)
    })
    const [value, setValue] = useState('')
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if (project[0] && !loaded) {
            setValue(project[0]?.goal)
            setLoaded(true)
        }
    }, [project])

    //========== Updates the project.goal in the Database and Store ==============
    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/projects/${id}/edit/goal`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value),
        })
        dispatch(getAllProjects())
    }
    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <input type='number' value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button type='submit'>Submit Goal</button>
            </form>
        </>
    )
}

export default EditGoal
