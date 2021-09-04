import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getAllProjects } from "../../store/allProjects";


const EditDescription = () => {
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
            setValue(project[0]?.description)
            setLoaded(true)
        }
    }, [project, loaded])

    //========== Updates the project.description in the Database and Store ==============
    const onSubmit = async (e) => {
        e.preventDefault()
        await fetch(`/api/projects/${id}/edit/description`, {
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
                <textarea value={value} onChange={(e) => setValue(e.target.value)}></textarea>
                <button type='submit'>Submit Description</button>
            </form>
        </>
    )
}

export default EditDescription
