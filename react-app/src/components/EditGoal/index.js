import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const EditGoal = () => {
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

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
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
