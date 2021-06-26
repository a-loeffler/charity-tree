import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const EditName = () => {
    const allProjects = useSelector((state) => state.allProjects.projects)
    const { id } = useParams();
    //========== The specific project could be passed in through the props ==============
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

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
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
