import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProjects } from "../../store/allProjects";


const EditName = () => {
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
            setValue(project[0]?.name)
            setLoaded(true)
        }
    }, [project])

    //========== Updates the project.name in the Database and Store ==============
    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/projects/${id}/edit/name`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value),
        })
        console.log('submit')
        dispatch(getAllProjects())
    }
    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <input value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button type='submit'>Submit Name</button>
            </form>
        </>
    )
}

export default EditName
