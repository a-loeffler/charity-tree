import React, {useState, useEffect} from 'react';



const ProjectCreator = () => {

    const [section, setSection] = useState(1);
    const [category, setCategory] = useState(null);

    //To do: need to get categories from store
    const categories = ["arts", "community"]

    const sectionForward = (e) => {
        e.preventDefault();
        setSection(section + 1)
    }


    return (
        <div className="project-creator-container">
            <form className="project-creator-form">
                <div className="project-creator-form-section" id="project-creator-form-section-1">
                    <h2 className="project-creator-form-text">Choose a category for your project from the list below:</h2>
                    <select onChange={e => setCategory(e.target.value)}>
                        {categories.map(category => <option value={category}>{category}</option>)}
                    </select>
                    <button onClick={e => sectionForward(e)} >Next</button>
                </div>
                <div className="project-creator-form-section" id="project-creator-form-section-2">
                    
                </div>
                <div className="project-creator-form-section" id="project-creator-form-section-3"></div>
            </form>
        </div>
    )



}

export default ProjectCreator;
